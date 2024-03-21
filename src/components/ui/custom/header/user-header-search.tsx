import { Button } from "@components/ui/button";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import parse, { Element } from "html-react-parser";
import { Link } from "react-router-dom";
import useGetQuestionsInfiniteQuery from "@hooks/api/get/useGetQuestionsInfiniteQuery";
import { QuestionsResponse } from "@api/openapi";
import { useIntersection } from "@mantine/hooks";
import useGetFarmListQuery from "@hooks/api/get/useGetFarmListQuery";
import useGetLearningPublishedList from "@hooks/api/get/useGetLearningPublishedList";
import DOMPurify from "dompurify";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import UserHeaderSearchCardSkeleton from "./user-header-search-components.tsx/user-header-search-card-skeleton";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";

const TABS = ["Question", "Community", "Resources", "Events"] as const;

interface UserHeaderSearchProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  query?: string;
}

const UserHeaderSearch = ({
  isOpen,
  setIsOpen,
  query
}: UserHeaderSearchProps) => {
  const [active, setActive] = useState<(typeof TABS)[number]>(TABS[0]);

  const {
    data: questionsData,
    isLoading: isQuestionsDataLoading,
    refetch,
    fetchNextPage
  } = useGetQuestionsInfiniteQuery({
    search: query
  });

  const _questionsData = questionsData?.pages.flatMap(
    page => page.questions
  ) as QuestionsResponse["questions"];
  const { data: communitiesData, isLoading: isCommunitiesLoading } =
    useGetFarmListQuery({
      search: query,
      perpage: "15"
    });
  const { data: learningsData, isLoading: isLearningDataLoading } =
    useGetLearningPublishedList({
      search: query,
      perpage: "15"
    });
  const { data: cropData, isLoading: isCropDataLoading } = useGetCropsQuery();
  const { data: blogData, isLoading: isBlogDataLoading } =
    useGetBlogsPublishList(query, undefined, "15");
  const { data: eventsData, isLoading: isEventsDataLoading } =
    useGetEventPublishedListQuery({
      search: query,
      page: "1",
      perpage: "15"
    });

  const lastElementRef = useRef<HTMLDivElement>(null);

  const { ref, entry } = useIntersection({
    root: lastElementRef.current,
    threshold: 1
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <div
      className={`${
        isOpen ? "h-screen" : "h-[0rem]"
      } absolute left-0 top-20 w-full`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`${
          isOpen
            ? "h-[30rem] rounded-b-md py-6 shadow-md"
            : "h-[0rem] opacity-0"
        } flex w-full bg-background duration-200 overflow-hidden`}
        onClick={e => e.stopPropagation()}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="font-poppins-semibold">
                What are you looking for?
              </h4>

              <div className="flex gap-2 py-2 flex-wrap">
                {TABS.map((tab, idx) => {
                  if (active === tab) {
                    return (
                      <Button
                        key={tab + idx}
                        className="rounded-full"
                        size="sm"
                      >
                        {tab}
                      </Button>
                    );
                  }
                  return (
                    <Button
                      key={tab + idx}
                      variant="outline"
                      className="rounded-full"
                      size="sm"
                      onClick={() => setActive(tab)}
                    >
                      {tab}
                    </Button>
                  );
                })}
              </div>
            </div>

            <span onClick={() => setIsOpen(false)}>
              <IoCloseOutline
                size={36}
                className="text-foreground/70 cursor-pointer"
              />
            </span>
          </div>

          <h6 className="text-foreground/80 pt-2">
            {query ? `Top results '${query}'` : null}
          </h6>

          <div className="pt-2 overflow-y-auto h-[20rem] custom-scroll">
            {active === "Question" && isQuestionsDataLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {active === "Question" &&
              query &&
              _questionsData?.map(({ id, user, title, question }, idx) => {
                const contentHtml = parse(question ?? "", {
                  replace: domNode => {
                    if (domNode instanceof Element) {
                      if (domNode.tagName === "img") {
                        const replacedImg = <></>;
                        return replacedImg;
                      }
                    }
                  }
                });

                return (
                  <Link
                    to={`/forum/question/${user?.username}/${id}`}
                    key={id + `${user?.id}`}
                  >
                    {_questionsData.length - 1 === idx ? (
                      <div
                        className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                        ref={
                          _questionsData.length - 1 === idx ? ref : undefined
                        }
                      >
                        <h5>{title}</h5>
                        <p className="line-clamp-3 text-foreground/70">
                          {contentHtml}
                        </p>
                      </div>
                    ) : (
                      <div
                        className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                        role="button"
                      >
                        <h5>{title}</h5>
                        <p className="line-clamp-3 text-foreground/70">
                          {contentHtml}
                        </p>
                      </div>
                    )}
                  </Link>
                );
              })}

            {/* Skeleton Loading */}
            {active === "Community" && isCommunitiesLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {/* Community */}
            {active === "Community" &&
              query &&
              communitiesData?.farms?.map(({ id, farm_name, description }) => {
                return (
                  <Link
                    to={`community/explore/${id}`}
                    key={id}
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    <div
                      className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                      role="button"
                    >
                      <h5>{farm_name}</h5>
                      <p className="line-clamp-3 text-foreground/70">
                        {description}
                      </p>
                    </div>
                  </Link>
                );
              })}

            {/* Skeleton Loading */}
            {active === "Resources" && isLearningDataLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {/* Learning Materials */}
            {active === "Resources" && query && (
              <>
                {learningsData?.data?.length ?? 0 > 0 ? (
                  <h4 className="pt-5 pb-0 font-poppins-semibold">
                    Learning Materials
                  </h4>
                ) : null}

                {learningsData?.data?.map(({ id, title, content }) => {
                  const description = DOMPurify.sanitize(content ?? "");

                  return (
                    <Link
                      to={`/learning-materials/view/${id}`}
                      key={id}
                      onClick={() => setIsOpen(prev => !prev)}
                    >
                      <div
                        className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                        role="button"
                      >
                        <h5>{title}</h5>
                        <p
                          className="line-clamp-3 text-foreground/70"
                          dangerouslySetInnerHTML={{
                            __html: description
                          }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </>
            )}

            {/* Skeleton Loading */}
            {active === "Resources" && isCropDataLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {/* Planting Calendar*/}
            {active === "Resources" && query && (
              <>
                {(cropData?.filter(f => f.name?.toLowerCase().includes(query))
                  .length ?? 0) > 0 && (
                  <h4 className="pt-5 pb-0 font-poppins-semibold">
                    Planting Calendar
                  </h4>
                )}

                {cropData
                  ?.filter(f => f.name?.toLowerCase().includes(query))
                  .map(({ id, name, description }) => {
                    const _description = DOMPurify.sanitize(description ?? "");

                    return (
                      <Link
                        to={`/planting-calendar/${name}`}
                        key={id}
                        onClick={() => setIsOpen(prev => !prev)}
                      >
                        <div
                          className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                          role="button"
                        >
                          <h5>{name}</h5>
                          <p
                            className="line-clamp-3 text-foreground/70"
                            dangerouslySetInnerHTML={{
                              __html: _description
                            }}
                          />
                        </div>
                      </Link>
                    );
                  })}
              </>
            )}

            {/* Skeleton Loading */}
            {active === "Resources" && isBlogDataLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {/* Blogs */}
            {active === "Resources" && query && (
              <>
                {(blogData?.data?.length ?? 0) > 0 && (
                  <h4 className="pt-5 pb-0 font-poppins-semibold">Blogs</h4>
                )}

                {blogData?.data?.map(({ id, title, content }) => {
                  const _description = DOMPurify.sanitize(content ?? "");

                  return (
                    <Link
                      to={`/blogs/view/${id}`}
                      key={id}
                      onClick={() => setIsOpen(prev => !prev)}
                    >
                      <div
                        className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                        role="button"
                      >
                        <h5>{title}</h5>
                        <p
                          className="line-clamp-3 text-foreground/70"
                          dangerouslySetInnerHTML={{
                            __html: _description
                          }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </>
            )}

            {/* Skeleton Loading */}
            {active === "Events" && isEventsDataLoading && (
              <UserHeaderSearchCardSkeleton />
            )}

            {/* Events */}
            {active === "Events" && query && (
              <>
                {(eventsData?.data?.length ?? 0) > 0 && (
                  <h4 className="pt-5 pb-0 font-poppins-semibold">Events</h4>
                )}

                {eventsData?.data?.map(({ id, title, about }) => {
                  const _description = DOMPurify.sanitize(about ?? "");

                  return (
                    <Link
                      to={`/events/${id}`}
                      key={id}
                      onClick={() => setIsOpen(prev => !prev)}
                    >
                      <div
                        className="hover:bg-foreground/5 px-2 border-b py-5 space-y-2"
                        role="button"
                      >
                        <h5>{title}</h5>
                        <p
                          className="line-clamp-3 text-foreground/70"
                          dangerouslySetInnerHTML={{
                            __html: _description
                          }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHeaderSearch;

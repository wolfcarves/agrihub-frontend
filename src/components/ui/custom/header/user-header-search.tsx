import { Button } from "@components/ui/button";
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Skeleton } from "@components/ui/skeleton";
import parse, { Element } from "html-react-parser";
import { Link } from "react-router-dom";
import useGetQuestionsInfiniteQuery from "@hooks/api/get/useGetQuestionsInfiniteQuery";
import { QuestionsResponse } from "@api/openapi";
import { useIntersection } from "@mantine/hooks";

const TABS = ["Question", "Community", "Resources", "Others"] as const;

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
            ? "h-[25rem] rounded-b-md py-6 shadow-md"
            : "h-[0rem] opacity-0"
        } flex w-full bg-background duration-200 overflow-hidden`}
        onClick={e => e.stopPropagation()}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h4>What are you looking for?</h4>

              <div className="flex gap-2 py-3">
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
            Top results "{query ? query : null}"
          </h6>

          <div className="pt-2 overflow-y-auto h-[15rem] custom-scroll">
            {active === "Question" && isQuestionsDataLoading && (
              <>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <div className="space-y-3 py-5" key={idx + Math.random()}>
                    <Skeleton className="h-4 max-w-[250px]" />
                    <Skeleton className="h-4 max-w-[370px]" />
                  </div>
                ))}
              </>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHeaderSearch;

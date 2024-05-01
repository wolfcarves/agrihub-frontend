import React, { useMemo } from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import SkeletonEventsList from "../skeleton/skeleton-events-list";
import { Divider, Pagination } from "@components/ui/custom";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import useGetEventCommunity from "@hooks/api/get/useGetEventCommunity";
import CommunityEventsCard from "../card/CommunityEventsCard";

const EventsList = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1
    };
  }, [searchParams]);

  const { data: eventsData, isLoading: isEventsLoading } =
    useGetEventPublishedListQuery({
      perpage: "10",
      page: String(params.currentPage),
      filter: "upcoming"
    });

  const { data: eventsPreviousData } = useGetEventPublishedListQuery({
    perpage: "10",
    page: String(params.currentPage),
    filter: "previous"
  });

  const { data: communityEventsData, isLoading: isCommunityEventsLoading } =
    useGetEventCommunity({
      perpage: "10",
      page: String(params.currentPage),
      type: "public",
      filter: "upcoming"
    });

  const { data: communityPreviousEventsData } = useGetEventCommunity({
    perpage: "10",
    page: String(params.currentPage),
    type: "public",
    filter: "previous"
  });

  return (
    <div className="min-h-[30rem] container pb-32">
      <Tabs defaultValue="cuai" className="w-full">
        <div className="flex">
          <TabsList className="mt-8 mx-auto">
            <TabsTrigger value="cuai">Events</TabsTrigger>
            <TabsTrigger value="community">
              Events made by Communites
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="cuai">
          <div className="flex flex-col">
            {isEventsLoading && <SkeletonEventsList count={10} />}
            {eventsData?.data?.length === 0 ? (
              <>
                <div className="py-10 font-poppins-semibold text-black/70">
                  <h2 className="text-center">
                    Sa ngayon ay wala pang paparating na kaganapan,
                    <a href="#previous" className="underline">
                      {" "}
                      tignan ang mga natapos na kaganapan.{" "}
                    </a>
                  </h2>
                </div>
                {eventsPreviousData?.data?.map(data => {
                  return (
                    <div key={data?.id} id="previous">
                      <EventsCard {...data} />
                      <Divider className="py-2" />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {eventsData?.data?.map(data => {
                  return (
                    <div key={data?.id}>
                      <EventsCard {...data} />
                      <Divider className="py-2" />
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="py-5">
            <Pagination
              totalPages={eventsData?.pagination?.total_pages ?? 0}
              isLoading={isEventsLoading}
            />
          </div>
        </TabsContent>
        <TabsContent value="community">
          <div className="flex flex-col">
            {isCommunityEventsLoading && <SkeletonEventsList count={10} />}
            {communityEventsData?.data?.length === 0 ? (
              <>
                <div className="py-10 font-poppins-semibold text-black/70">
                  <h2 className="text-center">
                    Sa ngayon ay wala pang paparating na kaganapan,
                    <a href="#previous" className="underline">
                      {" "}
                      tignan ang mga natapos na kaganapan.{" "}
                    </a>
                  </h2>
                </div>
                {communityPreviousEventsData?.data?.map(data => {
                  return (
                    <div key={data?.id} id="previous">
                      <CommunityEventsCard {...data} />
                      <Divider className="py-2" />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {communityEventsData?.data?.map(data => {
                  return (
                    <div key={data?.id}>
                      <CommunityEventsCard {...data} />
                      <Divider className="py-2" />
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="py-5">
            <Pagination
              totalPages={communityEventsData?.pagination?.total_pages ?? 0}
              isLoading={isCommunityEventsLoading}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsList;

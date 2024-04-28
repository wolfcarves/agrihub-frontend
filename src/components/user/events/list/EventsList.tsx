import React, { useMemo } from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import SkeletonEventsList from "../skeleton/skeleton-events-list";
import { Divider, Pagination } from "@components/ui/custom";
import { useSearchParams } from "react-router-dom";

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

  return (
    <div className="min-h-[30rem] container pb-32">
      <div className="py-10 font-poppins-semibold text-black/70">
        {eventsData?.data?.length === 0 ? (
          <>
            <h2>
              Sa ngayon ay wala pang paparating na kaganapan, maaaring tignan
              ang mga natapos na kaganapan.
            </h2>
          </>
        ) : (
          <>
            <h2>Mga papalapit na kaganapan.</h2>
          </>
        )}
      </div>

      <div className="flex flex-col">
        {isEventsLoading && <SkeletonEventsList count={10} />}
        {eventsData?.data?.length === 0 ? (
          <>
            {eventsPreviousData?.data?.map(data => {
              return (
                <div key={data?.id}>
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
    </div>
  );
};

export default EventsList;

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
      page: String(params.currentPage)
    });

  return (
    <div className="min-h-[30rem] container pb-32">
      <div className="py-10 font-poppins-semibold text-black/70">
        <h2>Mga papalapit na kaganapan</h2>
      </div>

      <div className="flex flex-col">
        {isEventsLoading && <SkeletonEventsList count={5} />}

        {eventsData?.data?.map(data => {
          return (
            <div key={data?.id}>
              <EventsCard {...data} />
              <Divider className="py-2" />
            </div>
          );
        })}
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

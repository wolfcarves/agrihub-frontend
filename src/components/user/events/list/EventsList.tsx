import React from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import SkeletonEventsList from "../skeleton/skeleton-events-list";
import { Divider } from "@components/ui/custom";

const EventsList = () => {
  const { data: eventsData, isLoading: isEventsLoading } =
    useGetEventPublishedListQuery({
      search: "",
      page: "1",
      perpage: "10"
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
    </div>
  );
};

export default EventsList;

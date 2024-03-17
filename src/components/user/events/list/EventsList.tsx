import React from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import SkeletonEventsList from "../skeleton/skeleton-events-list";
import { Divider } from "@components/ui/custom";

const EventsList = () => {
  const { data: eventsData, isLoading } = useGetEventPublishedListQuery({
    search: "",
    page: "1",
    perpage: "10"
  });

  return isLoading ? (
    <div className="my-8">
      <SkeletonEventsList count={5} />
    </div>
  ) : (
    <div className="min-h-[30rem] container pb-32">
      <div className="py-10 font-merri-black text-black/70">
        <h2>Upcoming Events</h2>
      </div>

      <div className="flex flex-col">
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

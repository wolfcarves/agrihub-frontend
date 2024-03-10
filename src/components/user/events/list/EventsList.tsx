import React from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";
import SkeletonEventsList from "../skeleton/skeleton-events-list";

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
    <div className="min-h-[30rem] container">
      <div className="py-10 font-poppins-semibold text-black/70 border-b-2">
        <h3>Upcoming Events</h3>
      </div>

      <div className="flex flex-col">
        {eventsData?.data?.map(data => {
          return <EventsCard key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default EventsList;

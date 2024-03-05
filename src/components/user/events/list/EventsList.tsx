import React from "react";
import EventsCard from "../card/EventsCard";
import useGetEventPublishedListQuery from "@hooks/api/get/useGetEventPublishedListQuery";

const EventsList = () => {
  const { data: eventsData } = useGetEventPublishedListQuery({
    search: "",
    page: "1",
    perpage: "10"
  });

  return (
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

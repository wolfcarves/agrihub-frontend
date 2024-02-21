import React from "react";
import EventDetailsList from "@components/user/event/list/EventDetailsList";
import EventTitle from "@components/user/event/title/EventTitle";

const Event = () => {
  return (
    <div className="container">
      <EventTitle />
      <EventDetailsList />
    </div>
  );
};

export default Event;

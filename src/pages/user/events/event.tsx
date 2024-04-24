import React from "react";
import EventDetailsList from "@components/user/event/list/EventDetailsList";
import EventTitle from "@components/user/event/title/EventTitle";
import BackButton from "@components/ui/custom/button/back-button";

const Event = () => {
  return (
    <div className="container">
      <div className="pt-10 sm:mx-8 w-max">
        <BackButton />
      </div>

      <EventTitle />
      <EventDetailsList />
    </div>
  );
};

export default Event;

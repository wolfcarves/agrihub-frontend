import React from "react";
import EventDetailsList from "@components/user/event/list/EventDetailsList";
import EventTitle from "@components/user/event/title/EventTitle";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="container">
      <div className="mt-20 sm:mx-8 w-max">
        <Link to="/events">
          <span className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200">
            <FaArrowLeftLong /> Back
          </span>
        </Link>
      </div>
      <EventTitle />
      <EventDetailsList />
    </div>
  );
};

export default Event;

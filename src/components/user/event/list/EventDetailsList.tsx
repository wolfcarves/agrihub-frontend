import React from "react";
import EventCard from "../card/EventCard";
import { useParams } from "react-router-dom";
import useGetEventPublishedByIdQuery from "@hooks/api/get/useGetEventPublishedByIdQuery";
import { isSameDay } from "date-fns";
import parse from "html-react-parser";
import { Divider } from "@components/ui/custom";

const EventDetailsList = () => {
  const params = useParams();
  const { data: eventData } = useGetEventPublishedByIdQuery(String(params.id));
  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  } as any;

  const s = new Date(eventData?.event_start ?? "");
  const e = new Date(eventData?.event_end ?? "");

  const startEvent =
    s?.toLocaleDateString("en-US", dateOptions) + " " + s?.toLocaleTimeString();
  const endEvent =
    e?.toLocaleDateString("en-US", dateOptions) + " " + e?.toLocaleTimeString();

  const isSameDate = isSameDay(s, e);

  const endTime = e?.toLocaleTimeString();

  const dateAndTime = isSameDate
    ? `${startEvent} - ${endTime}`
    : `${startEvent} - ${endEvent}`;

  return (
    <>
      <div className="flex flex-col md:flex-row pb-24">
        <div className="flex flex-col gap-3 flex-1 px-0 md:px-10">
          <div className="mt-10 text-center">
            <EventCard title="Speaker" />
            {eventData?.speaker?.map(({ name, profile, title: position }) => {
              return (
                <EventCard avatar={profile} item={name} position={position} />
              );
            })}

            <EventCard title="Organizers" />
            {eventData?.partnership?.map(({ name, organizer, logo }) => {
              return organizer && <EventCard avatar={logo} item={name} />;
            })}
          </div>
        </div>

        <div className="flex-1 1 px-10">
          <div className="mt-10 text-center">
            <EventCard title="Where" item={eventData?.location} />
            <EventCard title="Date" item={dateAndTime} />
          </div>
        </div>
      </div>
      <div>
        <Divider
          $title={
            <i className="text-md font-poppins-medium uppercase">Guide</i>
          }
        />
        <div className="flex flex-col gap-8 py-10 text-center">
          {parse(eventData?.guide || "")}
        </div>
      </div>
    </>
  );
};

export default EventDetailsList;

import React from "react";
import EventCard from "../card/EventCard";
import { useParams } from "react-router-dom";
import { isSameDay } from "date-fns";

import useGetEventCommunityView from "@hooks/api/get/useGetEventCommunityView";

const CommunityEventDetailsList = () => {
  const params = useParams();
  const { data: eventData } = useGetEventCommunityView(String(params.eventId));
  console.log(eventData);
  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  } as any;

  const s = new Date(eventData?.start_date ?? "");
  const e = new Date(eventData?.end_date ?? "");

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
            <EventCard title="Farm" />
            <EventCard item={eventData?.farm_name} />
          </div>
        </div>

        <div className="flex-1 1 px-10">
          <div className="mt-10 text-center">
            <EventCard title="Date" item={dateAndTime} />
          </div>
        </div>
      </div>
      <EventCard title="Tags" />
      {eventData?.tags?.map(({ tag }, index) => (
        <React.Fragment key={index}>
          {tag && (
            <>
              <EventCard item={tag} />
              {index < (eventData?.tags?.length ?? 0) - 1 && <span>, </span>}
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default CommunityEventDetailsList;

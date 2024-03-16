import React from "react";
import useGetEventPublishedByIdQuery from "@hooks/api/get/useGetEventPublishedByIdQuery";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const EventTitle = () => {
  const params = useParams();
  const { data: eventData } = useGetEventPublishedByIdQuery(
    String(params.eventId)
  );

  const s = new Date(eventData?.event_start ?? "");
  const e = new Date(eventData?.event_end ?? "");

  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
  } as Intl.DateTimeFormatOptions | undefined;

  const startEvent =
    s?.toLocaleDateString("en-US", dateOptions) + " " + s?.toLocaleTimeString();

  const endEvent =
    e?.toLocaleDateString("en-US", dateOptions) + " " + e?.toLocaleTimeString();

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col gap-3 flex-1 p-0 sm:p-10">
        <div>
          <span>
            {startEvent} - {endEvent}
          </span>

          <h1 className="font-merri-bold text-black/90 py-3">
            {eventData?.title}
          </h1>
        </div>

        <div className="pt-5 sm:pt-10 pb-3">
          <h5 className="font-merri-bold">About this event</h5>

          <p className="pt-5">{parse(eventData?.about || "")}</p>
        </div>
      </div>

      <div className="flex-1 1 p-5 sm:p-10">
        <img src={eventData?.banner} className="w-full" />
      </div>
    </div>
  );
};

export default EventTitle;

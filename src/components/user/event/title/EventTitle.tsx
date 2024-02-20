import React from "react";
import useGetEventPublishedByIdQuery from "@hooks/api/get/useGetEventPublishedByIdQuery";
import { useParams } from "react-router-dom";

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
  } as any;

  const startEvent =
    s?.toLocaleDateString("en-US", dateOptions) + " " + s?.toLocaleTimeString();

  const endEvent =
    e?.toLocaleDateString("en-US", dateOptions) + " " + e?.toLocaleTimeString();

  return (
    <div className="flex flex-col lg:flex-row pt-20">
      <div className="flex flex-col gap-3 flex-1 p-0 sm:p-10">
        <div>
          <span>
            {startEvent} - {endEvent}
          </span>

          <h1 className="font-poppins-semibold text-black/90 py-3">
            Farmers Market Grand Opening | Community Leaders
          </h1>

          <span className="font-poppins-medium text-black/90">
            Organized by:{" "}
            {
              eventData?.partnership
                ?.filter(p => p.organizer === true)
                .map(p => p.name)[0]
            }
          </span>

          <div>
            <span>
              {eventData?.partnership?.map(item => (
                <span>{item.organizer}</span>
              ))}
            </span>
          </div>
        </div>

        <div className="pt-5 sm:pt-10 pb-3">
          <h4 className="font-poppins-medium">About this event</h4>
          <p className="pt-5">{eventData?.about}</p>
        </div>
      </div>

      <div className="flex-1 1 p-5 sm:p-10">
        <img src={eventData?.banner} className="w-full" />
      </div>
    </div>
  );
};

export default EventTitle;

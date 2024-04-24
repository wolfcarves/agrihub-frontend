import React from "react";
import useGetEventPublishedByIdQuery from "@hooks/api/get/useGetEventPublishedByIdQuery";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { toast } from "sonner";
import { Card } from "@components/ui/card";
import { TiArrowForwardOutline } from "react-icons/ti";

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

  const handleShare = async (
    title: string | undefined,
    text: string | undefined,
    url: string | undefined
  ) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: `${window.location.origin}/${url}`
        });
      } else {
        throw new Error("Web Share API is not supported");
      }
    } catch (error: any) {
      toast(error.message, {
        duration: 2000,
        style: {
          backgroundColor: "#ff5733"
        }
      });
    }
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col gap-3 flex-1 p-0 sm:p-10">
        <div>
          <span>
            {startEvent} - {endEvent}
          </span>

          <h1 className="font-poppins-semibold text-black/90 py-3">
            {eventData?.title}
          </h1>
        </div>

        <div className=" pb-3">
          <Card
            className="flex max-w-24 font-poppins-medium px-4 py-1 items-center justify-center cursor-pointer"
            onClick={e => {
              e.preventDefault();
              handleShare(
                eventData?.title,
                eventData?.type,
                `events/${eventData?.id}`
              );
            }}
          >
            Share
            <TiArrowForwardOutline size="24" />
          </Card>
          <h5 className="font-poppins-semibold">About this event</h5>

          <p className="pt-5">{parse(eventData?.about || "")}</p>
        </div>

        <div className="pt-5">
          <h5 className="font-poppins-semibold">Event Type</h5>

          <p className="pt-5">{eventData?.type}</p>
        </div>
      </div>

      <div className="flex-1 1 p-5 sm:p-10">
        <img src={eventData?.banner} className="w-full" />
      </div>
    </div>
  );
};

export default EventTitle;

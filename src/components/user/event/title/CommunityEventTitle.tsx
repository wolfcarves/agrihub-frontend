import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { toast } from "sonner";
import { Card } from "@components/ui/card";
import { TiArrowForwardOutline } from "react-icons/ti";
import { format, isSameDay } from "date-fns"; // Import isSameDay function
import useGetCommunityFarmEventView from "../../../../hooks/api/get/useGetCommunityFarmEventView";

const CommunityEventTitle = () => {
  const params = useParams();
  const { data: eventData } = useGetCommunityFarmEventView(
    String(params.eventId)
  );

  const backupDateString = "2024-01-01";

  const s = new Date(eventData?.start_date?.slice(0, -5) ?? backupDateString);
  const e = new Date(eventData?.end_date?.slice(0, -5) ?? backupDateString);

  const startEvent = format(s, "MMMM d, yyyy");
  const endEvent = format(e, "MMMM d, yyyy");

  const isSameDate = isSameDay(s, e);

  const startTime = format(s, "hh:mm:a");
  const endTime = format(e, "hh:mm:a");

  const dateAndTime = isSameDate
    ? `${startEvent} ${startTime} - ${endTime}`
    : `${startEvent} - ${endEvent}`;

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
          <span>{dateAndTime}</span> {/* Display date and time */}
          <h1 className="font-poppins-semibold text-black/90 py-3">
            {eventData?.title}
          </h1>
        </div>

        <div className=" pb-3">
          <h5 className="font-poppins-semibold">About this event</h5>
          <p className="pt-5">{parse(eventData?.about || "")}</p>
        </div>

        <div className="pt-5">
          <h5 className="font-poppins-semibold">Event Type</h5>
          <p className="pt-5">{eventData?.type}</p>
        </div>

        <Card
          className="flex max-w-24 font-poppins-medium px-4 py-1 items-center justify-center cursor-pointer mt-5"
          onClick={e => {
            e.preventDefault();
            handleShare(
              eventData?.title,
              eventData?.type,
              `events/${eventData?.id}`
            );
          }}
        >
          Share <TiArrowForwardOutline size="24" />
        </Card>
      </div>

      <div className="flex-1 1 p-5 sm:p-10">
        <img src={eventData?.banner} className="w-full" />
      </div>
    </div>
  );
};

export default CommunityEventTitle;

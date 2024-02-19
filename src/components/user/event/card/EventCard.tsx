import React from "react";
import { EventSpeaker } from "@api/openapi";
import { Divider } from "@components/ui/custom";

interface EventCardProps {
  title?: string;
  item?: string;
  avatar?: string;
}

const EventCard = ({ title, item, avatar }: EventCardProps) => {
  return (
    <div>
      {title && (
        <Divider
          $title={
            <i className="text-md font-poppins-medium uppercase">{title}</i>
          }
        />
      )}

      <div
        className={`flex flex-col gap-8 ${
          title && item ? "py-10" : "pt-0 pb-10"
        }`}
      >
        <div className="flex items-center">
          {avatar && (
            <img
              src={avatar}
              className="w-10 h-10 bg-black/10 rounded-full me-2"
            />
          )}

          <span className="text-md truncate">{item}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import { Divider } from "@components/ui/custom";
import { Label } from "@components/ui/label";

interface EventCardProps {
  title?: string;
  item?: string;
  avatar?: string;
  position?: string;
}

const EventCard = ({ title, item, avatar, position }: EventCardProps) => {
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
        <div className="flex items-center mx-auto">
          {avatar && (
            <img
              src={avatar}
              className="w-10 h-10 bg-black/10 rounded-full me-2"
            />
          )}
          <div className="text-left text-wrap flex-wrap">
            <div className="text-md">{item}</div>
            {position && <Label>{position}</Label>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import { Divider } from "@components/ui/custom";
import { FaArrowRight } from "react-icons/fa6";
import { EventDetails } from "@api/openapi";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

interface EventsCardProps extends EventDetails {}

const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

const EventsCard = ({
  about,
  banner,
  event_start,
  id,
  location,
  title
}: EventsCardProps) => {
  const d = new Date(event_start as string);

  const month = d.toString().split(" ")[1];
  const day = d.toString().split(" ")[2];
  const year = d.toString().split(" ")[3];

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justiy-between py-10">
      <div className="pe-0 lg:pe-8">
        <h3 className="font-poppins-medium text-black/70">{month}</h3>
        <span>{year}</span>
        <h1 className="font-poppins-bold text-black/70 text-5xl">{day}</h1>
      </div>

      <div className="w-full lg:px-14">
        <Link to={`/events/${id}`}>
          <img
            alt="events-background-image"
            src={S3_BASE_URL + banner}
            className="w-full h-[20rem] object-cover hover:opacity-85 rounded-lg"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Link to={`/events/${id}`}>
          <h3 className="font-poppins-semibold text-black/70 line-clamp-2 hover:underline underline-offset-4">
            {title}
          </h3>
        </Link>

        <span className="text-md font-poppins-medium text-black/70 line-clamp-2">
          {location}
        </span>

        <span className="text-black/70 line-clamp-5">{parse(about || "")}</span>

        <Divider className="py-3 mt-auto" />

        <Link
          to={String(id)}
          className="group flex gap-4 items-center py-3 w-max hover:bg-black/5 rounded-lg px-2 duration-100"
        >
          <span className="text-md font-poppins-semibold text-black/70 group-hover:text-black ">
            View Events Details
          </span>
          <FaArrowRight className="group-hover:ms-1 -ms-2 duration-100 text-black/70 group-hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;

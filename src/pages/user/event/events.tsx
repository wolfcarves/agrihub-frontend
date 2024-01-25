import React from "react";
import { Link } from "react-router-dom";
import { eventsData } from "./eventsData";
import { formatDateTime } from "@components/lib/utils";

const Events = () => {
  const ellipsis = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength).trim() + "...";
    }
  };

  return (
    <div>
      <section className="pt-5 pb-32">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="sm:max-w-md text-center xl:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
              Latest Events
            </h1>
            <p className="text-gray-600">
              Explore our latest agricultural events and stay updated on
              industry trends and practices.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((items, key) => (
              <p className="w-full mx-auto group sm:max-w-sm" key={key}>
                <Link to={`/events/view/${items.eventId}`}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <span className="block text-green-800 text-sm">
                      {formatDateTime(items.eventStart)} | {items.status}
                    </span>
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-green-700 font-semibold">
                      {ellipsis(items.title, 40)}
                    </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {ellipsis(items.desc, 160)}
                    </p>
                  </div>
                </Link>
              </p>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Events;

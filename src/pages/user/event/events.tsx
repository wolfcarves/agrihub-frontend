import React from "react";
import { Link } from "react-router-dom";
import { eventsData } from "./eventsData";
import { formatDateTime } from "@components/lib/utils";
import { Card } from "@components/ui/card";

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
              <Card className="w-full mx-auto group sm:max-w-sm" key={key}>
                <Link to={`/events/view/${items.eventId}`}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg max-h-52 min-h-52"
                  />
                  <div className="mt-3 space-y-2 px-5 pb-5">
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-green-700 font-semibold line-clamp-2">
                      {items.title}
                    </h3>
                    <p className="line-clamp-2">{items.desc}</p>
                    <h5 className="block font-bold text-gray-800">
                      {items.status} | {formatDateTime(items.eventStart)}
                    </h5>
                    <h6 className="text-gray-600 font-bold line-clamp-2">
                      {items.where}
                    </h6>
                  </div>
                </Link>
              </Card>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Events;

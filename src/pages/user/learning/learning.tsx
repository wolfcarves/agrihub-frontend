import React from "react";
import { useParams } from "react-router-dom";
import { learningsData } from "./learningsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel";

const Learning = () => {
  const { learningsId } = useParams();

  const selectedEvent = learningsData.find(
    learnings => learnings.id === learningsId
  );

  if (!selectedEvent) {
    return <div>Event not found!</div>;
  }

  const renderResource = (resource: {
    type: string;
    name: string;
    resource: string;
  }) => {
    if (resource.type === "image") {
      return (
        <img
          src={resource.resource}
          alt={resource.name}
          className="w-full rounded-md max-w-md max-h-80"
        />
      );
    } else if (resource.type === "video") {
      return (
        <div className="max-w-md">
          <iframe
            width="560"
            height="315"
            src={resource.resource}
            title={resource.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-6 shadow-lg border rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
      <Carousel>
        <CarouselContent>
          {selectedEvent.learning_resources.map((resource, index) => (
            <CarouselItem className="h-auto">
              <div
                key={index}
                className="mb-2 flex justify-between flex-wrap m-5 shadow-lg p-5 rounded-lg"
              >
                <h2 className="w-1/3">
                  <span className="font-bold">{resource.name}</span>
                  <br />
                  {resource.description}
                </h2>
                <div className="w-1/2 max-h-80">{renderResource(resource)}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-gray-700 my-2">
        <strong>Date:</strong> {selectedEvent.date}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Type:</strong> {selectedEvent.type}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Language:</strong> {selectedEvent.language}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Tags:</strong>{" "}
        {selectedEvent.tags.map((tag, index) => (
          <span
            key={index}
            className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 ml-2 py-1"
          >
            {tag.name}
          </span>
        ))}
      </p>

      <p className="py-4 text-lg">{selectedEvent.content}</p>

      <div>
        <strong>Learning Credits:</strong>
        <ul className="list-disc ml-4">
          {selectedEvent.learning_credits.map((credit, index) => (
            <>
              <p key={index} className="text-gray-700 font-semibold sm:text-lg">
                {credit.name}
              </p>
              <p className="text-green-600">{credit.title_occupation}</p>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Learning;

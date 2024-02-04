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
        <div  className='w-full aspect-video'>
          <iframe className="w-full h-full"
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
    <div className="max-w-4xl lg:max-w-6xl lg:p-6 mx-auto my-6 shadow-lg border rounded-md">
      <h2 className="text-xl font-bold m-4">{selectedEvent.title}</h2>
      <Carousel>  
        <CarouselContent>
          {selectedEvent.learning_resources.map((resource, index) => (
            <CarouselItem className="lg:h-auto">
              <div
                key={index}
                className="mb-2 flex bg-[#f5f5f5] justify-between flex-wrap m-3 shadow-lg rounded-lg"
              >
                <h2 className="lg:w-2/5 sm:w-1/3">
                <h2 className="text-xl font-bold ml-3 my-4">{resource.name}</h2>
                  <span className="block m-5 text-base">
                    {resource.description}
                  </span>
                </h2>
                <div className="w-[700px] sm:w-2/3 lg:w-3/5">{renderResource(resource)}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col items-center my-7 ">
        <div className="w-5/6 lg:w-3/4">
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

          <p className="py-5 mb-5 text-[18px]">{selectedEvent.content}</p>

          <strong>Learning Credits:</strong>
        <ul className="list-disc mt-4">
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

    </div>
  );
};

export default Learning;

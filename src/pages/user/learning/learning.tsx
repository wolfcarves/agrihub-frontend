import React from "react";
import { useParams } from "react-router-dom";
import { learningsData } from "./learningsData";
import { Link } from "react-router-dom";
import { formatDateTime } from "@components/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};


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
    <>
    <div className="max-w-4xl lg:max-w-6xl lg:p-6 mx-auto my-6 shadow-lg border rounded-md">
      <h2 className="text-2xl lg:text-4xl font-bold m-4">{selectedEvent.title}</h2>
      <div className="m-4">
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
      </div>
      <Carousel>  
        <CarouselContent>
          {selectedEvent.learning_resources.map((resource, index) => (
            <CarouselItem className="h-[550px] sm:h-auto lg:h-auto">
              <div
                key={index}
                className="mb-2 flex bg-[#f5f5f5] justify-between flex-wrap m-3 shadow-lg rounded-lg"
              >
                <h2 className="lg:w-2/5">
                <h2 className="text-xl font-bold ml-3 my-4">{resource.name}</h2>
                  <span className="block m-5 text-base">
                    {resource.description} This workshop provides a comprehensive overview of water management practices in agriculture. Participants will learn about the importance of efficient water usage, sustainable irrigation techniques, and strategies for optimizing water resources on the farm. 
                  </span>
                </h2>
                <div className="w-[700px] sm:w-full lg:w-3/5">{renderResource(resource)}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col items-center">
        <div className="w-5/6 lg:w-3/5">
          <p className="font-bold text-[20px] 2xl:mt-10 text-gray-700 underline decoration-solid decoration-green-400 underline-offset-[3px] ">Overview:</p>
          <p className="p-5 mb-5 text-[18px] text-justify indent-10 tracking-wide">{selectedEvent.content}</p>

          <strong>Learning Credits:</strong>
        <ul className="list-disc mt-3">
          {selectedEvent.learning_credits.map((credit, index) => (
            <>
              <p key={index} className="text-gray-700 font-semibold sm:text-lg">
                {credit.name}
              </p>
              <p className="text-green-600 mb-3">{credit.title_occupation}</p>
            </>
          ))}
        </ul>
        </div>
      </div>
    </div>
    <h1 className="font-poppins-semibold flex justify-center mt-14 tracking-widest">RELATED SOURCES</h1>
    <br></br>
    <div className="flex justify-center w-full ">
      <div className="w-full p-8 sm:p-4 xl:mx-32 2xl:px-56 grid grid-cols-1 sm:grid-cols-3 grid-rows-1 gap-5">
          {learningsData.slice(0,3).map((items, key) => (
            <div key={key} className="group flex flex-col ">
              <div className="max-w-350px sm:w-full sm:h-[200px] lg:h-[300px] h-[300px]">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-full object-cover rounded-lg max-h-300px max-w-750px overflow-hidden group-hover:scale-105 transition-transform duration-300"
                />
              </div>
                <div className="mb-2 bg-[#cae3cd] rounded-md">
                  <h5 className="text-black pt-1 text-sm lg:text-[18px] font-bold m-2">
                    INITIATIVES
                  </h5>
                  <p className="text-sm me-3 text-justify m-2 h-[60px] md:h-[90px] sm:h-[87px] xl:h-[73px] ">
                    {ellipsis(items.content, 120)}
                  </p>
                </div>
              <Link to={`/learning-materials/view/${items.id}`}>
              <div className="m-2">
              <h5 className="font-bold lg:text-[20px] mb-10">READ MORE <span className="ml-3 text-[16px] text-red-600" >&gt;</span></h5>
              </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
    </>
  );

};

export default Learning;

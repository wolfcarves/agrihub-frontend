import React from "react";
import { useParams } from "react-router-dom";
import { learningsData } from "./learningsData";
import { Link } from "react-router-dom";
import { formatDate } from "@components/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../../../components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";

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
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
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
      <div className="max-w-4xl lg:max-w-6xl lg:p-6 mx-auto my-6">
        <h2 className="text-sm lg:text-md font-thin mx-4 underline decoration-solid decoration-green-400 underline-offset-[3px]">
          Learning Material | {selectedEvent.language}
        </h2>
        <h2 className="text-2xl lg:text-4xl font-bold mx-4 my-1">
          {selectedEvent.title}
        </h2>
        <p className="text-gray-700 m-4">
          last updated: {formatDate(selectedEvent.date)}
        </p>
        <Carousel>
          <CarouselContent>
            {selectedEvent.learning_resources.map((resource, index) => (
              <CarouselItem className="h-[550px] sm:h-auto lg:h-auto">
                <div
                  key={index}
                  className="mb-2 flex flex-col sm:flex-row bg-[#f5f5f5] justify-between m-3"
                >
                  <h2 className="lg:w-2/5">
                    <h2 className="text-xl font-bold ml-3 my-4">
                      {resource.name}
                    </h2>
                    <span className="block m-5 text-base">
                      {resource.description} This workshop provides a
                      comprehensive overview of water management practices in
                      agriculture. Participants will learn about the importance
                      of efficient water usage, sustainable irrigation
                      techniques, and strategies for optimizing water resources
                      on the farm.
                    </span>
                  </h2>
                  <div className="w-full sm:w-[700px] lg:w-3/5">
                    {renderResource(resource)}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="m-4">
          <p className="text-gray-700 mb-2">
            {selectedEvent.tags.map((tag, index) => (
              <span
                key={index}
                className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1"
              >
                {tag.name}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-5/6 lg:w-3/5">
            {/*  */}
            <p className="font-bold text-[20px] 2xl:mt-10 text-gray-700 underline decoration-solid decoration-green-400 underline-offset-[3px] ">
              Overview:
            </p>
            <p className="p-5 mb-5 text-[18px] text-justify indent-10 tracking-wide">
              {selectedEvent.content}
            </p>

            {/* credits */}
            <Accordion type="multiple">
              <AccordionItem value="credits">
                <AccordionTrigger className=" decoration-green-400">
                  <b className="my-4">Credits</b>
                </AccordionTrigger>
                {selectedEvent.learning_credits.map((credit, index) => (
                  <AccordionContent>
                    <p className="text-gray-700 font-semibold sm:text-md">
                      {credit.name}
                    </p>
                    <p className="text-green-600 mb-3">
                      {credit.title_occupation}
                    </p>
                  </AccordionContent>
                ))}
              </AccordionItem>

              <AccordionItem value="user-permission">
                <AccordionTrigger className=" decoration-green-400">
                  <b className="my-4">User Permissions</b>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="text-md">
                    For information on user permissions, please read our Terms
                    of Service. If you have questions about how to cite anything
                    on our website in your project or classroom presentation,
                    please contact your teacher. They will best know the
                    preferred format. When you reach out to them, you will need
                    the page title, URL, and the date you accessed the resource.
                  </span>
                  <br />
                  <div className="mb-2 mt-4">
                    <span className="text-lg">
                      <b>Media</b>
                    </span>
                    <br />
                    <span className="text-md">
                      If a media asset is downloadable, a download button
                      appears in the corner of the media viewer. If no button
                      appears, you cannot download or save the media.
                    </span>
                  </div>
                  <br />
                  <div className="my-2">
                    <span className="text-lg">
                      <b>Text</b>
                    </span>
                    <br />
                    <span className="text-md">
                      Text on this page is printable and can be used according
                      to our{" "}
                      <Link
                        to="/terms-condition"
                        className="underline decoration-solid decoration-green-400 hover:decoration-gray-950 underline-offset-[3px]"
                      >
                        Terms of Service
                      </Link>
                      .
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* related */}
      <h1 className="font-poppins-semibold flex justify-center mt-14 tracking-widest">
        RELATED SOURCES
      </h1>
      <br></br>
      <div className="flex justify-center w-full mb-4">
        <div className="w-full p-8 sm:p-4 xl:mx-32 2xl:px-56 grid grid-cols-1 sm:grid-cols-3 grid-rows-1 gap-5">
          {learningsData
            .filter(item =>
              item.tags.some(tag =>
                selectedEvent.tags.some(
                  selectedTag => selectedTag.name === tag.name
                )
              )
            )
            .filter(item => item.id !== selectedEvent.id)
            .slice(0, 3)
            .map((items, key) => (
              <div key={key} className="group flex flex-col shadow-md">
                <Link to={`/learning-materials/view/${items.id} `}>
                  <div className="max-w-300px h-[300px] overflow-hidden">
                    <img
                      src={items.img}
                      loading="lazy"
                      alt={items.title}
                      className="w-full h-full object-cover max-h-300px max-w-750px  group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="text-black pt-1 font-bold mx-2 my-4">
                      INIATIVES <span className="text-green-500">{">"}</span>
                    </h6>
                    <h5 className="text-black pt-1 text-sm lg:text-[18px] font-bold mx-2 mb-4">
                      {items.title}
                    </h5>
                    <p className="text-sm me-3 text-justify m-2 h-[60px] md:h-[90px] sm:h-[87px] xl:h-[73px]">
                      {ellipsis(items.content, 120)}
                    </p>
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

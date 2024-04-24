import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import {
  convertToEmbedLink,
  formatDate,
  formatDateTime
} from "@components/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";
import Autoplay from "embla-carousel-autoplay";
import useGetLearningViewPublic from "../../../hooks/api/get/useGetLearningViewPublic";
import useGetLeaningRelated from "../../../hooks/api/get/useGetLeaningRelated";
import LoadingSpinner from "@icons/LoadingSpinner";
import BackButton from "@components/ui/custom/button/back-button";
import { toast } from "sonner";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Card } from "@components/ui/card";

const Learning = () => {
  const { learningsId } = useParams();
  const { data: learningDetail } = useGetLearningViewPublic(learningsId || "");
  const { data: relateds } = useGetLeaningRelated(
    learningDetail?.tags?.map(tag => tag.tag)
  );

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

  if (!learningDetail) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl lg:max-w-6xl lg:p-6 mx-auto">
        <div className="text-sm lg:text-md font-thin mx-4 underline decoration-solid decoration-green-400 underline-offset-[3px]">
          <Link to="/learning-materials">Learning Material</Link> |{" "}
          {learningDetail.language}
        </div>
        <div className="flex-wrap justify-between items-center">
          <h2 className="flex gap-4 text-2xl lg:text-4xl font-bold mx-4 my-1">
            <BackButton /> {learningDetail.title}
          </h2>
          <div className="flex justify-start sm:justify-end">
            <Card
              className="flex max-w-24 font-poppins-medium px-4 py-1 items-center justify-center mx-4 cursor-pointer"
              onClick={e => {
                e.preventDefault();
                handleShare(
                  learningDetail.title,
                  learningDetail.language,
                  `learning-materials/view/${learningDetail.id}`
                );
              }}
            >
              Share
              <TiArrowForwardOutline size="24" />
            </Card>
          </div>
        </div>
        <p className="text-gray-700 m-4">
          last updated: {formatDateTime(learningDetail.updatedat)}
        </p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000
            })
          ]}
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent>
            {learningDetail?.learning_resource?.map((resource, index) => (
              <CarouselItem className=" ">
                <div
                  key={index}
                  className="mb-2 flex flex-col md:flex-row bg-[#f5f5f5] justify-between m-3"
                >
                  <div className="lg:w-2/5 w-full">
                    <h2 className="text-xl font-bold ml-3 my-4">
                      {resource.name}
                    </h2>
                    <span className="block m-5 text-base">
                      {resource.description}
                    </span>
                  </div>
                  <div className="w-full  lg:w-3/5 flex justify-end">
                    {resource.type === "image" ? (
                      <img
                        src={resource.resource}
                        alt={resource.name}
                        className="w-full aspect-video object-cover object-center rounded-b-md sm:rounded-e-md max-h-[24rem]"
                      />
                    ) : resource.type === "video" ? (
                      <div className="w-full aspect-video max-h-[24]">
                        <iframe
                          className="w-full h-full"
                          src={convertToEmbedLink(resource.resource || "")}
                          title={resource.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="m-4 flex flex-wrap gap-2 w-[85%] lg:w-[75%] mx-auto">
          {learningDetail?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1"
            >
              {tag.tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[85%] lg:w-[75%]">
            {/*  */}
            <p className="font-bold text-[20px] 2xl:mt-10 text-gray-700 underline decoration-solid decoration-green-400 underline-offset-[3px] ">
              Overview:
            </p>
            <div className="my-5 text-[18px] text-justify indent-10 tracking-wide">
              {parse(learningDetail.content || "")}
            </div>

            {/* credits */}
            <Accordion type="multiple">
              <AccordionItem value="credits">
                <AccordionTrigger className=" decoration-green-400">
                  <h3 className="my-4 font-poppins-semibold">Credits</h3>
                </AccordionTrigger>
                {learningDetail?.learning_credits?.map((credit, index) => (
                  <AccordionContent key={index}>
                    <p className="text-gray-700 font-semibold sm:text-md">
                      {credit.name}
                    </p>
                    <p className="text-green-600 mb-3">{credit.title}</p>
                  </AccordionContent>
                ))}
              </AccordionItem>

              <AccordionItem value="user-permission">
                <AccordionTrigger className=" decoration-green-400">
                  <h3 className="my-4 font-poppins-semibold">
                    User Permissions
                  </h3>
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
        <div className="mx-4 sm:mx-32 grid grid-cols-12 gap-4">
          {relateds
            ?.filter(item => item.id !== learningsId)
            .map((items, key) => (
              <div
                key={key}
                className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col shadow-md"
              >
                <Link to={`/learning-materials/view/${items.id}`}>
                  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    {items.thumbnail.type === "image" ? (
                      <img
                        src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${items.thumbnail.resource}`}
                        alt={items.thumbnail.id}
                        className="h-48 w-full object-cover"
                      />
                    ) : items.thumbnail.type === "video" ? (
                      <div className="w-full aspect-video h-48 rounded-t-md">
                        <iframe
                          className="w-full h-full rounded-t-md"
                          src={convertToEmbedLink(
                            items.thumbnail.resource || ""
                          )}
                          title={items.thumbnail.id}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null}

                    <div className="bg-white p-4 sm:p-6">
                      <time className="block text-xs text-gray-500">
                        {formatDate(items.createdat)} | {items.language}
                      </time>

                      <h3 className="font-poppins-semibold mt-0.5 text-lg text-gray-900">
                        {items.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ">
                        {parse(items.content || "")}
                      </p>
                      <div className="my-4 item">
                        <p className="text-gray-700 mb-2 flex flex-wrap">
                          {items.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 mb-2 py-1"
                            >
                              {tag.tag}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Learning;

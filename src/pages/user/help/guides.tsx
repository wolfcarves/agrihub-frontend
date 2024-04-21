import React, { useState } from "react";
import { FaPlay, FaRegImage } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import extractYouTubeVideoId from "../learning/util/extractYtUrl";
import { convertToEmbedLink } from "@components/lib/utils";

interface Guide {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const guides: Guide[] = [
  {
    time: "30",
    title: "Pag gawa ng account",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.",
    icon: <IoPersonOutline size={64} />
  },
  {
    time: "98",
    title: "Pag rehistro ng farm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.",
    icon: <TfiWrite size={64} />
  },
  {
    time: "3:00",
    title: "Dolorem praesentium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.",
    icon: <PiPlant size={64} />
  },
  {
    time: "4:15",
    title: "Explicabo eaque",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.",
    icon: <FaRegImage size={64} />
  }
];

const UserGuides = () => {
  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const guidelineVid = "https://youtu.be/tBxpyTiJWNw";
  const [videoSrc, setVideoSrc] = useState<string>(guidelineVid);
  // nakukuha na seconds pero yung link aralin pa
  const handleTimeClick = (time: string) => {
    setVideoSrc(`https://youtu.be/tBxpyTiJWNw&t=${time}s`);
  };

  return (
    <>
      {isPreviewing && (
        <div
          className="fixed inset-0 h-full w-full flex justify-center items-center z-50 bg-black/70"
          onClick={() => setIsPreviewing(false)}
        >
          <div
            className={`relative w-[90%] aspect-video xl:w-1/2 xl:h-1/2 object-contain animate-appear bg-black`}
          >
            <div className="absolute inset-0 m-auto h-max w-max -z-10">
              <LoadingSpinner className="text-primary" />
            </div>

            <iframe
              className={`w-full h-full object-contain aspect-auto`}
              src={convertToEmbedLink(videoSrc || "")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container py-10">
        <h2 className="font-poppins-semibold">User Guides</h2>
        <div className="w-full flex justify-center">
          <div className="relative w-1/2 aspect-video rounded-md border">
            <img
              src={`https://i.ytimg.com/vi/${extractYouTubeVideoId(
                videoSrc
              )}/hqdefault.jpg`}
              className="w-full h-full object-cover rounded-t-md"
            />

            <button
              className="absolute inset-0"
              onClick={e => {
                e.preventDefault();
                searchParams.set("preview", videoSrc);
                setSearchParams(searchParams);
                setIsPreviewing(true);
              }}
            >
              <div className="m-auto rounded-full w-max h-max border p-5">
                <FaPlay className="text-background translate-x-1" size={36} />
              </div>
            </button>
          </div>
        </div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col p-6">
            <h2 className="py-4 text-3xl font-bold text-center">Contents</h2>
            <div className="divide-y divide-gray-700">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
                  onClick={() => handleTimeClick(guide.time)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                    {guide.icon}
                  </div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="text-xs tracki uppercase dark:text-violet-400">
                      {guide.time} - {guide.title}
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      {guide.title}
                    </span>
                    <span className="mt-4 dark:text-gray-300">
                      {guide.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserGuides;

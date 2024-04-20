import { convertToEmbedLink } from "@components/lib/utils";
import LoadingSpinner from "@icons/LoadingSpinner";
import React, { useMemo, useState } from "react";
import { FaPlay, FaRegImage } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { useSearchParams } from "react-router-dom";
import extractYouTubeVideoId from "../learning/util/extractYtUrl";

interface Guide {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const guides: Guide[] = [
  {
    time: "0:30",
    title: "Pag gawa ng account",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.",
    icon: <IoPersonOutline size={64} />
  },
  {
    time: "1:28",
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
  const [videoSrc, setVideoSrc] = useState<string>(
    "https://www.youtube.com/embed/BrXOiFAf84c?si=QYGAHaxj2RDddr03"
  );
  const guidelineVid = "https://youtu.be/Zx31bB2vMns?si=UuB92dqimBUbA3KJ";

  const handleTimeClick = (time: string) => {
    setVideoSrc(
      `https://www.youtube.com/embed/BrXOiFAf84c?start=${time}&si=QYGAHaxj2RDddr03`
    );
  };

  return (
    <>
      <div className="container py-10">
        <h2 className="font-poppins-semibold">User Guides</h2>
        {/* Video iframe */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-video rounded-t-md border">
            <img
              src={`https://i.ytimg.com/vi/${extractYouTubeVideoId(
                guidelineVid
              )}/hqdefault.jpg`}
              className="w-full h-full object-cover rounded-t-md"
            />

            <button
              className="absolute inset-0"
              onClick={e => {
                e.preventDefault();
                searchParams.set("preview", guidelineVid);
                setSearchParams(searchParams);
                setIsPreviewing(true);
              }}
            >
              <div className="m-auto rounded-full w-max h-max border p-5">
                <FaPlay className="text-background translate-x-1" size={36} />
              </div>
            </button>
            {/* <iframe
                      className="w-full h-full rounded-t-md"
                      src={convertToEmbedLink(items.thumbnail.resource || "")}
                      title={items.thumbnail.id}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe> */}
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

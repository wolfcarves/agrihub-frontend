import React from "react";
import { Link } from "react-router-dom";
import { convertToEmbedLink, formatDate } from "@components/lib/utils";
import useGetLearningPublishedList from "../../../hooks/api/get/useGetLearningPublishedList";
import parse from "html-react-parser";

const Learnings = () => {
  const { data: learningsData } = useGetLearningPublishedList();
  console.log(learningsData, "asdasd");
  return (
    <section className="my-12 mx-auto px-4 max-w-screen-xl md:px-8 py-8">
      <div className="text-left">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Learning Materials
        </h1>
        <p className="mt-3 text-gray-500">
          Explore a wealth of knowledge to cultivate success on your farm
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {learningsData?.data?.map((items, key) => (
          <article
            className="max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <Link to={`/learning-materials/view/${items.id}`}>
              <div className="h-48 rounded-t-md">
                {items.thumbnail.type === "image" ? (
                  <img
                    src={items.thumbnail.resource}
                    alt={items.thumbnail.id}
                    className="w-full aspect-video object-cover object-center rounded-md h-48 rounded-t-md"
                  />
                ) : items.thumbnail.type === "video" ? (
                  <div className="w-full aspect-video h-48 rounded-t-md">
                    <iframe
                      className="w-full h-full rounded-t-md"
                      src={convertToEmbedLink(items.thumbnail.resource || "")}
                      title={items.thumbnail.id}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="">
                  <span className="block text-gray-400 text-sm">
                    {formatDate(items.createdat)}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3 ">
                <h3 className="text-xl text-gray-900 truncate">
                  {items.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-3">
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
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Learnings;

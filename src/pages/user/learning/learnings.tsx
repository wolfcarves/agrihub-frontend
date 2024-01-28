import React from "react";
import { learningsData } from "./learningsData";
import { Link } from "react-router-dom";

const Learnings = () => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 py-8">
      <div className="text-left">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Learning Materials
        </h1>
        <p className="mt-3 text-gray-500">
          Explore a wealth of knowledge to cultivate success on your farm
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {learningsData.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <Link to="/learning-materials/view">
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                {/* <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div> */}
                {/* got ml 3 */}
                <div className="">
                  {/* <span className="block text-gray-900">
                    {items.authorName}
                  </span> */}
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Learnings;

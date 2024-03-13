import React from "react";
import { Link } from "react-router-dom";
import { helpList } from "./helpData";
import { Card } from "@components/ui/card";
import parse from "html-react-parser";
import { IoArrowForward } from "react-icons/io5";

const Helps = () => {
  return (
    <div className="pb-36">
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <form
            onSubmit={e => e.preventDefault()}
            className="max-w-md mt-12 sm:mx-32"
          >
            <div className="space-y-3 ">
              <h1 className="text-3xl text-gray-800 font-semibold">
                Help Center
              </h1>
            </div>

            <p className="text-gray-600 max-w-lg mx-auto text-lg mb-2">
              Welcome to the AgriHub Help Center!
            </p>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-green-600"
              />
            </div>
            <p className="text-gray-600 max-w-lg mx-auto text-lg font-bold mt-8">
              Topic
            </p>
          </form>

          <ul className="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-32">
            {helpList.map(item => (
              <Link
                to={`/helps/${item.title}`}
                className="group relative block h-56 sm:h-64 lg:h-72"
                key={item.title}
              >
                <span className="absolute inset-0 border-2 border-dashed border-green-600 rounded-md"></span>

                <div className="relative flex h-full transform items-end shadow-xl rounded-md border-gray-600 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    {item.icon}

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base line-clamp-3">
                      {parse(item.answer)}
                    </p>

                    <p className="mt-8 font-bold group-hover:text-green-600 flex items-center">
                      Read more <IoArrowForward className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>

          <Card className="flex items-center justify-center p-5 max-w-screen-xl sm:mx-32 my-8">
            Didnt find what you're looking for? Try to{" "}
            <Link to="about" className="ml-1 underline text-green-600">
              contact us
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Helps;

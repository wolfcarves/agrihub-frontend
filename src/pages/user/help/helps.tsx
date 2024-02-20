import React from "react";
import { Link } from "react-router-dom";
import { helpList } from "./helpData";

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
              How can we help you?
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
                to={`/helps/${item.ref}`}
                className="border rounded-lg"
                key={item.ref}
              >
                <div className="flex items-start justify-center p-4">
                  <div className="space-y-2 text-center">
                    <div className="flex justify-center">{item.icon}</div>
                    <h4 className="text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Helps;

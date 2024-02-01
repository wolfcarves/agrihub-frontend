import React from "react";
import { blogsData } from "./blogs-data";
import { formatDateTime } from "@components/lib/utils";
import { Link } from "react-router-dom";
import { ellipsis } from "./blog";

const Blogs = () => {
  return (
    <div className="py-4 px-8">
      <h3 className="mb-3">Recent Blogs</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-5">
        {blogsData.map((items, key) => (
          <div key={key} className="group flex flex-col">
            <div className="max-h-370px max-w-750px">
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-lg max-h-370px max-w-750px"
              />
            </div>
            <Link to={`/blogs/view/${items.blogId}`}>
              <div className="mt-3">
                <h5 className="text-gray-600 pt-1 text-sm">
                  {formatDateTime(items.date)}
                </h5>
                <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold pt-1 text-lg">
                  {ellipsis(items.title, 30)}
                </h1>
                <p className="text-sm me-8 text-justify">
                  {ellipsis(items.desc, 180)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

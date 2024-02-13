import React from "react";
import { formatDateTime } from "@components/lib/utils";
import { Link } from "react-router-dom";
import { ellipsis } from "./blog";
import { blogData, blog_image } from "../../../constants/data";

const Blogs = () => {
  return (
    <div className="py-4 px-8">
      <h3 className="mb-3">Recent Blogs</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-5">
        {blogData.map((item, index) => {
          const correspondingImages = blog_image.filter(
            image => image.blogId === item.blogId
          );
          const thumbnail = correspondingImages.find(image => image.thumbnail);
          return (
            <Link to={`/blogs/view/${item.blogId}`}>
              <div key={index} className="group flex flex-col">
                <div className="max-h-370px max-w-750px">
                  <img
                    src={thumbnail ? thumbnail.image : "fallback_image_url"}
                    loading="lazy"
                    alt={item.title}
                    className="w-full rounded-lg max-h-370px max-w-750px"
                  />
                </div>

                <div className="mt-3">
                  <h5 className="text-gray-600 pt-1 text-sm">
                    {formatDateTime(item.createdAt)}
                  </h5>
                  <h5 className="font-bold mt-1">
                    {item.category}{" "}
                    <span className="text-green-700">{">"}</span>
                  </h5>
                  <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg">
                    {ellipsis(item.title, 30)}
                  </h1>
                  <p className="text-sm me-8 text-justify">
                    {ellipsis(item.content, 180)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

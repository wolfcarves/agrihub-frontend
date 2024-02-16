import React, { useState } from "react";
import { formatDateTime } from "@components/lib/utils";
import { Link } from "react-router-dom";
import { ellipsis } from "./blog";
import { blogData, blog_image } from "../../../constants/data";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext
} from "@components/ui/Pagination";

const Blogs = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = blogData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="py-4 px-8">
      <h3 className="mb-3">Recent Blogs</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-5">
        {paginatedData.map((item, index) => {
          const correspondingImages = blog_image.filter(
            image => image.blogId === item.blogId
          );
          const thumbnail = correspondingImages.find(image => image.thumbnail);
          return (
            <Link to={`/blogs/view/${item.blogId}`} key={index}>
              <div className="group flex flex-col">
                <div className="max-h-370px max-w-750px">
                  <img
                    src={thumbnail ? thumbnail.image : "fallback_image_url"}
                    loading="lazy"
                    alt={item.title}
                    className="w-full rounded-lg max-h-64 min-h-64 object-cover"
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
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          />
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="my-8"
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blogs;

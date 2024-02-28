import React, { useState } from "react";
import { blogData, blog_image } from "../../../../constants/data";
import { Link } from "react-router-dom";
import { formatDateTime } from "@components/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext
} from "@components/ui/pagination";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import DOMPurify from "dompurify";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const ContentInitiatives: React.FC = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const { data: blogData } = useGetBlogsPublishList();
  console.log(blogData);

  return (
    <div className="px-28 pb-8">
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-5">
        {blogData?.data
          ?.filter(item => item.category === "Initiatives")
          .slice(0, 4)
          .map((item, index) => {
            const d = new Date(item?.createdat ?? "");

            const createDate = d.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            });

            const htmlContent = DOMPurify.sanitize(item?.content ?? "");
            return (
              <Link to={`/blogs/view/${item.id}`} key={index}>
                <div className="group flex flex-col">
                  <div className="max-h-370px max-w-750px ">
                    <img
                      src={item?.thumbnail}
                      alt={item.title}
                      className="w-full rounded-t-lg max-h-64 min-h-64 object-cover"
                    />
                  </div>

                  <div className="mt-3 pb-3">
                    <h5 className="text-gray-600 pt-1 text-sm">{createDate}</h5>
                    <div className="flex-row grid-flow-row py-3">
                      <span className="">
                        {item?.tags?.map(tags => (
                          <span className="text-base text-primary rounded-md w-32 border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 text-center">
                            {tags.tag}
                          </span>
                        ))}
                      </span>
                    </div>
                    <h5 className="font-bold mt-1">
                      {item.category}{" "}
                      <span className="text-green-700">{">"}</span>
                    </h5>
                    <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg line-clamp-2">
                      {item?.title}
                    </h1>
                    <p
                      className="text-sm me-8 text-justify line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ></p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ContentInitiatives;

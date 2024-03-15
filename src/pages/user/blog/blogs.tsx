import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "@components/ui/custom";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import parse from "html-react-parser";
import { formatDate } from "@components/lib/utils";
import SkeletonCard from "@components/ui/custom/skeleton/skeleton-card";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  const [searchParams] = useSearchParams();
  const params = String(searchParams.get("page")) ?? "1";

  const { data: blogData, isLoading } = useGetBlogsPublishList(
    "",
    params,
    "10"
  );

  return (
    <div className="py-4 sm:px-8 overflow-hidden">
      <div className="text-left pb-8">
        <h1 className="text-3xl text-gray-800 font-semibold">Blogs</h1>
        <p className="mt-3 text-gray-500 max-w-lg">
          Explore latest news and initiatives from Center for Urban Agriculture
          and Innovation and know more about their focus
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {isLoading && <SkeletonCard count={10} className="md:w-1/3 w-full" />}
        {blogData?.data?.map((item, index) => {
          return (
            <Link to={`/blogs/view/${item.id}`} key={index}>
              <div className="group flex flex-col max-w-sm">
                <div className="max-h-370px max-w-750px overflow-hidden">
                  <img
                    src={item?.thumbnail}
                    alt={item.title}
                    className="w-full rounded-lg max-h-64 min-h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="mt-3">
                  <h5 className="text-gray-600 pt-1 text-sm">
                    {formatDate(item.createdat || "")}
                  </h5>
                  <h5 className="font-bold mt-1 flex items-center">
                    {item.category}
                    <span className="text-green-700 ml-2">
                      <IoIosArrowForward />
                    </span>
                  </h5>
                  <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg">
                    {item?.title}
                  </h1>

                  <p className="text-sm me-8 text-justify line-clamp-3">
                    {parse(item.content || "")}
                  </p>
                </div>
                <div className="flex py-3">
                  <div className="flex-wrap flex justify-start">
                    {item?.tags?.map(tags => (
                      <span className="text-base text-primary rounded-md mb-2 border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 text-center w-auto">
                        {tags.tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-40">
        <Pagination
          totalPages={blogData?.pagination?.total_pages ?? 1}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "@components/ui/custom";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import parse from "html-react-parser";
import { formatDate } from "@components/lib/utils";
import SkeletonCard from "@components/ui/custom/skeleton/skeleton-card";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = String(searchParams.get("page")) ?? "1";

  const { data: blogData, isLoading } = useGetBlogsPublishList(
    "",
    params,
    "10"
  );

  let headerContent = null;
  if (!isLoading && (blogData?.data?.length ?? 0) > 0) {
    const [firstItem] = blogData?.data ?? [];
    const navigateFirst = () => {
      navigate(`/blogs/view/${firstItem.id}`);
    };
    headerContent = (
      <div
        className="relative w-full cursor-pointer h-[70vh] sm:h-screen overflow-hidden "
        onClick={navigateFirst}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex justify-end mx-4 items-center text-white ">
            <div className="w-full p-0 sm:py-10">
              <div>
                <img
                  src={firstItem?.thumbnail}
                  className="w-full rounded-lg h-full object-cover"
                  alt="Blog Thumbnail"
                />
                <h5 className="text-gray-600 pt-1 text-sm">
                  {formatDate(firstItem?.createdat || "")}
                </h5>
                <h5 className="font-bold mt-1 flex items-center text-black">
                  {firstItem?.category}
                  <span className="text-green-700 ml-2">
                    <IoIosArrowForward />
                  </span>
                </h5>
                <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg">
                  {firstItem?.title}
                </h1>

                <p className="text-sm me-8 text-justify line-clamp-3 text-black">
                  {parse(firstItem?.content || "")}
                </p>
                <div className="flex py-3">
                  <div className="flex-wrap flex justify-start">
                    {firstItem?.tags?.map(tags => (
                      <span className="text-base text-primary rounded-md mb-2 border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 text-center w-auto">
                        {tags.tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-left">
        <h1 className="text-3xl text-gray-800 font-semibold ml-4 mt-4">
          Recent Blogs
        </h1>
      </div>

      {isLoading && (
        <div>
          <SkeletonCard count={9} className="md:w-1/3 w-full" />
        </div>
      )}
      <div className="flex-nowrap sm:flex gap-2">
        {/* header */}

        <div className="relative w-full h-auto sm:h-screen overflow-hidden">
          {headerContent}
        </div>
        <div className="px-4 overflow-auto no-scrollbar w-full">
          <div className="flex flex-wrap justify-center gap-2">
            <div className="h-full sm:h-screen">
              {blogData?.data?.map((item, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <div>
                    <Link to={`/blogs/view/${item.id}`} key={index}>
                      <div className="group flex sm:flex-nowrap flex-wrap items-center mx-auto">
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src={item?.thumbnail}
                            alt={item.title}
                            className="w-full group-hover:scale-110 duration-300"
                          />
                        </div>

                        <div className="mt-3 w-full p-4">
                          <h5 className="text-gray-600 pt-1 text-sm">
                            {formatDate(item.createdat || "")}
                          </h5>
                          <h5 className="font-bold mt-1 flex items-center">
                            {item.category}
                            <span className="text-green-700 ml-2">
                              <IoIosArrowForward />
                            </span>
                          </h5>
                          <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg line-clamp-1">
                            {item?.title}
                          </h1>

                          <p className="text-sm me-8 text-justify line-clamp-3">
                            {parse(item.content || "")}
                          </p>
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
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto py-4">
        <Pagination
          totalPages={blogData?.pagination?.total_pages ?? 1}
          isLoading={false}
        />
      </div>
    </>
  );
};

export default Blogs;

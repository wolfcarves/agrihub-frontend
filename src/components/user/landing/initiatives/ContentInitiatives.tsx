import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "@components/lib/utils";
import parse from "html-react-parser";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import { Button } from "@components/ui/button";
import SkeletonCard from "@components/ui/custom/skeleton/skeleton-card";
import { IoIosArrowForward } from "react-icons/io";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const ContentInitiatives: React.FC = () => {
  const { data: blogData, isLoading } = useGetBlogsPublishList();
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="sm:px-28 pb-8">
      {isLoading && (
        <div>
          {" "}
          <SkeletonCard count={4} className="w-full md:w-1/2" />
        </div>
      )}
      <div className="grid grid-cols-1 mx-8 lg:grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-5">
        {blogData?.data
          ?.filter(item => item.category === "Initiatives")
          .slice(0, showAll ? undefined : 4)
          .map((item, index) => {
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
                    <h5 className="text-gray-600 pt-1 text-sm">
                      {formatDate(item.createdat || "")}
                    </h5>
                    <h5 className="font-bold mt-1 flex items-center">
                      {item.category}
                      <span className="text-green-700 ml-2">
                        <IoIosArrowForward />
                      </span>
                    </h5>
                    <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg line-clamp-2">
                      {item?.title}
                    </h1>
                    <p className="text-sm me-8 text-justify line-clamp-3">
                      {parse(item.content || "")}
                    </p>
                    <div className="flex-row grid-flow-row py-3">
                      <span className="">
                        {item?.tags?.map(tags => (
                          <span className="text-base text-primary rounded-md w-32 border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1 text-center">
                            {tags.tag}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {!showAll && (
        <Button
          variant="outline"
          className="w-full my-4"
          onClick={handleSeeMore}
        >
          See More
        </Button>
      )}
    </div>
  );
};

export default ContentInitiatives;

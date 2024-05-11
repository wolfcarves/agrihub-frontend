import { formatDate } from "@components/lib/utils";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import React from "react";
import parse from "html-react-parser";

import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SkeletonCard from "@components/ui/custom/skeleton/skeleton-card";
import { IoIosArrowForward } from "react-icons/io";

const ContentOurFocus: React.FC = () => {
  const { data: blogData, isLoading } = useGetBlogsPublishList(
    undefined,
    undefined,
    undefined,
    "Our Focus"
  );

  return (
    <>
      <div className="sm:px-28">
        <div className="mb-16 mx-auto max-w-screen-xl">
          {isLoading && <SkeletonCard count={3} className="md:w-1/3" />}
          <Carousel
            className="m-4"
            opts={{
              align: "start",
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 2000
              })
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogData?.data?.map((item, index) => {
                return (
                  <CarouselItem className="pl-2 md:pl-4 max-w-sm" key={index}>
                    <Link to={`/blogs/view/${item.id}`}>
                      <div className="group flex flex-col">
                        <div className="max-h-370px max-w-750px">
                          <img
                            src={item?.thumbnail}
                            alt={item.title}
                            className="w-full rounded-lg max-h-64 min-h-64 object-cover"
                          />
                        </div>

                        <div className="mt-3">
                          <h5 className="text-gray-600 pt-1 text-sm">
                            {formatDate(item?.createdat || "")}
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
                            {parse(item?.content || "")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ContentOurFocus;

import React, { useEffect, useState } from "react";
import imageagri from "@assets/images/Ellipse-agrilogo.png";
import { Link, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import useGetBlogsPublishyIdQuery from "@hooks/api/get/useGetBlogsPublishyIdQuery";
import DOMPurify from "dompurify";
import LoadingSpinner from "@icons/LoadingSpinner";
import useGetBlogsPublishList from "@hooks/api/get/useGetBlogsPublishListQuery";
import Autoplay from "embla-carousel-autoplay";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const Blog = () => {
  const blogId = useParams().blogId;

  const { data, isLoading } = useGetBlogsPublishyIdQuery(blogId ?? "");

  const thumbnail = data?.images.filter(d => d.thumbnail)[0].image;

  const [mainImage, setMainImage] = useState<string | undefined>(
    thumbnail ?? ""
  );

  useEffect(() => {
    setMainImage(thumbnail);
  }, [thumbnail]);

  const d = new Date(data?.createdat ?? "");

  const { data: blogData } = useGetBlogsPublishList();

  const createDate = d.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const htmlContent = DOMPurify.sanitize(data?.content ?? "");

  return (
    <>
      <div>
        <div className="pt-10 px-8 mt-2">
          {mainImage && (
            <img
              src={mainImage}
              className="w-full mx-auto max-w-5xl object-contain object-center h-[35rem]"
            />
          )}

          {isLoading && (
            <div className="h-[30rem] pb-10 flex">
              <LoadingSpinner className="text-primary text-xl m-auto" />
            </div>
          )}

          <Carousel
            className="mx-auto max-w-5xl"
            opts={{
              align: "start",
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000
              })
            ]}
          >
            <CarouselContent className="-ml-1">
              {data?.images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/5 cursor-pointer"
                  onClick={() => setMainImage(image.image)}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={image.image}
                      alt={`Image ${index}`}
                      className="aspect-video object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center justify-center gap-2 py-5">
            <img src={imageagri} alt="logo" />
            <h5>Center for Urban Agriculture &nbsp;| &nbsp; {createDate}</h5>
          </div>

          <h1 className="text-gray-800 duration-150 font-semibold text-center">
            {data?.title}
          </h1>

          <div className="flex justify-center py-10">
            {data?.tags.map(({ tag }) => (
              <p className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1">
                {tag}
              </p>
            ))}
          </div>

          <p
            className="pt-4 text-justify max-w-5xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: htmlContent
            }}
          />
        </div>
      </div>

      <h3 className="px-10 mt-20 mb-5 max-w-5xl mx-auto"> Suggested Blogs </h3>
      <div className="mb-16 mx-auto max-w-5xl">
        <Carousel
          className="m-4"
          opts={{
            align: "start",
            loop: true
          }}
        >
          {/* <CarouselPrevious />
          <CarouselNext /> */}
          <CarouselContent className="-ml-2 md:-ml-4">
            {blogData?.data?.slice(0, 5).map((item, index) => {
              const htmlContent = DOMPurify.sanitize(item?.content ?? "");

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
                          {createDate}
                        </h5>
                        <h5 className="font-bold mt-1">
                          {item.category}
                          <span className="text-green-700">{"   >"}</span>
                        </h5>
                        <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold text-lg">
                          {item?.title}
                        </h1>

                        <p
                          className="text-sm me-8 text-justify line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: htmlContent
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Blog;

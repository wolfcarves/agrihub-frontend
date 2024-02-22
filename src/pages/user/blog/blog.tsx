import React, { useState } from "react";
import imageagri from "@assets/images/Ellipse-agrilogo.png";
import { useParams } from "react-router-dom";
import { blogData } from "../../../constants/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import useGetBlogsPublishyIdQuery from "@hooks/api/get/useGetBlogsPublishyIdQuery";
import DOMPurify from "dompurify";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const Blog = () => {
  const blogId = useParams().blogId;

  const { data } = useGetBlogsPublishyIdQuery(blogId ?? "");

  const thumbnail = data?.images.filter(d => d.thumbnail)[0].image;

  const [mainImage, setMainImage] = useState<string>(thumbnail || "");

  // const [showAllBlogs, setShowAllBlogs] = useState<boolean>(false);

  // const suggestedBlogs = showAllBlogs
  //   ? blogData.filter(blogsData => blogsData.blogId !== blogId)
  //   : blogData.filter(blogsData => blogsData.blogId !== blogId).slice(0, 3);

  const d = new Date(data?.createdat ?? "");

  const createDate = d.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const htmlContent = DOMPurify.sanitize(data?.content ?? "");

  return (
    <>
      <div>
        <div className="py-10 pb-56 px-8 mt-2">
          <img
            src={mainImage}
            loading="lazy"
            className="w-full object-contain object-center mb-5 h-[35rem]"
          />

          <Carousel className="mx-auto w-max">
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
                      className="w-80 h-max aspect-square object-cover"
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
            className="pt-16 text-justify"
            dangerouslySetInnerHTML={{
              __html: htmlContent
            }}
          />
        </div>
      </div>

      {/* <h3 className="px-10 mt-20 mb-5"> Suggested Blogs </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-20 px-10">
        {suggestedBlogs.map((item, key) => (
          <div key={key} className="group flex flex-col">
            <div className="max-h-370px max-w-750px">
              <img
                src={mainImage || imageagri}
                loading="lazy"
                alt={item.title}
                className="w-full rounded-lg max-h-370px max-w-750px"
              />
            </div>
            <Link to={`/blogs/view/${item.blogId}`}>
              <div className="mt-3">
                <h5 className="text-gray-600 pt-1 text-sm lg:text-sm sm:text-xs line-clamp-1">
                  {formatDateTime(item.createdAt)}
                </h5>
                <h5 className="font-bold mt-1">
                  {item.category} <span className="text-green-700">{">"}</span>
                </h5>
                <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold pt-1 text-md lg:text-lg xs:text-xs line-clamp-1">
                  {ellipsis(item.title, 30)}
                </h1>
                <p className="text-sm me-8 text-justify lg:text-md sm:text-xs">
                  {ellipsis(item.content, 180)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mx-8 my-5 w-auto">
        {!showAllBlogs && (
          <Button
            variant="outline"
            onClick={() => setShowAllBlogs(true)}
            className="w-full"
          >
            See More
          </Button>
        )}
      </div> */}
    </>
  );
};

export default Blog;

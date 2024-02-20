import React, { useState } from "react";
import imageagri from "@assets/images/Ellipse-agrilogo.png";
import { formatDateTime } from "@components/lib/utils";
import { useParams, Link } from "react-router-dom";
import { blogData, blog_image } from "../../../constants/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import { Button } from "@components/ui/button";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const Blog = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const selectedEvent = blogData.find(event => event.blogId === blogId);

  if (!selectedEvent) {
    return <div>Event not found!</div>;
  }

  const [mainImage, setMainImage] = useState<string | null>(
    blog_image.find(image => image.blogId === blogId && image.thumbnail)
      ?.image || null
  );

  const [showAllBlogs, setShowAllBlogs] = useState<boolean>(false);

  const suggestedBlogs = showAllBlogs
    ? blogData.filter(blogsData => blogsData.blogId !== blogId)
    : blogData.filter(blogsData => blogsData.blogId !== blogId).slice(0, 3);

  return (
    <>
      <div>
        <div className="py-4 px-8 mt-2">
          <img
            src={mainImage || imageagri}
            loading="lazy"
            alt={selectedEvent.title}
            className="w-full object-cover object-center mb-5"
          />
          <div className="mx-8">
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                {blog_image
                  .filter(image => image.blogId === blogId)
                  .map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/5"
                      onClick={() => setMainImage(image.image)}
                    >
                      <div>
                        <div className="flex items-center justify-center">
                          <img
                            src={image.image}
                            alt={`Image ${index}`}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex items-center justify-center gap-2 py-5">
            <img src={imageagri} alt="logo" />
            <h5>
              Center for Urban Agriculture &nbsp;| &nbsp;
              {formatDateTime(selectedEvent.createdAt)}
            </h5>
          </div>
          <h1 className="text-gray-800 duration-150 font-semibold text-center">
            {selectedEvent.title}
          </h1>
          <div className="flex justify-center">
            {selectedEvent.tags.map(tags => (
              <p className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 py-1">
                {tags}
              </p>
            ))}
          </div>
          <p className="pt-5 text-justify">{selectedEvent.content}</p>
        </div>
      </div>

      <h3 className="px-10 mt-20 mb-5"> Suggested Blogs </h3>
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
      </div>
    </>
  );
};

export default Blog;

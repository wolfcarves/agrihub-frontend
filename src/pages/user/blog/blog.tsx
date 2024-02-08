import React from "react";
import imageagri from "@assets/images/Ellipse-agrilogo.png";
import { formatDateTime } from "@components/lib/utils";
import { blogsData } from "./blogs-data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const Blog = () => {
  const { blogId } = useParams();

  const selectedEvent = blogsData.find(event => event.blogId === blogId);

  if (!selectedEvent) {
    return <div>Blog not found!</div>;
  }

  return (
    <>
      <div>
        <div className="py-4 px-8 mt-2">
          <img
            src={selectedEvent.img}
            loading="lazy"
            alt={selectedEvent.title}
            className="rounded-lg w-full h-[35rem] object-cover object-center"
          />
          <div className="flex items-center justify-center gap-2 py-5">
            <img src={imageagri} />
            <h5>
              Center for Urban Agriculture &nbsp;| &nbsp;
              {formatDateTime(selectedEvent.date)}
            </h5>
          </div>

          <h1 className="text-gray-800 duration-150 font-semibold text-center">
            {selectedEvent.title}
          </h1>
          <p className="pt-5 text-justify">{selectedEvent.desc}</p>
        </div>
      </div>

      <h3 className="px-10 mt-20 mb-5"> Suggested Blogs </h3>
      <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-rows-2 gap-20 px-10">
        {blogsData.map((items, key) => (
          <div key={key} className="group flex flex-col">
            <div className="max-h-370px max-w-750px">
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-lg max-h-370px max-w-750px"
              />
            </div>
            <Link to={`/blogs/view/${items.blogId}`}>
              <div className="mt-3">
                <h5 className="text-gray-600 pt-1 text-sm">
                  {formatDateTime(items.date)}
                </h5>
                <h1 className="text-gray-800 duration-150 group-hover:text-green-700 font-semibold pt-1 text-lg">
                  {ellipsis(items.title, 30)}
                </h1>
                <p className="text-sm me-8 text-justify">
                  {ellipsis(items.desc, 180)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

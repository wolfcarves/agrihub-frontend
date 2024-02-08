import React, { useState } from "react";
import ReadMoreButton from "../Button/ReadMore";
import { useNavigate } from "react-router-dom";
import { blogsData } from "@pages/user/blog/blogs-data";
import SeeMore from "../Button/SeeMore";

export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

const ContentLatest: React.FC = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const blogsCategory = blogsData.filter((item) => item.category === "news").slice(0, visibleCount);
  const visibleBlogs = showAll ? blogsData.filter((item) => item.category === "news") : blogsCategory;

  const handleCardClick = (blogId: string) => {
    navigate(`/blogs/view/${blogId}`);
  };

  const handleSeeMoreClick = () => {
    setVisibleCount((prevCount) => prevCount + 2);
    setShowAll(true);
  };

  const handleSeeLessClick = () => {
    setVisibleCount(4);
    setShowAll(false);
  };

  visibleBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-10 mx-auto">
        {visibleBlogs.map((item) => (
          <div
            key={item.blogId}
            className="flex flex-col items-start bg-gray-100 rounded-lg shadow-lg"
            style={{ cursor: "pointer" }}
            onClick={() => handleCardClick(item.blogId)}
          >
            <img
              src={item.img}
              alt={`Image ${item.blogId}`}
              className="w-full h-80 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <p className="text-left uppercase font-bold">{item.title}</p>
              <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
                {ellipsis(item.desc, 180)}
              </p>
              <ReadMoreButton text="Read more" to={`/blogs/view/${item.blogId}`} />
            </div>
          </div>
        ))}
      </div>
      {!showAll && blogsCategory.length > 3 && (
        <SeeMore onClick={handleSeeMoreClick} text="See More" />
      )}
      {showAll && <SeeMore onClick={handleSeeLessClick} text="See Less" />}
    </div>
  );
};

export default ContentLatest;

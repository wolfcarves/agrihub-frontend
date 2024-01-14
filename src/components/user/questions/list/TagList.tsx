import SearchBar from "@components/ui/custom/search-bar/SearchBar";
import React from "react";
import TagCard from "../card/TagCard";
import useGetTagsQuery from "@hooks/api/get/useGetTagsQuery";

const TagList = () => {
  const { data: tagsData } = useGetTagsQuery({});

  return (
    <div className="flex flex-col">
      <SearchBar placeholder="Filter by tag name" />

      <div className="flex flex-wrap gap-x-3 gap-y-7 mt-10">
        {tagsData?.tags?.map(({ id, tag_name, details, count }) => (
          <TagCard
            key={id}
            title={tag_name}
            description={details}
            questionTotal={count}
          />
        ))}
      </div>
    </div>
  );
};

export default TagList;

/*
 {mockData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col border-2 border-gray-500 rounded-lg h-full hover:border-green-500"
        >
          <div className="flex-shrink-0 p-2"></div>
          <div className="flex flex-col flex-grow h-full">
            <h2 className="text-xl font-bold truncate p-2 cursor-pointer">
              {data.title}
            </h2>
            <h4
              className="text-md text-gray-600 overflow-hidden p-2 cursor-pointer"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {data.description}
            </h4>
          </div>
        </div>
      ))}
*/

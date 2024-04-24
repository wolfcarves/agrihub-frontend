import SearchBar from "@components/ui/custom/search-bar/SearchBar";
import React, { useEffect, useMemo, useState } from "react";
import TagCard from "../card/TagCard";
import useGetTagsQuery from "@hooks/api/get/useGetTagsQuery";
import { Pagination } from "@components/ui/custom";
import { useSearchParams } from "react-router-dom";

const TagList = () => {
  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1
    };
  }, [searchParams]);

  const { data: tagsData, isLoading: isTagsDataLoading } = useGetTagsQuery({
    search: query,
    page: String(params.currentPage),
    perpage: "40"
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, [params.currentPage]);

  return (
    <div className="flex flex-col">
      <h2 className="font-poppins-semibold">Question Tags</h2>

      <div className=" items-center h-full py-3">
        <SearchBar
          placeholder="Filter by tag name"
          onChange={e => setQuery(e.target.value)}
        />
      </div>

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

      <div className="mt-10">
        <Pagination
          totalPages={tagsData?.pagination?.total_pages ?? 0}
          isLoading={isTagsDataLoading}
        />
      </div>
    </div>
  );
};

export default TagList;

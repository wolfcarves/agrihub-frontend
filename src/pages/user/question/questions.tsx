/*
  path - /questions
*/
import { TbUserQuestion } from "react-icons/tb";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import useGetQuestions from "@hooks/api/get/useGetQuestions";
import Pagination from "@components/ui/custom/pagination/pagination";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<"newest" | "active" | "trending">(
    "newest"
  );

  const { data } = useGetQuestions(undefined, String(page), undefined, filter);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const onFilterChange = (filterKey: "newest" | "active" | "trending") => {
    setFilter(filterKey);
  };

  const handleNavigateAsk = () => {
    navigate("/questions/ask");
  };

  console.log(data);

  //This is temporary, refactor later--------
  return (
    <div className="p-3 max-h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[1.5rem] font-medium ">All Questions</h2>
        <Button onClick={() => handleNavigateAsk()}>
          <TbUserQuestion size={18} />
          &nbsp;Ask Questions
        </Button>
      </div>

      <div className="mb-3">
        <h1 className="text-base text-gray-2">
          {data?.pagination?.total_records &&
            data?.pagination?.total_records + " Questions"}
        </h1>
        <div className="flex justify-between items-center my-1">
          <div className="flex">
            <button
              className={`flex items-center border-l border-y border-primary text-primary py-1 px-3 text-base rounded-l-full  ${
                filter === "newest" ? "bg-primary text-white" : null
              }`}
              onClick={() => {
                onFilterChange("newest");
              }}
            >
              Newest
            </button>
            <button
              className={`flex items-center border border-primary text-primary py-1 px-3 text-base  ${
                filter === "active" ? "bg-primary text-white" : null
              }`}
              onClick={() => {
                onFilterChange("active");
              }}
            >
              Active
            </button>
            <button
              className={`flex items-center border-r border-y border-primary text-primary py-1 px-3 text-base rounded-r-full ${
                filter === "trending" ? "bg-primary text-white" : null
              }`}
              onClick={() => {
                onFilterChange("trending");
              }}
            >
              Trending
            </button>
          </div>
          <button className="flex items-center border border-primary text-primary py-1 px-3 rounded-full focus:bg-primary focus:text-white">
            <BsFilter size={18} />
            &nbsp;Filter
          </button>
        </div>
      </div>

      {data?.questions &&
        data?.questions.map((questions, index) => (
          <Link
            to={`/question/${questions.user?.username}/${questions.id}`}
            key={index}
            className="p-2 border border-border rounded flex flex-col gap-1 mb-2"
          >
            <div className="flex gap-3 text-sm text-gray-1">
              <span>{questions.vote_count} votes</span>
              <span>{questions.answer_count} answers</span>
              <span>0 views</span>
            </div>
            <h1 className="text-base font-medium text-primary leading-none">
              {questions.title}
            </h1>
            <p className="line-clamp-3 text-sm">{questions.question}</p>
            <div className="flex gap-2 text-sm">
              {questions.tags?.map((tags, i) => (
                <span
                  key={i}
                  className="text-[#5D7453] bg-[#C9E7A3] px-2 py-1 rounded-md"
                >
                  {tags.tag}
                </span>
              ))}
            </div>
          </Link>
        ))}

      <Pagination
        currentPage={Number(data?.pagination?.page)}
        totalPages={Number(data?.pagination?.total_pages)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Questions;

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
import { BsThreeDots } from "react-icons/bs";
import { TiArrowForwardOutline } from "react-icons/ti";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";

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

  //This is temporary, refactor later--------
  return (
    <div className="">
      <div className="flex justify-between items-center mb-3">
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
            className="flex flex-col gap-4 border border-border my-5 rounded-lg p-4 shadow-md"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-11 line-clamp-2 text-xl font-semibold">
                {questions.title}
              </div>
              <div className="col-span-1 flex justify-end">
                <BsThreeDots size={25} />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-3 flex gap-2 items-center flex-nowrap">
                <img className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl" />
                <div>
                  <h6 className="font-semibold text-nowrap ">Rodel Crisosto</h6>
                  <p className="text-gray-400 text-nowrap ">3 months ago</p>
                </div>
              </div>
              <div className="col-span-4 flex items-start justify-end pt-1 gap-1 flex-wrap">
                <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
                  sample
                </span>
                <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
                  sample
                </span>
                <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
                  sample
                </span>
                <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
                  sample
                </span>
                <span className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg">
                  sample
                </span>
              </div>
            </div>
            <div className="line-clamp-4">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center font-bold gap-2">
                <PiArrowFatUp size={18} /> 512 <PiArrowFatDown size={18} />
              </div>
              <div className="flex items-center gap-2 font-bold">
                <LuMessagesSquare size={18} /> 234
              </div>
              <div className="flex items-center gap-2 font-bold">
                <TiArrowForwardOutline size={20} /> Share
              </div>
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

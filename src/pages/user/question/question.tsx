/*
  path - /question/:username/:questionId/:questionTitle
*/

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useGetViewQuestion from "../../../hooks/api/get/useGetViewQuestion";
import { timeAgo } from "../../../components/lib/utils";
import { UserAuth } from "../../../providers/AuthProvider";
import { PiShareFatLight } from "react-icons/pi";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { CiBookmarkPlus } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { Textarea } from "../../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";
const Question = () => {
  const { username } = useParams();
  const { questionId } = useParams();
  const [filter, setFilter] = useState<"best" | "top" | "new">("best");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleNavigateAsk = () => {
    navigate("/questions/ask");
  };
  const { data } = useGetViewQuestion(questionId || "", String(page));
  console.log(data);
  // const user = useSelector(getUserState);
  // console.log(user);

  const { data: currentUser } = UserAuth() ?? {};

  const onFilterChange = (filterKey: "best" | "top" | "new") => {
    setFilter(filterKey);
  };

  return (
    <div className="px-3 max-h-full overflow-y-auto flex flex-col gap-6">
      <div className="text-2xl font-bold leading-tight">{data?.title}</div>
      <div className="col-span-3 flex gap-2 items-center flex-nowrap">
        <img
          src={data?.user.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
        />
        <div>
          <h6 className=" font-semibold ">{data?.user?.username}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(data?.createdat || "")}
          </p>
        </div>
      </div>

      <div className="flex">
        <div
          className="leading-loose"
          dangerouslySetInnerHTML={{
            __html: data?.question || "<p></p>"
          }}
        />
        <div className="flex flex-col gap-3 items-center md:px-[2rem] px-[.8rem]">
          <span className="bg-[#F3F3F3] rounded-full p-3">
            <BiSolidUpArrow />
          </span>
          <span className=" font-semibold">200</span>
          <span className="bg-[#F3F3F3] rounded-full p-3">
            <BiSolidDownArrow />
          </span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <CiBookmarkPlus size={20} />
          </span>
          <span className=" ">Save</span>
        </div>
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <GoReport size={20} />
          </span>
          <span className=" ">Report</span>
        </div>
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <PiShareFatLight size={20} />
          </span>
          <span className=" ">Share</span>
        </div>
      </div>
      <div className="flex gap-2 justify-start">
        {data?.tags.map((tags, i) => (
          <span
            key={i}
            className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg"
          >
            {tags.tag}
          </span>
        ))}
      </div>
      <hr className="" />

      {currentUser && (
        <>
          <div className="flex gap-2">
            <img
              src={currentUser?.avatar}
              className="h-11 w-11 rounded-full border mt-1"
            />
            <div className="w-full">
              <p className="ms-1 text-gray-500 font-medium text-sm mb-1">
                Answer as {currentUser?.username}
              </p>

              <Textarea placeholder="Type your answer here." />
              <div className="flex justify-end mt-2">
                <button className="bg-primary text-white py-2 px-6 rounded-3xl text-sm flex items-center gap-1">
                  <IoAddOutline size={20} />
                  <span> Add Answer</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div>
        <hr className="mb-2" />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-gray-400">
            <FiMessageSquare size={20} /> {data?.answer_count}{" "}
            {parseInt(data?.answer_count ?? "0") > 1 ? "Answers" : "Answer"}
          </div>

          <Select onValueChange={onFilterChange}>
            <SelectTrigger className="w-[150px] font-medium capitalize">
              <div>Sort:</div>
              <SelectValue placeholder={filter} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="best">Best</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <div className="col-span-3 flex gap-2 items-center flex-nowrap">
          <img
            src={data?.user.avatar}
            className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
          />
          <div>
            <h6 className=" font-semibold ">{data?.user?.username}</h6>
            <p className="text-gray-400 text-sm">
              {timeAgo(data?.createdat || "")}
            </p>
          </div>
        </div>
        <div className="border-l-2 ml-5 pl-8 mt-2">
          <div className="">
            <div
              className="leading-loose"
              dangerouslySetInnerHTML={{
                __html: data?.question || "<p></p>"
              }}
            />
          </div>
          <div className="flex gap-8 mt-3 mb-5">
            <div
              className="flex items-center gap-3 hover:underline"
              role="button"
            >
              <span className="bg-[#F3F3F3] p-2 rounded-lg">
                <CiBookmarkPlus size={20} />
              </span>
              <span className=" ">Save</span>
            </div>
            <div
              className="flex items-center gap-3 hover:underline"
              role="button"
            >
              <span className="bg-[#F3F3F3] p-2 rounded-lg">
                <GoReport size={20} />
              </span>
              <span className=" ">Report</span>
            </div>
            <div
              className="flex items-center gap-3 hover:underline"
              role="button"
            >
              <span className="bg-[#F3F3F3] p-2 rounded-lg">
                <PiShareFatLight size={20} />
              </span>
              <span className=" ">Share</span>
            </div>
          </div>
          <div className="ml-10 my-4">
            <div className="col-span-3 flex gap-2 items-center flex-nowrap">
              <img
                src={data?.user.avatar}
                className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
              />
              <div>
                <h6 className=" font-semibold ">{data?.user?.username}</h6>
                <p className="text-gray-400 text-sm">
                  {timeAgo(data?.createdat || "")}
                </p>
              </div>
            </div>
            <div className="border-l-2 ml-5 pl-8 mt-2">
              <div className="">
                <div
                  className="leading-loose"
                  dangerouslySetInnerHTML={{
                    __html: data?.question || "<p></p>"
                  }}
                />
              </div>
              <div className="flex gap-8 mt-3">
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <CiBookmarkPlus size={20} />
                  </span>
                  <span className=" ">Save</span>
                </div>
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <GoReport size={20} />
                  </span>
                  <span className=" ">Report</span>
                </div>
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <PiShareFatLight size={20} />
                  </span>
                  <span className=" ">Share</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-10 my-4">
            <div className="col-span-3 flex gap-2 items-center flex-nowrap">
              <img
                src={data?.user.avatar}
                className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
              />
              <div>
                <h6 className=" font-semibold ">{data?.user?.username}</h6>
                <p className="text-gray-400 text-sm">
                  {timeAgo(data?.createdat || "")}
                </p>
              </div>
            </div>
            <div className="border-l-2 ml-5 pl-8 mt-2">
              <div className="">
                <div
                  className="leading-loose"
                  dangerouslySetInnerHTML={{
                    __html: data?.question || "<p></p>"
                  }}
                />
              </div>
              <div className="flex gap-8 mt-3">
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <CiBookmarkPlus size={20} />
                  </span>
                  <span className=" ">Save</span>
                </div>
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <GoReport size={20} />
                  </span>
                  <span className=" ">Report</span>
                </div>
                <div
                  className="flex items-center gap-3 hover:underline"
                  role="button"
                >
                  <span className="bg-[#F3F3F3] p-2 rounded-lg">
                    <PiShareFatLight size={20} />
                  </span>
                  <span className=" ">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

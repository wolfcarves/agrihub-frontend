/*
  path - /question/:username/:questionId/:questionTitle
*/

import { TbUserQuestion } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { FcShare } from "react-icons/fc";
import { useState } from "react";
import useGetViewQuestion from "../../../hooks/api/get/useGetViewQuestion";

const Question = () => {
  const { username } = useParams();
  const { questionId } = useParams();

  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleNavigateAsk = () => {
    navigate("/questions/ask");
  };
  const { data } = useGetViewQuestion(questionId || "", String(page));
  console.log(data);
  return (
    <div className="p-3 max-h-full overflow-y-auto">
      <div className="flex justify-end items-center mb-3">
        <Button onClick={() => handleNavigateAsk()}>
          <TbUserQuestion size={18} />
          &nbsp;Ask Questions
        </Button>
      </div>
      <div>
        <h4 className="text-[1.4rem] font-normal text-primary leading-tight">
          {data?.title}
        </h4>
        <div className="flex justify-start gap-4 text-[#636363] text-sm">
          <div>
            Ask <span className="text-black">Today</span>
          </div>
          <div>
            Modified <span className="text-black">today</span>
          </div>
          <div>
            Viewed <span className="text-black">19k</span>
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-2 text-[#636363] ">
          <div className="flex items-center gap-1">Share</div>
          <div>Edit</div>
          <div>Follow</div>
        </div>
      </div>
    </div>
  );
};

export default Question;

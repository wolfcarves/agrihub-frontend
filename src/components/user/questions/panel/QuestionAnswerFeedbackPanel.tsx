import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";

interface QuestionAnswerFeedbackPanel {}

const QuestionAnswerFeedbackPanel = () => {
  return (
    <div className="flex items-center mt-auto pt-5">
      <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
        <div className="text-lg">
          <FaRegHeart />
        </div>
        <span className="hidden md:block font-poppins-bold text-foreground">
          Like
        </span>
      </button>

      <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
        <div className="text-lg">
          <FaRegComment />
        </div>
        <span className="hidden md:block font-poppins-bold text-foreground">
          Reply
        </span>
      </button>

      <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
        <div className="text-lg">
          <MdReportGmailerrorred />
        </div>
        <span className="hidden md:block font-poppins-bold text-foreground">
          Report
        </span>
      </button>
    </div>
  );
};

export default QuestionAnswerFeedbackPanel;

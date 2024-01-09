import React from "react";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuBookmark } from "react-icons/lu";

interface QuestionFeedbackPanelProps {
  onSaveBtnClick?: () => void;
  voteCount?: string;
  answerCount?: string;
  onShareButtonClick?: (e: React.MouseEvent) => void;
}

const QuestionFeedbackPanel = ({
  onSaveBtnClick,
  answerCount,
  voteCount,
  onShareButtonClick
}: QuestionFeedbackPanelProps) => {
  return (
    <div className="flex items-center mt-auto pt-5">
      {/* Share Button */}
      {onSaveBtnClick && (
        <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
          <div className="text-lg">
            <LuBookmark />
          </div>
          <span className="hidden md:block font-poppins-bold text-foreground">
            Save
          </span>
        </button>
      )}

      {/* Vote*/}
      {answerCount && (
        <div className="flex gap-3 items-center h-11">
          <button className="text-lg h-full px-3 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
            <PiArrowFatUp />
          </button>
          <span className="font-poppins-bold text-foreground ">
            {voteCount}
          </span>
          <button className="text-lg h-full px-3 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
            <PiArrowFatDown />
          </button>
        </div>
      )}

      {/* Answer */}
      {answerCount && (
        <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
          <div className="text-lg">
            <LuMessagesSquare />
          </div>
          <span className="font-poppins-bold text-foreground">
            {answerCount}
          </span>
          <span className="hidden md:block font-poppins-bold text-foreground">
            Answers
          </span>
        </button>
      )}

      {/* Share  */}
      <button
        className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
        onClick={onShareButtonClick}
      >
        <div className="text-xl">
          <TiArrowForwardOutline />
        </div>
        <span className="font-poppins-bold text-foreground">Share</span>
      </button>
    </div>
  );
};

export default QuestionFeedbackPanel;

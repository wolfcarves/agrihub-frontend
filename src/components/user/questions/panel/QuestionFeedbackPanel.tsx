import React, { ComponentProps } from "react";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuBookmark } from "react-icons/lu";
import { PiArrowFatUpFill } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import withRequireAuth from "@higher-order/account/withRequireAuth";

interface QuestionFeedbackPanelProps {
  vote?: "upvote" | "downvote";
  voteCount?: string | number;
  answerCount?: string | number;
  onCommentBtnClick?: (e: React.MouseEvent) => void;
  onSaveBtnClick?: (e: React.MouseEvent) => void;
  onUpVoteBtnClick?: (e: React.MouseEvent) => void;
  onDownVoteBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

interface VoteButtonProps extends ComponentProps<"button"> {
  vote?: "upvote" | "downvote";
  variant: "upvote" | "downvote";
}

const VoteButton = withRequireAuth(
  ({ variant, vote, ...props }: VoteButtonProps) => {
    if (variant === "upvote") {
      return (
        <button
          className="hover:bg-accent opacity-80 hover:opacity-100 text-lg h-full px-3 rounded-lg duration-200"
          {...props}
        >
          {vote === "upvote" ? (
            <div className="text-primary">
              <PiArrowFatUpFill />
            </div>
          ) : (
            <PiArrowFatUp />
          )}
        </button>
      );
    }

    if (variant === "downvote") {
      return (
        <button
          className="hover:bg-accent opacity-80 hover:opacity-100 text-lg h-full px-3 rounded-lg duration-200"
          {...props}
        >
          {vote === "downvote" ? (
            <div className="text-red-500">
              <PiArrowFatDownFill />
            </div>
          ) : (
            <div>
              <PiArrowFatDown />
            </div>
          )}
        </button>
      );
    }
  }
);

const QuestionFeedbackPanel = ({
  vote,
  voteCount,
  answerCount,
  onCommentBtnClick,
  onUpVoteBtnClick,
  onDownVoteBtnClick,
  onSaveBtnClick,
  onShareBtnClick
}: QuestionFeedbackPanelProps) => {
  return (
    <div className="flex items-center mt-auto">
      {/* Share Button */}
      {onSaveBtnClick && (
        <button
          className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
          onClick={onSaveBtnClick}
        >
          <div className="text-lg">
            <LuBookmark />
          </div>
          <span className="hidden md:block font-poppins-bold text-foreground">
            Save
          </span>
        </button>
      )}

      {/* Vote */}
      {onUpVoteBtnClick && (
        <div className="flex gap-3 items-center h-11">
          <VoteButton variant="upvote" vote={vote} onClick={onUpVoteBtnClick} />

          <span className="font-poppins-bold text-foreground ">
            {voteCount}
          </span>

          <VoteButton
            variant="downvote"
            vote={vote}
            onClick={onDownVoteBtnClick}
          />
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

      {/* Reply Button */}
      {onCommentBtnClick && (
        <button
          className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
          onClick={onCommentBtnClick}
        >
          <div className="text-lg">
            <FaRegComment />
          </div>
          <span className="hidden md:block text-sm font-poppins-medium text-foreground">
            Comment
          </span>
        </button>
      )}

      {/* Share  */}
      {onShareBtnClick && (
        <button
          className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
          onClick={onShareBtnClick}
        >
          <div className="text-xl">
            <TiArrowForwardOutline />
          </div>
          <span className="font-poppins-bold text-foreground">Share</span>
        </button>
      )}
    </div>
  );
};

export default QuestionFeedbackPanel;

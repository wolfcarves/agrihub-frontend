import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuBookmark } from "react-icons/lu";
import { PiArrowFatUpFill } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import QuestionFeedBackPanelButton from "../button/QuestionFeedBackPanelButton";

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
      {/* Save Button */}
      {onSaveBtnClick && (
        <QuestionFeedBackPanelButton title="Save" icon={<LuBookmark />} />
      )}

      {/* Vote */}
      {onUpVoteBtnClick && onDownVoteBtnClick && (
        <div className="flex gap-3 h-11">
          <QuestionFeedBackPanelButton
            icon={
              vote === "upvote" ? (
                <PiArrowFatUpFill className="text-primary" />
              ) : (
                <PiArrowFatUp />
              )
            }
            onClick={onUpVoteBtnClick}
          />

          <span className="font-poppins-bold text-foreground my-auto">
            {voteCount}
          </span>

          <QuestionFeedBackPanelButton
            icon={
              vote === "downvote" ? (
                <PiArrowFatDownFill className="text-red-500" />
              ) : (
                <PiArrowFatDown />
              )
            }
            onClick={onDownVoteBtnClick}
          />
        </div>
      )}

      {/* Answer */}
      {answerCount && (
        <QuestionFeedBackPanelButton
          title={`${answerCount} Answers`}
          icon={<LuMessagesSquare />}
        />
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

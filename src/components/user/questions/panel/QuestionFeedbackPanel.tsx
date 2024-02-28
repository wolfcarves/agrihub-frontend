import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuBookmark } from "react-icons/lu";
import { PiArrowFatUpFill } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import QuestionFeedBackPanelButton from "../button/QuestionFeedBackPanelButton";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

interface QuestionFeedbackPanelProps {
  vote?: "upvote" | "downvote";
  voteCount?: string | number;
  answerCount?: string | number;
  onCommentBtnClick?: (e: React.MouseEvent) => void;
  onCommentExpandBtnClick?: (e: React.MouseEvent) => void;
  onSaveBtnClick?: (e: React.MouseEvent) => void;
  onAnswerBtnClick?: (e: React.MouseEvent) => void;
  onUpVoteBtnClick?: (e: React.MouseEvent) => void;
  onDownVoteBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

const AuthenticatedQuestionFeedBackPanelButton = withRequireAuth(
  QuestionFeedBackPanelButton
);

const QuestionFeedbackPanel = ({
  vote,
  voteCount,
  answerCount,
  onCommentBtnClick,
  onCommentExpandBtnClick,
  onSaveBtnClick,
  onAnswerBtnClick,
  onUpVoteBtnClick,
  onDownVoteBtnClick,
  onShareBtnClick
}: QuestionFeedbackPanelProps) => {
  return (
    <div className="flex gap-1.5 items-center mt-auto pt-3">
      {onSaveBtnClick && (
        <div className="flex gap-3 h-8 border rounded-lg">
          <QuestionFeedBackPanelButton title="Save" icon={<LuBookmark />} />
        </div>
      )}

      {onUpVoteBtnClick && onDownVoteBtnClick && (
        <div className="flex gap-3 h-8 border rounded-lg">
          <AuthenticatedQuestionFeedBackPanelButton
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

          <AuthenticatedQuestionFeedBackPanelButton
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

      {answerCount && (
        <div
          className="flex gap-3 h-8 border rounded-lg"
          onClick={onAnswerBtnClick}
        >
          <QuestionFeedBackPanelButton
            title={`${answerCount} Answers`}
            icon={<LuMessagesSquare />}
          />
        </div>
      )}

      {onCommentBtnClick && (
        <div
          className="flex h-8 border rounded-lg "
          onClick={onCommentBtnClick}
        >
          <AuthenticatedQuestionFeedBackPanelButton
            title="Comment"
            icon={<FaRegComment className="text-base" />}
          />
        </div>
      )}

      {onCommentExpandBtnClick && (
        <div
          className="flex h-8 border rounded-lg "
          onClick={onCommentExpandBtnClick}
        >
          <QuestionFeedBackPanelButton
            title="Expand"
            icon={<IoIosArrowDropdown className="text-md" />}
          />
        </div>
      )}

      {onShareBtnClick && (
        <div className="flex h-8 border rounded-lg" onClick={onShareBtnClick}>
          <QuestionFeedBackPanelButton
            title="Share"
            icon={<TiArrowForwardOutline />}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionFeedbackPanel;

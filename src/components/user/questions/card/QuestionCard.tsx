import { BsThreeDots } from "react-icons/bs";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import parse, { Element } from "html-react-parser";
import TagChip from "../chip/TagChip";
import { timeAgo } from "@components/lib/utils";
import { Link } from "react-router-dom";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";

interface QuestionCardProps {
  title?: string;
  username?: string;
  userAvatarSrc?: string;
  description?: string | Node;
  tags?: {
    tag?: string | undefined;
  }[];
  vote?: "upvote" | "downvote";
  voteCount?: string;
  answerCount?: string;
  createdat?: string;
  onUpVoteBtnClick?: (e: React.MouseEvent) => void;
  onDownVoteBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

const QuestionCard = ({
  title,
  username,
  userAvatarSrc,
  description,
  tags,
  vote,
  voteCount,
  answerCount,
  createdat,
  onUpVoteBtnClick,
  onDownVoteBtnClick,
  onShareBtnClick
}: QuestionCardProps) => {
  const purifiedDescription = DOMPurify.sanitize(description ?? "", {
    USE_PROFILES: {
      html: true
    }
  });

  const contentHtml = parse(purifiedDescription, {
    replace: domNode => {
      if (domNode instanceof Element) {
        if (domNode.tagName === "img") {
          const replacedImg = <></>;
          return replacedImg;
        }
      }
    }
  });

  return (
    <>
      {/* Card Title */}
      <div className="flex items-start justify-between">
        <h1 className="text-xl text-foreground font-poppins-semibold line-clamp-2 hover:underline hover:opacity-90">
          {title}
        </h1>

        <button
          className="text-xl p-2 rounded-md hover:bg-accent opacity-80 hover:opacity-100 duration-200"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <BsThreeDots />
        </button>
      </div>

      {/* Name and Tags */}
      <div className="flex flex-wrap gap-3 justify-between items-center py-5">
        <QuestionUserProfileButton
          avatarSrc={userAvatarSrc}
          username={username}
          createdAt={createdat}
        />

        <div className="flex flex-wrap gap-2 py-5">
          {tags?.map(({ tag }) => {
            return <TagChip key={Math.random()} name={tag} size="sm" />;
          })}
        </div>
      </div>

      {/* Content Body */}
      <div className="line-clamp-5">{contentHtml}</div>

      {/* Actions */}
      <QuestionFeedbackPanel
        {...{ vote }}
        {...{ answerCount }}
        {...{ voteCount }}
        {...{ onUpVoteBtnClick }}
        {...{ onDownVoteBtnClick }}
        {...{ onShareBtnClick }}
      />
    </>
  );
};

export default QuestionCard;

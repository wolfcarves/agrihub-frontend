import React from "react";

import { BsThreeDots } from "react-icons/bs";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import parse, { Element } from "html-react-parser";
import TagChip from "../chip/TagChip";
import { Link } from "react-router-dom";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import useAuth from "@hooks/useAuth";

interface QuestionCardProps {
  id?: string;
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
  onAnswerBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

const QuestionCard = ({
  id,
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
  onAnswerBtnClick,
  onShareBtnClick
}: QuestionCardProps) => {
  const user = useAuth();
  const isSameUser = user?.data?.username === username;

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
    <div
      className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full"
      key={`${id} + ${title}`}
    >
      <div className="flex flex-col bg-white border p-3 sm:p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
        <>
          {/* Card Title */}
          <div className="flex items-start justify-between ">
            <Link to={`/forum/question/${username}/${id}`} className="w-[80%]">
              <h4 className="text-blue-500 font-poppins-semibold line-clamp-2 hover:opacity-80">
                {title}
              </h4>
            </Link>

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
          <div className="flex flex-wrap gap-3 justify-between items-center py-5 ">
            <QuestionUserProfileButton
              avatarSrc={userAvatarSrc}
              username={username}
              createdAt={createdat}
            />

            <div className="flex flex-wrap gap-2">
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
            {...{ onAnswerBtnClick }}
            onUpVoteBtnClick={!isSameUser ? onUpVoteBtnClick : undefined}
            onDownVoteBtnClick={!isSameUser ? onDownVoteBtnClick : undefined}
            {...{ onShareBtnClick }}
          />
        </>
      </div>
    </div>
  );
};

export default QuestionCard;

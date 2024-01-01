import React, { useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

interface QuestionCardProps {
  title?: string;
  username?: string;
  userAvatarSrc?: string;
  description?: string | Node;
  voteCount?: string;
  answerCount?: string;
  onShareButtonClick?: () => void;
}

const QuestionCard = ({
  title,
  username,
  userAvatarSrc,
  description,
  voteCount,
  answerCount,
  onShareButtonClick
}: QuestionCardProps) => {
  const childRef = useRef<HTMLDivElement>(null);

  const purifiedDescription = DOMPurify.sanitize(description ?? "", {
    USE_PROFILES: {
      html: true
    }
  });

  return (
    <Link to="/">
      <div className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full ">
        <div className="flex flex-col bg-white border p-5 rounded-xl min-h-[20rem] h-max cursor-pointer hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
          {/* Card Title */}
          <div className="flex items-start justify-between">
            <h1 className="text-xl text-neutral-700 font-poppins-semibold line-clamp-2 hover:underline hover:opacity-90">
              {title}
            </h1>

            <button
              className="text-xl p-2 rounded-md hover:bg-accent opacity-80 hover:opacity-100 duration-200"
              onClick={e => {
                e.preventDefault();
                console.log("select");
              }}
            >
              <BsThreeDots />
            </button>
          </div>

          {/* Name and Tags */}
          <div className="flex justify-between items-center py-5">
            <div className="flex gap-5">
              <div className="w-12 h-12 border rounded-xl overflow-hidden ">
                <img
                  src={userAvatarSrc}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col ">
                <span className="font-poppins-medium">{username}</span>
                <span className="font-poppins-regular text-gray-400 text-sm">
                  3 months ago
                </span>
              </div>
            </div>

            <div>Tags here</div>
          </div>

          {/* Content Body */}
          <div>
            <p
              className="font-poppins-regular line-clamp-6 text-neutral-700"
              dangerouslySetInnerHTML={{
                __html: purifiedDescription
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center mt-auto pt-5">
            {/* Vote*/}
            <div className="flex gap-3 items-center h-11">
              <button className="text-lg h-full px-3 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
                <PiArrowFatUp />
              </button>
              <span className="font-poppins-bold text-neutral-700 ">
                {voteCount}
              </span>
              <button className="text-lg h-full px-3 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
                <PiArrowFatDown />
              </button>
            </div>

            {/* Answer */}
            <button className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200">
              <div className="text-lg">
                <LuMessagesSquare />
              </div>
              <span className="font-poppins-bold text-neutral-700">
                {answerCount} &nbsp; &nbsp; Answers
              </span>
            </button>

            {/* Share  */}
            <button
              className="flex items-center gap-5 h-11 px-5 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
              onClick={onShareButtonClick}
            >
              <div className="text-xl">
                <TiArrowForwardOutline />
              </div>
              <span className="font-poppins-bold text-neutral-700">Share</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;

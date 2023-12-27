import React from "react";
import { timeAgo } from "../../../lib/utils";
import { QuestionViewSchema } from "../../../../api/openapi";
import { TbMessages } from "react-icons/tb";
import { GoReport } from "react-icons/go";
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { UserAuth } from "../../../../providers/AuthProvider";
import { Input } from "../../../ui/input";
import { Comment } from "@api/openapi";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="ml-10 my-4">
      <div className="col-span-3 flex gap-2 items-center flex-nowrap">
        <img
          src={comment?.user?.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
        />
        <div>
          <h6 className=" font-semibold ">{comment?.user?.username}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(comment?.createdat || "")}
          </p>
        </div>
      </div>
      <div className="border-l-2 ml-5 pl-8 mt-2">
        <div className="">
          <div
            className="leading-loose"
            dangerouslySetInnerHTML={{
              __html: comment?.comment || "<p></p>"
            }}
          />
        </div>
        <div className="flex gap-8 mt-3 mb-5">
          <div
            className="flex items-center gap-2 hover:underline"
            role="button"
          >
            <span className="">
              <GoReport size={20} />
            </span>
            <span className=" ">Report</span>
          </div>
        </div>
      </div>
      <hr className="ml-12 pl-8 mt-2" />
    </div>
  );
};

export default CommentCard;

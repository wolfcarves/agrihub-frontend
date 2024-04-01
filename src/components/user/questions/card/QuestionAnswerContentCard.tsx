//THIS COMPONENT IS SHARED BY ANSWER AND COMMENT

import { timeAgo } from "@components/lib/utils";
import { Badge } from "@components/ui/badge";
import useParseUserRole from "@hooks/utils/useParseUserRole";
import React, { ComponentProps } from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

interface QuestionAnswerContentCardProps extends ComponentProps<"div"> {
  isOwn?: boolean;
  role?: string;
  userId?: string;
  username?: string;
  content?: string;
  createdAt?: string;
  onEditClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDeleteClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const QuestionAnswerContentCard = ({
  isOwn,
  role,
  userId,
  username,
  content,
  createdAt,
  onEditClick,
  onDeleteClick,
  className,
  ...props
}: QuestionAnswerContentCardProps) => {
  return (
    <div
      className={
        className ??
        "relative p-2 sm:p-3 rounded-2xl group border bg-white dark:bg-background"
      }
      {...props}
    >
      {isOwn && (
        <div className="flex opacity-50 group-hover:opacity-100 gap-1 absolute -bottom-3 end-3 duration-100">
          <div className="w-8 h-8 rounded-full border bg-background">
            <button className="w-full h-full" onClick={onEditClick}>
              <MdOutlineEdit className="m-auto text-md" />
            </button>
          </div>
          <div className="w-8 h-8 rounded-full border bg-background">
            <button className="w-full h-full" onClick={onDeleteClick}>
              <MdOutlineDelete className="m-auto text-md" />
            </button>
          </div>
        </div>
      )}

      <Link
        to={`/users/${userId}/${username}`}
        className="font-poppins-medium hover:underline text-sm sm:text-base"
      >
        {username}
      </Link>

      {role && (
        <Badge variant="outline" className="ms-1">
          <span className="font-poppins-regular">{useParseUserRole(role)}</span>
        </Badge>
      )}

      <p
        className="mt-2 text-sm sm:text-base"
        dangerouslySetInnerHTML={{
          __html: content ?? ""
        }}
      />

      <div className="pt-1 flex justify-end">
        <i className="text-xs sm:text-sm">
          {timeAgo(createdAt?.slice(0, -3) + "Z" || "")}
        </i>
      </div>
    </div>
  );
};

export default QuestionAnswerContentCard;

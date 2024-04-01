import { Comment } from "@api/openapi";
import useAuth from "@hooks/useAuth";
import DOMPurify from "dompurify";
import React, { useEffect, useRef, useState } from "react";
import QuestionUserAvatar from "../avatar/QuestionUserAvatar";
import QuestionUpdateCommentForm from "../form/QuestionUpdateCommentForm/QuestionUpdateCommentForm";
import QuestionAnswerContentCard from "../card/QuestionAnswerContentCard";
import QuestionDeleteDefaultDialog from "../dialog/QuestionDeleteDefaultDialog";
import useForumsDeleteCommentMutation from "@hooks/api/delete/useForumsDeleteCommentMutation";
import { toast } from "sonner";
import QuestionCommentCard from "../card/QuestionCommentCard";

interface QuestionCommentListProps {
  data?: Comment[];
  isLoading?: boolean;
  isRefetching?: boolean;
  handleLineHeight: () => void;
  grandParentRef?: React.RefObject<HTMLDivElement>;
  parentRef?: React.RefObject<HTMLDivElement>;
}

const QuestionCommentList = ({
  data: commentsData,
  isLoading: isCommentsDataLoading,
  isRefetching,
  handleLineHeight,
  grandParentRef,
  parentRef
}: QuestionCommentListProps) => {
  const [expandComment, setExpandComment] = useState<boolean>(false);

  return (
    <>
      {commentsData
        ?.slice(0, expandComment ? commentsData?.length : 1)
        ?.map(c => {
          return (
            <>
              <QuestionCommentCard
                data={c}
                isLoading={isCommentsDataLoading}
                handleLineHeight={handleLineHeight}
                grandParentRef={grandParentRef}
                parentRef={parentRef}
              />
            </>
          );
        })}

      {commentsData?.length && commentsData?.length > 1 && !expandComment ? (
        <div className="ps-20 ms-2">
          <button
            className="flex gap-2 text-sm font-poppins-medium hover:opacity-90 hover:underline underline-offset-1"
            onClick={() => {
              setExpandComment(prev => !prev);
            }}
          >
            Show all comments
          </button>
        </div>
      ) : null}
    </>
  );
};

export default QuestionCommentList;

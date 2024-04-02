import React, { useState } from "react";
import QuestionUserAvatar from "../avatar/QuestionUserAvatar";
import QuestionAnswerContentCard from "./QuestionAnswerContentCard";
import { Comment } from "@api/openapi";
import QuestionUpdateCommentForm from "../form/QuestionUpdateCommentForm/QuestionUpdateCommentForm";
import DOMPurify from "dompurify";
import QuestionDeleteDefaultDialog from "../dialog/QuestionDeleteDefaultDialog";
import { toast } from "sonner";
import useForumsDeleteCommentMutation from "@hooks/api/delete/useForumsDeleteCommentMutation";
import useAuth from "@hooks/useAuth";

interface QuestionCommentCardProps {
  data?: Comment;
  isLoading?: boolean;
  handleLineHeight: () => void;
  grandParentRef?: React.RefObject<HTMLDivElement>;
  parentRef?: React.RefObject<HTMLDivElement>;
}

const QuestionCommentCard = ({
  data: commentData,
  isLoading: isCommentDataLoading,
  handleLineHeight,
  grandParentRef,
  parentRef
}: QuestionCommentCardProps) => {
  const userAuth = useAuth();

  const [editComment, setEditComment] = useState<boolean>(false);
  const [isDeleteCommentDialogOpen, setIsDeleteCommentDialogOpen] =
    useState<boolean>(false);
  const purifyComment = DOMPurify.sanitize(commentData?.comment ?? "");

  const { mutateAsync: deleteComment, isLoading: isDeleteCommentLoading } =
    useForumsDeleteCommentMutation();

  const handleDeleteComment = async (id?: string) => {
    try {
      await deleteComment(id ?? "");
      toast.success("Comment successfully deleted");
      setIsDeleteCommentDialogOpen(false);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <>
      <div
        className="flex ps-10 ms-auto gap-2 py-2"
        ref={grandParentRef}
        onChange={() => {
          console.log("test");
        }}
        onLoad={handleLineHeight}
      >
        <div className="flex relative h-max rounded-full">
          <QuestionUserAvatar
            userId={commentData?.user?.id}
            avatar={commentData?.user?.avatar}
            username={commentData?.user?.username}
          />

          <div
            ref={parentRef}
            className={`-z-50 absolute w-0.5 -start-[1.30rem] bottom-6 rounded-b-md border-l-[1px] border-b-[1px] border-gray-200/90`}
          />
          <div
            className={`-z-50 absolute w-6 h-7 -start-[1.30rem] bottom-4 rounded-bl-md border-l-[1px] border-b-[1px] border-gray-200/90`}
          />
        </div>

        <div
          className={`${
            editComment && "w-full overflow-hidden pe-2 max-w-[40rem]"
          }`}
        >
          {editComment ? (
            <div className="flex flex-col">
              <QuestionUpdateCommentForm
                commentId={commentData?.id}
                onChange={handleLineHeight}
                value={purifyComment}
                onCancelClick={() => {
                  handleLineHeight();
                  setEditComment(false);
                }}
              />
            </div>
          ) : (
            <QuestionAnswerContentCard
              isOwn={userAuth?.data?.id === commentData?.user?.id}
              role={commentData?.user?.role}
              userId={commentData?.user?.id}
              username={commentData?.user?.username}
              content={purifyComment}
              createdAt={commentData?.createdat}
              onEditClick={() => {
                handleLineHeight();
                setEditComment(true);
              }}
              onDeleteClick={() => setIsDeleteCommentDialogOpen(prev => !prev)}
            />
          )}
        </div>
      </div>

      <QuestionDeleteDefaultDialog
        title="Delete Comment"
        description="Are you sure to delete your answer?"
        open={isDeleteCommentDialogOpen}
        onOpenChange={setIsDeleteCommentDialogOpen}
        isLoading={isDeleteCommentLoading}
        onConfirmClick={() => handleDeleteComment(commentData?.id)}
        onCancelClick={() => setIsDeleteCommentDialogOpen(false)}
      />
    </>
  );
};

export default QuestionCommentCard;

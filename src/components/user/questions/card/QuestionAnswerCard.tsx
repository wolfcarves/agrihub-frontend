import { Answer } from "@api/openapi";
import DOMPurify from "dompurify";
import { useEffect, useRef, useState } from "react";
import QuestionCommentForm from "../form/QuestionCommentForm/QuestionCommentForm";
import useAuth from "@hooks/useAuth";
import useForumsVoteAnswerMutation from "@hooks/api/post/useForumsVoteAnswerMutation";
import useForumsDeleteVoteAnswerMutation from "@hooks/api/delete/useForumsDeleteVoteAnswerMutation";
import {
  PiArrowFatUp,
  PiArrowFatDown,
  PiArrowFatUpFill,
  PiArrowFatDownFill
} from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import QuestionDeleteDefaultDialog from "../dialog/QuestionDeleteDefaultDialog";
import { toast } from "sonner";
import useForumsDeleteAnswerMutation from "@hooks/api/delete/useForumsDeleteAnswerMutation";
import QuestionUserAvatar from "../avatar/QuestionUserAvatar";
import QuestionAnswerContentCard from "./QuestionAnswerContentCard";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import QuestionUpdateAnswerForm from "../form/QuestionUpdateAnswerForm/QuestionUpdateAnswerForm";
import QuestionCommentList from "../list/QuestionCommentList";

interface QuestionAnswerListProps {
  data?: Answer;
  isLoading?: boolean;
  isRefetching?: boolean;
}

const QuestionAnswerCard = ({ data }: QuestionAnswerListProps) => {
  const {
    id,
    user,
    answer,
    comments,
    createdat,
    vote,
    total_vote_count,
    upvote_count
  } = { ...data };

  const userAuth = useAuth();

  const [isDeleteAnswerDialogOpen, setIsDeleteAnswerDialogOpen] =
    useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const [editAnswer, setEditAnswer] = useState<boolean>(false);
  const [expandComment, setExpandComment] = useState<boolean>(false);
  //these refs are for lines that connects the avatar (comments) to their parent (answers)
  const grandParentRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const purifyAnswer = DOMPurify.sanitize(answer ?? "");
  const isAnswerOwned = user?.id === userAuth?.data?.id;

  const showCommentForm =
    addComment || (expandComment && userAuth?.isAuthenticated);

  const { mutateAsync: voteAnswer } = useForumsVoteAnswerMutation();
  const { mutateAsync: deleteAnswer, isLoading: isDeleteAnswerLoading } =
    useForumsDeleteAnswerMutation();
  const { mutateAsync: deleteVoteAnswer } = useForumsDeleteVoteAnswerMutation();

  const handleVoteAnswer = async (
    id?: string,
    type?: "upvote" | "downvote"
  ) => {
    try {
      if (vote?.type !== undefined) {
        return await deleteVoteAnswer({ id: vote?.id });
      }

      await voteAnswer({ id, type });
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  const handleDeleteAnswer = async (id?: string) => {
    try {
      await deleteAnswer(id ?? "");
      toast.success("Answer successfully deleted");
      setIsDeleteAnswerDialogOpen(false);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  //Handle avatar lines
  const handleLineHeight = () => {
    parentRef.current?.style?.setProperty(
      "height",
      grandParentRef.current?.offsetTop + "px"
    );
  };

  useEffect(() => {
    const resize = (e: UIEvent) => {
      handleLineHeight();
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <div className="relative w-full">
        {/* Answers */}
        <div className="flex gap-2 py-4">
          <div className="relative flex h-max rounded-full">
            <QuestionUserAvatar
              userId={user?.id}
              avatar={user?.avatar}
              username={user?.username}
            />
          </div>

          <div
            className={`${
              editAnswer && "w-full overflow-hidden pe-2 max-w-[40rem]"
            }`}
          >
            {editAnswer ? (
              <div className="flex flex-col">
                <QuestionUpdateAnswerForm
                  answerId={id}
                  value={purifyAnswer}
                  onChange={handleLineHeight}
                  onCancelClick={() => {
                    handleLineHeight();
                    setEditAnswer(false);
                  }}
                />
              </div>
            ) : (
              <>
                <QuestionAnswerContentCard
                  isOwn={isAnswerOwned}
                  role={user?.role}
                  userId={user?.id}
                  username={user?.username}
                  content={purifyAnswer}
                  createdAt={createdat}
                  onEditClick={() => setEditAnswer(true)}
                  onDeleteClick={() =>
                    setIsDeleteAnswerDialogOpen(prev => !prev)
                  }
                />

                <QuestionFeedbackPanel>
                  <QuestionFeedbackPanel.ItemWithAuth
                    icon={() =>
                      vote?.type === "upvote" ? (
                        <PiArrowFatUpFill className="text-primary" />
                      ) : (
                        <PiArrowFatUp />
                      )
                    }
                    onClick={() => handleVoteAnswer(data?.id, "upvote")}
                  />

                  <div className="px-1">
                    <span className="font-poppins-medium">0</span>
                  </div>

                  <QuestionFeedbackPanel.ItemWithAuth
                    icon={() =>
                      vote?.type === "downvote" ? (
                        <PiArrowFatDownFill className="text-red-500" />
                      ) : (
                        <PiArrowFatDown />
                      )
                    }
                    onClick={() => handleVoteAnswer(data?.id, "downvote")}
                  />

                  <QuestionFeedbackPanel.ItemWithAuth
                    icon={() => (
                      <FaRegComment className="text-sm sm:text-base" />
                    )}
                    title="Comment"
                    onClick={
                      userAuth?.isAuthenticated
                        ? () => {
                            setAddComment(true);
                            setExpandComment(true);
                          }
                        : undefined
                    }
                  />
                </QuestionFeedbackPanel>
              </>
            )}
          </div>
        </div>

        {comments && comments.length > 0 && (
          <span className="flex ps-10 ms-auto gap-2 py-2 text-sm">
            Comments
          </span>
        )}

        {/* Comments */}
        <QuestionCommentList
          data={comments}
          handleLineHeight={handleLineHeight}
          grandParentRef={grandParentRef}
          parentRef={parentRef}
        />

        {showCommentForm && (
          <div className="flex flex-col gap-3 ps-10 mt-2">
            <span className="ps-12 text-sm">
              You're commenting to{" "}
              {user?.username === userAuth?.data?.username
                ? "yourself"
                : user?.username}
            </span>

            <QuestionCommentForm answerId={id} />
          </div>
        )}
      </div>

      <QuestionDeleteDefaultDialog
        title="Delete Answer"
        description="Are you sure to delete your answer?"
        open={isDeleteAnswerDialogOpen}
        onOpenChange={setIsDeleteAnswerDialogOpen}
        isLoading={isDeleteAnswerLoading}
        onConfirmClick={() => handleDeleteAnswer(id)}
        onCancelClick={() => setIsDeleteAnswerDialogOpen(false)}
      />
    </>
  );
};

export default QuestionAnswerCard;

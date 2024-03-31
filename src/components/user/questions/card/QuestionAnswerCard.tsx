import { Answer } from "@api/openapi";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import DOMPurify from "dompurify";
import { useRef, useState } from "react";
import QuestionCommentForm from "../form/QuestionCommentForm/QuestionCommentForm";
import useAuth from "@hooks/useAuth";
import useForumsVoteAnswerMutation from "@hooks/api/post/useForumsVoteAnswerMutation";
import useForumsDeleteVoteAnswerMutation from "@hooks/api/delete/useForumsDeleteVoteAnswerMutation";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import {
  PiArrowFatUp,
  PiArrowFatDown,
  PiArrowFatUpFill,
  PiArrowFatDownFill
} from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import QuestionDeleteDefaultDialog from "../dialog/QuestionDeleteDefaultDialog";
import { toast } from "sonner";
import useForumsDeleteAnswerMutation from "@hooks/api/delete/useForumsDeleteAnswerMutation";
import useForumsDeleteCommentMutation from "@hooks/api/delete/useForumsDeleteCommentMutation";
import useParseUserRole from "@hooks/utils/useParseUserRole";
import { Badge } from "@components/ui/badge";
import { timeAgo } from "@components/lib/utils";
import QuestionUserAvatar from "../avatar/QuestionUserAvatar";

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
  const [isDeleteCommentDialogOpen, setIsDeleteCommentDialogOpen] =
    useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const [expandComment, setExpandComment] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const purifyAnswer = DOMPurify.sanitize(answer ?? "");
  const isAnswerOwned = user?.id === userAuth?.data?.id;

  const showCommentForm =
    addComment || (expandComment && userAuth?.isAuthenticated);

  const { mutateAsync: voteAnswer } = useForumsVoteAnswerMutation();
  const { mutateAsync: deleteAnswer, isLoading: isDeleteAnswerLoading } =
    useForumsDeleteAnswerMutation();
  const { mutateAsync: deleteComment, isLoading: isDeleteCommentLoading } =
    useForumsDeleteCommentMutation();
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

          <div className="flex flex-col">
            <div className={"relative border p-2 sm:p-3 rounded-lg group"}>
              {isAnswerOwned && (
                <div className="hidden group-hover:flex gap-1 absolute -bottom-3 end-3">
                  <div className="w-8 h-8 rounded-full border bg-background">
                    <button className="w-full h-full">
                      <MdOutlineEdit className="m-auto text-md" />
                    </button>
                  </div>
                  <div className="w-8 h-8 rounded-full border bg-background">
                    <button
                      className="w-full h-full"
                      onClick={() => setIsDeleteAnswerDialogOpen(prev => !prev)}
                    >
                      <MdOutlineDelete className="m-auto text-md" />
                    </button>
                  </div>
                </div>
              )}

              <Link
                to={`/users/${user?.id}/${user?.username}`}
                className="font-poppins-medium hover:underline "
              >
                {user?.username}
              </Link>

              {user?.role && (
                <Badge variant="outline" className="ms-1">
                  <span className="font-poppins-regular">
                    {useParseUserRole(user?.role)}
                  </span>
                </Badge>
              )}

              <p
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: purifyAnswer
                }}
              />

              <div className="pt-1 flex justify-end">
                <i className="text-sm">
                  {timeAgo(createdat?.slice(0, -3) + "Z" || "")}
                </i>
              </div>
            </div>

            <QuestionFeedbackPanel
              items={[
                {
                  icon:
                    vote?.type === "upvote" ? (
                      <PiArrowFatUpFill className="text-primary" />
                    ) : (
                      <PiArrowFatUp />
                    ),
                  requireAuth: true,
                  onClick: () => handleVoteAnswer(data?.id, "upvote")
                },
                {
                  label: String(upvote_count),
                  isButton: false
                },
                {
                  icon:
                    vote?.type === "downvote" ? (
                      <PiArrowFatDownFill className="text-red-500" />
                    ) : (
                      <PiArrowFatDown />
                    ),
                  requireAuth: true,
                  onClick: () => handleVoteAnswer(data?.id, "downvote")
                },
                {
                  icon: <FaRegComment className="text-base" />,
                  label: "Comment",
                  onClick: userAuth?.isAuthenticated
                    ? () => {
                        setAddComment(true);
                        setExpandComment(true);
                      }
                    : undefined
                },
                comments?.length && comments?.length > 1 && !expandComment
                  ? {
                      icon: <IoIosArrowDropdown className="text-md" />,
                      label: "Expand",
                      onClick: () => {
                        setExpandComment(prev => !prev);
                      }
                    }
                  : {
                      isVisible: false
                    }
              ]}
            />
          </div>
        </div>

        {comments && comments.length > 1 && (
          <span className="flex ps-10 ms-auto gap-2 py-2 text-sm">
            Comments
          </span>
        )}

        {/* Comments */}
        {comments
          ?.slice(0, expandComment ? comments?.length : 1)
          .map((c, index) => {
            const purifyComment = DOMPurify.sanitize(c.comment ?? "");

            return (
              <>
                <div
                  className="flex ps-10 ms-auto gap-2 py-2"
                  key={`${c} + ${index}`}
                  onLoad={e => {
                    parentRef.current?.style?.setProperty(
                      "height",
                      e.currentTarget.offsetTop + "px"
                    );
                  }}
                >
                  <div className="flex relative h-max rounded-full">
                    <QuestionUserAvatar
                      userId={c?.user?.id}
                      avatar={c?.user?.avatar}
                      username={c?.user?.username}
                    />

                    <div
                      className={`-z-50 absolute w-6 h-7 -start-[1.30rem] bottom-4 rounded-bl-md border-l-[1px] border-b-[1px] border-gray-200/90`}
                    />
                    <div
                      ref={parentRef}
                      className={`-z-50 absolute w-0.5 -start-[1.30rem] bottom-6 rounded-b-md border-l-[1px] border-b-[1px] border-gray-200/90`}
                    />
                  </div>

                  <div>
                    <div className="relative min-w-[12.5rem] border max-w-[40rem] p-3 pb-5 rounded-lg group">
                      <Link
                        to="/"
                        className="font-poppins-medium hover:underline"
                      >
                        {c.user?.username}
                      </Link>

                      <p
                        className="mt-2 w-full break-all "
                        dangerouslySetInnerHTML={{
                          __html: purifyComment
                        }}
                      />

                      <div className="pt-1 flex justify-end">
                        <i className="text-sm">
                          {timeAgo(c.createdat?.slice(0, -3) + "Z" || "")}
                        </i>
                      </div>

                      {userAuth?.data?.id === c.user?.id && (
                        <div className="hidden group-hover:flex gap-1 absolute -bottom-3 end-3">
                          <div className="w-8 h-8 rounded-full border bg-background">
                            <button className="w-full h-full">
                              <MdOutlineEdit className="m-auto text-md" />
                            </button>
                          </div>
                          <div className="w-8 h-8 rounded-full border bg-background">
                            <button
                              className="w-full h-full"
                              onClick={() =>
                                setIsDeleteCommentDialogOpen(prev => !prev)
                              }
                            >
                              <MdOutlineDelete className="m-auto text-md" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <QuestionDeleteDefaultDialog
                  title="Delete Comment"
                  description="Are you sure to delete your answer?"
                  open={isDeleteCommentDialogOpen}
                  onOpenChange={setIsDeleteCommentDialogOpen}
                  isLoading={isDeleteCommentLoading}
                  onConfirmClick={() => handleDeleteComment(c.id)}
                  onCancelClick={() => setIsDeleteCommentDialogOpen(false)}
                />
              </>
            );
          })}

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

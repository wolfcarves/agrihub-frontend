import React, { useState } from "react";
import DOMPurify from "dompurify";
import parse, { Element } from "html-react-parser";
import TagChip from "../chip/TagChip";
import { Link } from "react-router-dom";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import useAuth from "@hooks/useAuth";
import { IoBookmarksOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import useForumsSaveQuestionMutation from "@hooks/api/post/useForumsSaveQuestionMutation";
import { toast } from "sonner";
import useGetSavedQuestions, {
  GET_SAVED_QUESTION_KEY
} from "@hooks/api/get/useGetSavedQuestions";
import useForumsDeleteSaveQuestionMutation from "@hooks/api/delete/useForumsDeleteSaveQuestionMutation";
import { useQueryClient } from "@tanstack/react-query";
import useForumsDeleteQuestionMutation from "@hooks/api/delete/useForumsDeleteQuestionMutation";
import { GET_QUESTION_KEY } from "@hooks/api/get/useGetQuestionsQuery";
import useForumsReportQuestionMutation from "@hooks/api/post/useForumsReportQuestionMutation";
import QuestionDeleteQuestionDialog from "../dialog/QuestionDeleteDefaultDialog";
import QuestionReportQuestionDiaglog from "../dialog/QuestionReportQuestionDiaglog";
import QuestionCardDropdown from "../dropdown/QuestionCardDropdown";
import {
  PiArrowFatUp,
  PiArrowFatDown,
  PiArrowFatUpFill,
  PiArrowFatDownFill
} from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { TiArrowForwardOutline, TiAttachment } from "react-icons/ti";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";

interface QuestionCardProps {
  id?: string;
  title?: string;
  userId?: string;
  username?: string;
  role?: string;
  userAvatarSrc?: string;
  description?: string | Node;
  tags?: {
    tag?: string | undefined;
  }[];
  vote?: "upvote" | "downvote";
  voteCount?: string;
  answerCount?: string;
  createdat?: string;
  attachment?: number;
  onUpVoteBtnClick?: (e: React.MouseEvent) => void;
  onDownVoteBtnClick?: (e: React.MouseEvent) => void;
  onAnswerBtnClick?: (e: React.MouseEvent) => void;
  onShareBtnClick?: (e: React.MouseEvent) => void;
}

const QuestionCard = ({
  id,
  title,
  userId,
  username,
  role,
  userAvatarSrc,
  description,
  tags,
  vote,
  voteCount,
  answerCount,
  createdat,
  attachment,
  onUpVoteBtnClick,
  onDownVoteBtnClick,
  onAnswerBtnClick,
  onShareBtnClick
}: QuestionCardProps) => {
  const queryClient = useQueryClient();
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  const user = useAuth();
  const isSameUser = user.data?.id === userId;
  const { mutateAsync: saveQuestion } = useForumsSaveQuestionMutation();

  //to determine if the question is already saved
  const { data: savedQuestionsData } = useGetSavedQuestions();
  const isSaved = savedQuestionsData?.questions?.find(q => q.id === id);

  const { mutateAsync: deleteSavedQuestion } =
    useForumsDeleteSaveQuestionMutation();
  const { mutateAsync: deleteQuestion, isLoading: isDeleteQuestionLoading } =
    useForumsDeleteQuestionMutation();
  const { mutateAsync: reportQuestion, isLoading: isReportQuestionLoading } =
    useForumsReportQuestionMutation();

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

  const handleSaveQuestion = async () => {
    try {
      const isAlreadySaved = savedQuestionsData?.questions?.find(
        q => q.id === id
      );

      if (!isAlreadySaved) {
        await saveQuestion(id ?? "");
        toast.info(`Successfully saved a question`);
      } else {
        await deleteSavedQuestion(
          savedQuestionsData?.questions?.find(q => q.id === id)?.saved_id ?? ""
        );
        toast.info(`Successfully unsaved a question`);
      }

      queryClient.invalidateQueries({ queryKey: [GET_SAVED_QUESTION_KEY()] });
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      await deleteQuestion(id ?? "1");
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION_KEY()] });

      setIsDeleteOpen(false);
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  const handleReportQuestion = async (reason: string) => {
    try {
      if (reason.length < 3)
        return toast.error("Please enter atleast 3 characters");
      if (reason.length > 60) return toast.error("Input is too long");

      await reportQuestion({ id: id ?? "", reason });

      setIsReportOpen(false);
    } catch (error: any) {
      if (error.body.message === "Question Not Found")
        toast.error("You've already reported this question");

      setIsReportOpen(false);
      console.log(error.body.message);
    }
  };

  return (
    <>
      <div
        key={id}
        className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full max-w-[45rem]"
      >
        <div className="flex flex-col bg-white dark:bg-background border p-3 sm:p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
          <>
            <div className="flex items-start justify-between w-full">
              <Link to={`/forum/question/${username}/${id}`}>
                <h4
                  className="line-clamp-2 w-full text-cyan-700"
                  style={{ overflowWrap: "anywhere" }}
                >
                  {title}
                </h4>
              </Link>

              {isSameUser ? (
                <QuestionCardDropdown
                  items={[
                    {
                      label: "Edit",
                      icon: <FaRegEdit className="text-lg opacity-90" />,
                      onClick: () => {}
                    },
                    {
                      label: "Delete",
                      icon: <FaRegTrashCan className="text-lg opacity-90" />,
                      onClick: () => {
                        setIsDeleteOpen(prev => !prev);
                      }
                    }
                  ]}
                />
              ) : (
                <QuestionCardDropdown
                  items={[
                    {
                      label: !isSaved ? "Save" : "Unsaved",
                      icon: (
                        <IoBookmarksOutline className="text-lg opacity-90" />
                      ),
                      onClick: () => {
                        handleSaveQuestion();
                      }
                    },
                    {
                      label: "Report",
                      icon: <GoReport className="text-lg opacity-90" />,
                      onClick: () => {
                        setIsReportOpen(prev => !prev);
                      }
                    }
                  ]}
                />
              )}
            </div>
            {/* Name and Tags */}
            <div className="flex flex-wrap gap-3 justify-between items-center py-5 ">
              <QuestionUserProfileButton
                userId={userId}
                avatarSrc={userAvatarSrc}
                username={username}
                role={role}
                createdAt={createdat}
              />

              <div className="flex flex-wrap gap-2">
                {tags?.map(({ tag }) => {
                  return (
                    <TagChip
                      to={`/forum?tag=${tag}`}
                      key={Math.random()}
                      name={tag}
                      size="sm"
                    />
                  );
                })}
              </div>
            </div>
            {/* Content Body */}
            <div className="line-clamp-5" style={{ overflowWrap: "anywhere" }}>
              {contentHtml}
            </div>

            {(attachment ?? 0) > 0 && (
              <div className="flex gap-0.5 items-center bg-accent w-max rounded-md p-1 mt-3">
                <TiAttachment size={22} />
                <span className="font-poppins-medium text-sm">Attachment</span>
              </div>
            )}

            {/* Actions */}
            <QuestionFeedbackPanel
              items={[
                {
                  icon:
                    vote === "upvote" ? (
                      <PiArrowFatUpFill className="text-primary" />
                    ) : (
                      <PiArrowFatUp />
                    ),
                  requireAuth: true,
                  onClick: onUpVoteBtnClick
                },
                {
                  label: voteCount,
                  isButton: false
                },
                {
                  icon:
                    vote === "downvote" ? (
                      <PiArrowFatDownFill className="text-red-500" />
                    ) : (
                      <PiArrowFatDown />
                    ),
                  requireAuth: true,
                  onClick: onDownVoteBtnClick
                },
                {
                  icon: <LuMessagesSquare />,
                  label: answerCount + " Answers",
                  onClick: onAnswerBtnClick
                },
                {
                  icon: <TiArrowForwardOutline />,
                  label: "Share",
                  onClick: onShareBtnClick
                }
              ]}
            />
          </>
        </div>
      </div>

      <QuestionDeleteQuestionDialog
        title="Delete Post"
        description="This action cannot be undone. This will permanently delete your
        question and remove the data from our servers."
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        onConfirmClick={() => {
          handleDeleteQuestion();
        }}
        onCancelClick={() => {
          setIsDeleteOpen(false);
        }}
        isLoading={isDeleteQuestionLoading}
      />

      <QuestionReportQuestionDiaglog
        open={isReportOpen}
        onOpenChange={setIsReportOpen}
        onConfirmClick={reason => {
          handleReportQuestion(reason);
        }}
        onCancelClick={() => {
          setIsReportOpen(false);
        }}
        isLoading={isReportQuestionLoading}
      />
    </>
  );
};

export default QuestionCard;

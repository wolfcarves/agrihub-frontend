import React, { useState } from "react";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
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
import useForumsDeleteSaveQuestionMutation from "@hooks/api/post/useForumsDeleteSaveQuestionMutation";
import { useQueryClient } from "@tanstack/react-query";
import useForumsDeleteQuestionMutation from "@hooks/api/post/useForumsDeleteQuestionMutation";
import { GET_QUESTION_KEY } from "@hooks/api/get/useGetQuestionsQuery";
import useForumsReportQuestionMutation from "@hooks/api/post/useForumsReportQuestionMutation";
import QuestionDeleteQuestionDialog from "../dialog/QuestionDeleteQuestionDialog";
import QuestionReportQuestionDiaglog from "../dialog/QuestionReportQuestionDiaglog";
import QuestionCardDropdown from "../dropdown/QuestionCardDropdown";

interface QuestionCardProps {
  id?: string;
  title?: string;
  userId?: string;
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
  userId,
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
      if (reason.length < 3) toast.error("Please enter atleast 3 characters");
      if (reason.length > 30) toast.error("Input is too long");

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
        <div className="flex flex-col bg-white border p-3 sm:p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
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
              onUpVoteBtnClick={onUpVoteBtnClick}
              onDownVoteBtnClick={onDownVoteBtnClick}
              {...{ onShareBtnClick }}
            />
          </>
        </div>
      </div>

      <QuestionDeleteQuestionDialog
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

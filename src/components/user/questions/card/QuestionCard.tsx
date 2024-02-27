import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DOMPurify from "dompurify";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import parse, { Element } from "html-react-parser";
import TagChip from "../chip/TagChip";
import { Link } from "react-router-dom";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import useAuth from "@hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
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

interface QuestionCardProps {
  id?: string;
  title?: string;
  userId?: string;
  savedId?: string;
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
  savedId,
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
  const { mutateAsync: saveQuestion } = useForumsSaveQuestionMutation();

  //to determine if the question is already saved
  const { data: savedQuestionsData } = useGetSavedQuestions();

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
      }

      await deleteSavedQuestion(
        savedQuestionsData?.questions?.find(q => q.id === id)?.saved_id ?? ""
      );

      toast.info(`Successfully unsaved a question`);

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
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  return (
    <>
      <div
        className="flex flex-col rounded-xl hover:bg-neutral-300 duration-200 h-max w-full max-w-[47rem]"
        key={id}
      >
        <div className="flex flex-col bg-white border p-3 sm:p-5 rounded-xl min-h-[20rem] h-full max-h-[25rem] hover:shadow-sm hover:-translate-y-2 hover:-translate-x-2 duration-200">
          <>
            <div className="flex items-start justify-between">
              <Link
                to={`/forum/question/${username}/${id}`}
                className="pe-10 max-w-[40rem] "
              >
                <h4 className="text-blue-500 font-poppins-semibold line-clamp-2 hover:opacity-80">
                  {title}
                </h4>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span
                    className="text-xl p-1.5 rounded-md hover:bg-accent opacity-80 hover:opacity-100 cursor-pointer duration-200"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    <BsThreeDots />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[12rem]" align="end">
                  {user.data?.id === userId ? (
                    <>
                      <DropdownMenuItem className="rounded-md cursor-pointer py-2.5">
                        <FaRegEdit className="text-lg opacity-90" />
                        <span className="ps-2 font-poppins-semibold opacity-90">
                          Edit
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="rounded-md cursor-pointer py-2.5"
                        onClick={() => {
                          setIsDeleteOpen(prev => !prev);
                        }}
                      >
                        <FaRegTrashCan className="text-lg opacity-90" />
                        <span className="ps-2 font-poppins-semibold opacity-90">
                          Delete
                        </span>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem
                        className="rounded-md cursor-pointer py-2.5 "
                        onClick={() => {
                          handleSaveQuestion();
                        }}
                      >
                        {!savedId ? (
                          <>
                            <IoBookmarksOutline className="text-lg opacity-90" />
                            <span className="ps-2 font-poppins-semibold opacity-90">
                              Save
                            </span>
                          </>
                        ) : (
                          <>
                            <IoBookmarksOutline className="text-lg opacity-90" />
                            <span className="ps-2 font-poppins-semibold opacity-90">
                              Unsave
                            </span>
                          </>
                        )}
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className="rounded-md cursor-pointer py-2.5"
                        onClick={() => {
                          setIsReportOpen(prev => !prev);
                        }}
                      >
                        <GoReport className="text-lg opacity-90" />
                        <span className="ps-2 font-poppins-semibold opacity-90">
                          Report
                        </span>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
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

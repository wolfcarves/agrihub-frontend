import TagChip from "@components/user/questions/chip/TagChip";
import { QuestionViewSchema } from "@api/openapi";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import { toast } from "sonner";
import QuestionVoteButton from "../button/QuestionVoteButton";
import useAuth from "@hooks/useAuth";
import useGetSavedQuestions, {
  GET_SAVED_QUESTION_KEY
} from "@hooks/api/get/useGetSavedQuestions";
import { useQueryClient } from "@tanstack/react-query";
import useForumsDeleteSaveQuestionMutation from "@hooks/api/delete/useForumsDeleteSaveQuestionMutation";
import useForumsSaveQuestionMutation from "@hooks/api/post/useForumsSaveQuestionMutation";
import { LuBookmark } from "react-icons/lu";
import { GoReport } from "react-icons/go";
import { useState } from "react";
import useForumsReportQuestionMutation from "@hooks/api/post/useForumsReportQuestionMutation";
import QuestionReportQuestionDiaglog from "../dialog/QuestionReportQuestionDiaglog";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import useQuestionDeleteVoteMutation from "@hooks/api/get/useQuestionDeleteVoteMutation";
import { AiOutlineDelete } from "react-icons/ai";
import QuestionDeleteDefaultDialog from "../dialog/QuestionDeleteDefaultDialog";
import { useNavigate, useParams } from "react-router-dom";
import useForumsDeleteQuestionMutation from "@hooks/api/delete/useForumsDeleteQuestionMutation";
import { GET_QUESTION_KEY } from "@hooks/api/get/useGetQuestionsQuery";
import { MdOutlineEdit } from "react-icons/md";
import DOMPurify from "dompurify";
import LoadingSpinner from "@icons/LoadingSpinner";
import QuestionImageCarousel from "../carousel/QuestionImageCarousel";

interface QuestionPostBodyProps {
  data?: QuestionViewSchema;
}

const QuestionPostBody = ({ data }: QuestionPostBodyProps) => {
  const navigate = useNavigate();
  const user = useAuth();
  const params = useParams();
  const queryClient = useQueryClient();
  const [isQuestionDeleteDialogOpen, setIsQuestionDeleteDialogOpen] =
    useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  const { mutateAsync: saveQuestion } = useForumsSaveQuestionMutation();
  const { data: savedQuestionsData } = useGetSavedQuestions();
  const {
    mutateAsync: questionDeleteMutate,
    isLoading: isQuestionDeleteLoading
  } = useForumsDeleteQuestionMutation();
  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();
  const { mutateAsync: questionDeleteVoteMutate } =
    useQuestionDeleteVoteMutation();

  const { mutateAsync: deleteSavedQuestion } =
    useForumsDeleteSaveQuestionMutation();
  const { mutateAsync: reportQuestion, isLoading: isReportQuestionLoading } =
    useForumsReportQuestionMutation();

  const questionId = data?.question?.id;
  const isSaved = savedQuestionsData?.questions?.find(q => q.id === questionId);
  const isQuestionOwned = user.data?.id === data?.question?.user?.id;

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote",
    previousVoteId?: string
  ) => {
    try {
      if (previousVoteId) {
        await questionDeleteVoteMutate(previousVoteId);
        return;
      }

      await questionVoteMutate({
        id,
        requestBody: { type }
      });

      toast.info(`Successfully ${type} a question`);
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  const handleSaveQuestion = async () => {
    try {
      const isAlreadySaved = savedQuestionsData?.questions?.find(
        q => q.id === questionId
      );

      if (!isAlreadySaved) {
        await saveQuestion(questionId ?? "");
        toast.info(`Successfully saved a question`);
      } else {
        await deleteSavedQuestion(
          savedQuestionsData?.questions?.find(q => q.id === questionId)
            ?.saved_id ?? ""
        );
        toast.info(`Successfully unsaved a question`);
      }

      queryClient.invalidateQueries({ queryKey: [GET_SAVED_QUESTION_KEY()] });
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  const handleReportQuestion = async (reason: string) => {
    try {
      if (reason.length < 3)
        return toast.error("Please enter atleast 3 characters");
      if (reason.length > 60) return toast.error("Input is too long");

      await reportQuestion({ id: questionId ?? "", reason });

      setIsReportOpen(false);
    } catch (error: any) {
      if (error.body.message === "Question Not Found")
        toast.error("You've already reported this question");

      setIsReportOpen(false);
      console.log(error.body.message);
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      await questionDeleteMutate(params?.questionId ?? "");
      setIsQuestionDeleteDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION_KEY()] });
    } catch (err: any) {
      console.log(err.body.message);
    }
  };

  const [focusedImg, setFocusedImg] = useState<string>("");

  return (
    <>
      {focusedImg !== "" && (
        <div
          className="fixed inset-0 h-full w-full flex justify-center items-center z-50 bg-black/70"
          onClick={() => setFocusedImg("")}
        >
          <div className="absolute inset-0 m-auto h-max w-max -z-10">
            <LoadingSpinner className="text-primary" />
          </div>

          <img
            src={focusedImg}
            alt="attachment_image"
            className="w-[90%] aspect-auto xl:w-1/2 xl:h-1/2 object-contain"
          />
        </div>
      )}

      {/* container */}
      <div className="border-y">
        <div className="py-5">
          <QuestionUserProfileButton
            userId={data?.question?.user?.id}
            role={data?.question?.user?.role}
            avatarSrc={data?.question?.user?.avatar}
            username={data?.question?.user?.username}
            createdAt={data?.question?.createdat}
          />
        </div>

        <div className="pb-5 sm:pb-10">
          <h1
            className="text-lg sm:text-xl text-foreground font-poppins-semibold hover:opacity-90"
            style={{ overflowWrap: "anywhere" }}
          >
            {data?.question?.title}
          </h1>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <div
              className="flex flex-col min-h-72"
              style={{ overflowWrap: "anywhere" }}
            >
              <p
                className="sm:text-base"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.question?.question ?? "")
                }}
              ></p>
            </div>

            <div>
              {data?.question?.imagesrc?.[0] && (
                <div className="pb-3">
                  <h5 className="font-poppins-semibold">Attachments</h5>
                </div>
              )}

              {data?.question?.imagesrc &&
                data?.question?.imagesrc.length > 0 && (
                  <QuestionImageCarousel
                    imagesSrc={data?.question?.imagesrc}
                    onImageClick={img => {
                      setFocusedImg(img);
                    }}
                  />
                )}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center px-[.8rem]">
            <QuestionVoteButton
              variant="upvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(
                  data?.question?.id || "",
                  "upvote",
                  data?.question?.vote?.id
                );
              }}
            />

            <span className="font-semibold">{data?.question?.vote_count}</span>

            <QuestionVoteButton
              variant="downvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(
                  data?.question?.id || "",
                  "downvote",
                  data?.question?.vote?.id
                );
              }}
            />
          </div>
        </div>

        <div className="mt-20">
          {!isQuestionOwned ? (
            <QuestionFeedbackPanel>
              {!isSaved ? (
                <QuestionFeedbackPanel.ItemWithAuth
                  title="Save"
                  icon={() => <LuBookmark />}
                  onClick={handleSaveQuestion}
                />
              ) : (
                <QuestionFeedbackPanel.ItemWithAuth
                  title="Unsave"
                  icon={() => <LuBookmark />}
                  onClick={handleSaveQuestion}
                />
              )}
              <QuestionFeedbackPanel.ItemWithAuth
                title="Report"
                icon={() => <GoReport />}
                onClick={() => setIsReportOpen(prev => !prev)}
              />
            </QuestionFeedbackPanel>
          ) : (
            <QuestionFeedbackPanel>
              <QuestionFeedbackPanel.ItemWithAuth
                title="Edit"
                icon={() => <MdOutlineEdit />}
                onClick={() => navigate(`/forum/ask/edit/${questionId}`)}
              />
              <QuestionFeedbackPanel.ItemWithAuth
                title="Delete"
                icon={() => <AiOutlineDelete />}
                onClick={() => setIsQuestionDeleteDialogOpen(true)}
              />
            </QuestionFeedbackPanel>
          )}
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-3 py-5">
          {data?.question?.tags?.map(({ tag }) => {
            return (
              <TagChip
                to={`/forum?tag=${tag}`}
                key={tag}
                name={tag}
                size="base"
              />
            );
          })}
        </div>
      </div>

      <QuestionReportQuestionDiaglog
        open={isReportOpen}
        onOpenChange={setIsReportOpen}
        isLoading={isReportQuestionLoading}
        onConfirmClick={reason => {
          handleReportQuestion(reason);
        }}
        onCancelClick={() => {
          setIsReportOpen(false);
        }}
      />

      <QuestionDeleteDefaultDialog
        title="Delete Post"
        description="This action cannot be undone. This will permanently delete your
        question and remove the data from our servers."
        open={isQuestionDeleteDialogOpen}
        onOpenChange={setIsQuestionDeleteDialogOpen}
        isLoading={isQuestionDeleteLoading}
        onConfirmClick={() => {
          handleDeleteQuestion();
        }}
        onCancelClick={() => {
          setIsQuestionDeleteDialogOpen(false);
        }}
      />
    </>
  );
};

export default QuestionPostBody;

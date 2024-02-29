import parse, { Element } from "html-react-parser";
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
import useForumsDeleteSaveQuestionMutation from "@hooks/api/post/useForumsDeleteSaveQuestionMutation";
import useForumsSaveQuestionMutation from "@hooks/api/post/useForumsSaveQuestionMutation";
import { LuBookmark } from "react-icons/lu";
import { GoReport } from "react-icons/go";
import { useState } from "react";
import useForumsReportQuestionMutation from "@hooks/api/post/useForumsReportQuestionMutation";
import QuestionReportQuestionDiaglog from "../dialog/QuestionReportQuestionDiaglog";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";

interface QuestionPostBodyProps {
  data?: QuestionViewSchema;
}

const QuestionPostBody = ({ data }: QuestionPostBodyProps) => {
  const user = useAuth();
  const queryClient = useQueryClient();
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  const pattern = /\bblob\b/;
  let index = 0;

  const { mutateAsync: saveQuestion } = useForumsSaveQuestionMutation();
  const { data: savedQuestionsData } = useGetSavedQuestions();
  const { mutateAsync: questionVoteMutate } = useQuestionVoteMutation();
  const { mutateAsync: deleteSavedQuestion } =
    useForumsDeleteSaveQuestionMutation();
  const { mutateAsync: reportQuestion, isLoading: isReportQuestionLoading } =
    useForumsReportQuestionMutation();

  const questionId = data?.question?.id;
  const isSaved = savedQuestionsData?.questions?.find(q => q.id === questionId);
  const isQuestionOwned = user.data?.id === data?.question?.user?.id;

  const handleQuestionVote = async (
    id: string,
    type: "upvote" | "downvote"
  ) => {
    try {
      await questionVoteMutate({
        id,
        requestBody: { type }
      });

      toast.info(`Successfully ${type} a question`);
    } catch (error: any) {
      //
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

  return (
    <>
      <div className="pb-5 mb-5">
        <h1
          className="text-xl text-foreground font-poppins-semibold hover:opacity-90"
          style={{ overflowWrap: "anywhere" }}
        >
          {data?.question?.title}
        </h1>
      </div>

      <div className="pb-10">
        <QuestionUserProfileButton
          avatarSrc={data?.question?.user?.avatar}
          username={data?.question?.user?.username}
          createdAt={data?.question?.createdat}
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col" style={{ overflowWrap: "anywhere" }}>
          {parse(data?.question?.question ?? "", {
            replace: domNode => {
              if (domNode instanceof Element) {
                if (domNode.tagName === "img") {
                  if (pattern.test(domNode.attribs.src)) {
                    const replacedImg = (
                      <img
                        src={data?.question?.imagesrc?.[index]}
                        className="w-full max-w-[450px] my-2"
                      />
                    );
                    index++;
                    return replacedImg;
                  }
                }
              }
            }
          })}
        </div>

        {data?.question?.user?.username !== user.data?.username && (
          <div className="flex flex-col gap-3 items-center md:px-[2rem] px-[.8rem]">
            <QuestionVoteButton
              variant="upvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(data?.question?.id || "", "upvote");
              }}
            />

            <span className="font-semibold">{data?.question?.vote_count}</span>

            <QuestionVoteButton
              variant="downvote"
              voteType={data?.question?.vote?.type as "upvote" | "downvote"}
              onClick={() => {
                handleQuestionVote(data?.question?.id || "", "downvote");
              }}
            />
          </div>
        )}
      </div>

      <div className="mt-20">
        {!isQuestionOwned && (
          <QuestionFeedbackPanel
            items={[
              !isSaved
                ? {
                    label: "Save",
                    icon: <LuBookmark />,
                    requireAuth: true,
                    onClick: () => {
                      handleSaveQuestion();
                    }
                  }
                : {
                    label: "Unsaved",
                    icon: <LuBookmark />,
                    requireAuth: true,
                    onClick: () => {
                      handleSaveQuestion();
                    }
                  },
              {
                label: "Report",
                icon: <GoReport />,
                requireAuth: true,
                onClick: () => {
                  setIsReportOpen(prev => !prev);
                }
              }
            ]}
          />
        )}

        {/* <QuestionFeedbackPanel onSaveBtnClick={handleSaveQuestion} /> */}
      </div>

      <div className="flex flex-wrap gap-2 py-5">
        {data?.question?.tags?.map(({ tag }) => {
          return <TagChip key={tag} name={tag} size="base" />;
        })}
      </div>

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

export default QuestionPostBody;

import QuestionBackButton from "@components/user/questions/button/QuestionBackButton";
import QuestionPostBody from "@components/user/questions/body/QuestionPostBody";
import QuestionAnswerList from "@components/user/questions/list/QuestionAnswerList";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import useGetViewQuestion from "@hooks/api/get/useGetViewQuestion";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@icons/LoadingSpinner";
import QuestionAnswerForm from "@components/user/questions/form/QuestionAnswerForm/QuestionAnswerForm";
import useAuth from "@hooks/useAuth";

const Question = () => {
  const { questionId } = useParams();
  const { isAuthenticated } = useAuth();
  const {
    data: questionData,
    isLoading: isQuestionDataLoading,
    isRefetching: isQuestionDataRefetching
  } = useGetViewQuestion(questionId ?? "");

  if (isQuestionDataLoading) {
    return (
      <div className="flex justify-center py-10 w-full min-h-[60rem] ">
        <LoadingSpinner className="text-primary" />
      </div>
    );
  }

  if (!questionId) {
    return (
      <div className="flex justify-center py-10 w-full min-h-[60rem] ">
        <h1>Question not found</h1>
      </div>
    );
  }

  return (
    <OutletContainer className="pt-14 pb-24 px-1.5 sm:px-3 md:px-7 xl:px-10 min-h-[40rem]">
      <QuestionBackButton />
      <QuestionPostBody data={questionData} />
      <QuestionAnswerList
        data={questionData}
        isLoading={isQuestionDataLoading}
        isRefetching={isQuestionDataRefetching}
      />
      {isAuthenticated && (
        <QuestionAnswerForm questionId={questionData?.question?.id} />
      )}
    </OutletContainer>
  );
};

export default Question;

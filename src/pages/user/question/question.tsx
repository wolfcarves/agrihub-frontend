import QuestionPostBody from "@components/user/questions/body/QuestionPostBody";
import QuestionAnswerList from "@components/user/questions/list/QuestionAnswerList";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import useGetViewQuestion from "@hooks/api/get/useGetViewQuestion";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@icons/LoadingSpinner";
import QuestionAnswerForm from "@components/user/questions/form/QuestionAnswerForm/QuestionAnswerForm";
import useAuth from "@hooks/useAuth";
import QuestionNotFound from "@components/user/questions/error/QuestionNotFound";
import BackButton from "@components/ui/custom/button/back-button";

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

  if (!questionData) {
    return <QuestionNotFound />;
  }

  return (
    <OutletContainer className="pt-10 pb-32 sm:px-2 max-w-[45rem] min-h-[40rem] mx-auto">
      <BackButton className="mb-10" />
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

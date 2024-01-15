import QuestionBackButton from "@components/user/questions/button/QuestionBackButton";
import QuestionPostBody from "@components/user/questions/body/QuestionPostBody";
import QuestionAnswerList from "@components/user/questions/list/QuestionAnswerList";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import useGetViewQuestion from "@hooks/api/get/useGetViewQuestion";
import { useParams } from "react-router-dom";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import LoadingSpinner from "@icons/LoadingSpinner";

const Question = () => {
  const { questionId } = useParams();
  const { data: questionData, isLoading: isQuestionDataLoading } =
    useGetViewQuestion(questionId ?? "");

  if (isQuestionDataLoading) {
    return (
      <div className="flex justify-center py-10 w-full ">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <OutletContainer className="px-0 md:px-7 xl:px-10 min-h-[40rem]">
      <QuestionBackButton />
      <QuestionPostBody data={questionData} />
      <QuestionAnswerList data={questionData} />
    </OutletContainer>
  );
};

export default withAuthGuard(Question, ["guest", "member"]);

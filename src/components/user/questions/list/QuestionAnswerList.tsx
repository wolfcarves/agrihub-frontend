import { QuestionViewSchema } from "@api/openapi";
import QuestionAnswerCard from "../card/QuestionAnswerCard";
import LoadingSpinner from "@icons/LoadingSpinner";

interface QuestionAnswerListProps {
  data?: QuestionViewSchema;
  isLoading?: boolean;
  isRefetching?: boolean;
}

const QuestionAnswerList = ({ data, isLoading }: QuestionAnswerListProps) => {
  const hasAnswer = data?.question?.answers;

  return (
    <div className="mt-12">
      <h5 className="text-foreground font-merri-bold line-clamp-3 mb-10">
        Answers {data?.question?.answer_count}
      </h5>

      {isLoading && (
        <LoadingSpinner className="mx-auto text-lg text-green-700 mt-5" />
      )}

      {hasAnswer?.length === 0 && (
        <div className="text-center py-10">
          <h6>No answer yet, be the first one!</h6>
        </div>
      )}

      {data?.question?.answers
        ?.map(data => {
          return <QuestionAnswerCard key={data.id} data={data} />;
        })
        .reverse()}
    </div>
  );
};

export default QuestionAnswerList;

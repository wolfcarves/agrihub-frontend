import { UserAside } from "@components/ui/custom";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";

const QuestionAside = () => {
  // const { data, isLoading } = useGetQuestionsQuery(
  //   undefined,
  //   String(1),
  //   String(3),
  //   "trending",
  //   "top_questions"
  // );

  const { data, isLoading } = useGetQuestionsQuery({
    filter: "trending",
    search: "top_questions"
  });
  console.log(data);

  return (
    <UserAside>
      <div></div>
    </UserAside>
  );
};

export default QuestionAside;

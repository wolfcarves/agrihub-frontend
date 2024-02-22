import { useMemo } from "react";
import QuestionsInputAddQuestion from "@components/user/questions/input/QuestionsInputAddQuestion";
import QuestionsList from "@components/user/questions/list/QuestionsList";
import { Pagination } from "@components/ui/custom";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import { useSearchParams } from "react-router-dom";
import QuestionsFilterSelect, {
  SortValues
} from "@components/user/questions/select/QuestionsFilterSelect";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import QuestionsTitleTag from "@components/user/questions/title/QuestionsTitleTag";

const Questions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as SortValues,
      tag: searchParams.get("tag")
    };
  }, [searchParams]);

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      page: String(params.currentPage) ?? "1",
      filter: params.sortBy,
      perpage: "10"
    });

  const totalPages =
    questionData?.pagination?.total_pages ?? params.currentPage + 1;

  const handleFilterChange = (value: SortValues) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  return (
    <OutletContainer>
      <QuestionsInputAddQuestion />
      <QuestionsTitleTag title={params.tag} />
      <QuestionsFilterSelect
        selected={params.sortBy}
        onFilterChange={handleFilterChange}
      />
      <QuestionsList data={questionData} isLoading={isQuestionLoading} />
      <Pagination totalPages={totalPages} isLoading={isQuestionLoading} />
    </OutletContainer>
  );
};

export default Questions;

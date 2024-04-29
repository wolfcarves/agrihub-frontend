import { useEffect, useMemo } from "react";
import QuestionsInputAddQuestion from "@components/user/questions/input/QuestionsInputAddQuestion";
import QuestionsList from "@components/user/questions/list/QuestionsList";
import { Pagination } from "@components/ui/custom";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import { useLocation, useSearchParams } from "react-router-dom";
import QuestionsFilterSelect, {
  SortValues
} from "@components/user/questions/select/QuestionsFilterSelect";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import QuestionsTitleTag from "@components/user/questions/title/QuestionsTitleTag";
import { Helmet } from "react-helmet-async";
import QuestionCardSkeleton from "@components/user/questions/skeleton/QuestionCardSkeleton";
import QuestionTagNoResultResponse from "@components/user/questions/error/QuestionTagNoResultResponse";

const Questions = () => {
  const search = useLocation().search;
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
      perpage: "10",
      tag: params.tag ?? undefined
    });

  const totalPages =
    questionData?.pagination?.total_pages ?? params.currentPage + 1;

  const handleFilterChange = (value: SortValues) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  const hasQuestion =
    questionData?.questions?.length && questionData?.questions.length > 0; //may problem sa backend temporary solution lang muna to

  useEffect(() => {
    scrollTo(0, 0);
  }, [search]);

  return (
    <>
      <Helmet>
        <title>AgriHub | Forum</title>
      </Helmet>

      <OutletContainer className="pt-10 pb-32 sm:px-2 max-w-[45rem] mx-auto">
        <QuestionsInputAddQuestion />
        <QuestionsTitleTag title={params.tag} />
        <QuestionsFilterSelect
          selected={params.sortBy}
          onFilterChange={handleFilterChange}
        />

        {isQuestionLoading ? (
          <QuestionCardSkeleton />
        ) : hasQuestion ? (
          <>
            <QuestionsList data={questionData} isLoading={isQuestionLoading} />
            <Pagination totalPages={totalPages} isLoading={isQuestionLoading} />
          </>
        ) : (
          <QuestionTagNoResultResponse />
        )}
      </OutletContainer>
    </>
  );
};

export default Questions;

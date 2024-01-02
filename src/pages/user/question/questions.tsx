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

const Questions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as SortValues
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

  return (
    <OutletContainer>
      <QuestionsInputAddQuestion />
      <QuestionsFilterSelect
        selected={params.sortBy}
        onFilterChange={value => {
          searchParams.set("sortBy", value);
          setSearchParams(searchParams);
        }}
      />
      <QuestionsList data={questionData} isLoading={isQuestionLoading} />
      <Pagination totalPages={totalPages} isLoading={isQuestionLoading} />
    </OutletContainer>
  );
};

export default Questions;

// const navigate = useNavigate();
// const [page, setPage] = useState(1);
// const [filter, setFilter] = useState<"newest" | "active" | "trending">(
//   "newest"
// );
// const pagination = UsePagination();

// const { data, isLoading } = useGetQuestionsQuery(
//   undefined,
//   String(page),
//   String(10),
//   filter
// );

// // const topRef = useRef<HTMLDivElement>(null);
// const onPageChange = (newPage: number) => {
//   setPage(newPage);
// };

// const onFilterChange = (filterKey: "newest" | "active" | "trending") => {
//   setFilter(filterKey);
//   setPage(1);
// };

// const handleNavigateQuestion = (
//   username: string | undefined,
//   questionId: string | undefined
// ) => {
//   navigate(`/forum/question/${username}/${questionId}`);
// };

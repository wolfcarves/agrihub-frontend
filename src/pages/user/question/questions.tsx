import { ReactNode, useMemo, useState } from "react";
import QuestionsInputAddQuestion from "@components/user/questions/input/QuestionsInputAddQuestion";
import QuestionsList from "@components/user/questions/list/QuestionsList";
import { Pagination } from "@components/ui/custom";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import { useSearchParams } from "react-router-dom";
import QuestionsFilterSelect, {
  LabelValues
} from "@components/user/questions/select/QuestionsFilterSelect";

const QuestionsContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full min-h-full overflow-auto px-16 py-10">
    {children}
  </div>
);

const Questions = () => {
  const [sortBy, setSortBy] = useState<LabelValues>("Newest");
  const [searchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1
    };
  }, [searchParams]);

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      page: String(params.currentPage) ?? "1",
      filter: "newest",
      perpage: "10"
    });

  const totalPages =
    questionData?.pagination?.total_pages ?? params.currentPage + 1;

  return (
    <QuestionsContainer>
      <QuestionsInputAddQuestion />
      <QuestionsFilterSelect
        selected={sortBy}
        onFilterChange={value => setSortBy(value)}
      />
      <QuestionsList data={questionData} isLoading={isQuestionLoading} />

      {!isQuestionLoading && (
        <Pagination currentPage={params.currentPage} totalPages={totalPages} />
      )}
    </QuestionsContainer>
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

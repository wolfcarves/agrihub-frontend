import { ReactNode } from "react";

import QuestionsInputAddQuestion from "@components/user/questions/input/QuestionsInputAddQuestion";
import QuestionsList from "@components/user/questions/question-list/QuestionsList";
import QuestionsPagination from "@components/user/questions/pagination/QuestionsPagination";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";

const QuestionsContainer = ({ children }: { children: ReactNode }) => (
  <div className="w-full min-h-full overflow-auto px-16 py-10">{children}</div>
);

const Questions = () => {
  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      page: "1",
      filter: "newest",
      perpage: "10"
    });

  return (
    <QuestionsContainer>
      <QuestionsInputAddQuestion />
      <QuestionsList data={questionData} isLoading={isQuestionLoading} />
      <QuestionsPagination />
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

// useEffect(() => {
//   pagination?.scrollToTop();
// }, [page]);

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

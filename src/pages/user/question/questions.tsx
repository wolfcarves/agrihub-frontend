/*
  path - /questions
*/
import { useEffect, useState } from "react";
import useGetQuestions from "@hooks/api/get/useGetQuestions";
import Pagination from "@components/ui/custom/pagination/pagination";
import { useNavigate } from "react-router-dom";

import AddQuestion from "@components/user/questions/question-list/AddQuestion";
import QuestionsFilter from "@components/user/questions/question-list/QuestionsFilter";
import QuestionCards from "@components/user/questions/question-list/QuestionCards";
import { UsePagination } from "@providers/PaginationProvider";
import QuestionSkeleton from "@components/user/questions/question-skeleton/QuestionSkeleton";

const Questions = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<"newest" | "active" | "trending">(
    "newest"
  );
  const pagination = UsePagination();

  const { data, isLoading } = useGetQuestions(
    undefined,
    String(page),
    String(10),
    filter
  );
  // const topRef = useRef<HTMLDivElement>(null);
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    pagination?.scrollToTop();
  }, [page]);

  const onFilterChange = (filterKey: "newest" | "active" | "trending") => {
    setFilter(filterKey);
    setPage(1);
  };

  const handleNavigateAsk = () => {
    navigate("/forums/ask");
  };

  const handleNavigateQuestion = (
    username: string | undefined,
    questionId: string | undefined
  ) => {
    navigate(`/forums/question/${username}/${questionId}`);
  };

  //This is temporary, refactor later--------
  return (
    <div>
      <div className="flex gap-3 justify-between items-center mb-3">
        <AddQuestion handleNavigateAsk={handleNavigateAsk} />
        <QuestionsFilter onFilterChange={onFilterChange} filter={filter} />
      </div>
      <div>
        {isLoading ? (
          <QuestionSkeleton quantity={4} />
        ) : (
          <QuestionCards
            data={data}
            handleNavigateQuestion={handleNavigateQuestion}
          />
        )}
      </div>

      <QuestionCards
        data={data}
        handleNavigateQuestion={handleNavigateQuestion}
      />
      <Pagination
        currentPage={Number(data?.pagination?.page)}
        totalPages={Number(data?.pagination?.total_pages)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Questions;

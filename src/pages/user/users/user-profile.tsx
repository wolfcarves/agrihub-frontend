/*
  path - /users/:userId/:username
*/
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import useGetUserProfileQuery from "@hooks/api/get/useGetUserProfile";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@components/ui/button";
import useGetQuestions from "@hooks/api/get/useGetQuestions";
import QuestionCards from "@components/user/questions/question-list/QuestionCards";
import Pagination from "@components/ui/custom/pagination/pagination";
import { UsePagination } from "@providers/PaginationProvider";
import QuestionSkeleton from "@components/user/questions/question-skeleton/QuestionSkeleton";

const UserProfile = () => {
  const [page, setPage] = useState(1);
  const pagination = UsePagination();

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    pagination?.scrollToTop();
  }, [page]);

  const navigate = useNavigate();
  const { username } = useParams();
  const { data } = useGetUserProfileQuery(username as string);
  const { data: questionsData, isLoading } = useGetQuestions(
    undefined,
    String(page),
    "10",
    "newest",
    `profile_query`,
    data?.id
  );
  console.log(questionsData?.pagination?.total_pages, "TEST USER ID");
  const handleNavigateQuestion = (
    username: string | undefined,
    questionId: string | undefined
  ) => {
    navigate(`/forums/question/${username}/${questionId}`);
  };

  return (
    <>
      <h4 className="font-medium mb-4">View Profile Page</h4>
      <div className="py-6 px-4 border-2 border-border rounded-lg">
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <img
              src={data?.avatar}
              alt="profile picture"
              className="w-24 h-24 rounded-full"
            />
            <div className=" self-start">
              <h4 className="font-medium mb-2">{data?.username}</h4>
              <p className="text-sm flex gap-1 items-center">
                <CiLocationOn />
                {data?.municipality}, {data?.district}
              </p>
              <p>{data?.bio}</p>
            </div>
          </div>
        </div>
        <div>
          <Button>Questions</Button>
        </div>
      </div>
      {isLoading ? (
        <QuestionSkeleton quantity={4} />
      ) : (
        <QuestionCards
          data={questionsData}
          handleNavigateQuestion={handleNavigateQuestion}
        />
      )}
      {!isLoading && (
        <Pagination
          currentPage={Number(page)}
          onPageChange={onPageChange}
          totalPages={Number(questionsData?.pagination?.total_pages)}
        />
      )}
    </>
  );
};

export default UserProfile;

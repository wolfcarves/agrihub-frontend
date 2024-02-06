/*
  path - /users/:userId/:username
*/
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@components/ui/button";
import useGetQuestions from "@hooks/api/get/useGetQuestionsQuery";
import QuestionCards from "@components/user/questions/list/QuestionsList";
import { UsePagination } from "@providers/PaginationProvider";
import QuestionSkeleton from "@components/user/questions/skeleton/QuestionSkeleton";
import { IoMdArrowBack } from "react-icons/io";
import useGetUserProfileQuery from "../../../hooks/api/get/useGetUserProfileQuery";
import useAuth from "../../../hooks/useAuth";

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
  const { data: questionsData, isLoading } = useGetQuestions({
    search: undefined,
    page: String(page),
    perpage: "10",
    filter: "newest",
    profile: "937242908212068353"
  });

  const { data: Userdata } = useAuth();
  console.log(Userdata);

  const handleNavigateQuestion = (
    username: string | undefined,
    questionId: string | undefined
  ) => {
    navigate(`/forum/question/${username}/${questionId}`);
  };

  return (
    <>
      <h6
        className="flex gap-2 items-center cursor-pointer mb-1 font-medium"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Go back
      </h6>
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
        <QuestionCards data={questionsData} />
      )}
      {/* {!isLoading && (
        <Pagination
          currentPage={Number(page)}
          onPageChange={onPageChange}
          totalPages={Number(questionsData?.pagination?.total_pages)}
        />
      )} */}
    </>
  );
};

export default UserProfile;

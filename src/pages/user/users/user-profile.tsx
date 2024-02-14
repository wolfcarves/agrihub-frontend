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
import Loader from "../../../icons/Loader";
import { formatRoles } from "../../../components/lib/utils";
import { data } from "../../admin/farms/table/columns-farm";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";

const UserProfile = () => {
  const navigate = useNavigate();
  const { username, userId } = useParams();
  const { data: UserData, isLoading: UserLoading } = useGetUserProfileQuery(
    username as string
  );
  const { data: questionsData, isLoading: QuestionLoading } = useGetQuestions({
    search: undefined,
    page: "1",
    perpage: "10",
    filter: "newest",
    profile: userId
  });

  console.log(UserData);

  const handleNavigateQuestion = (
    username: string | undefined,
    questionId: string | undefined
  ) => {
    navigate(`/forum/question/${username}/${questionId}`);
  };

  return (
    <>
      <div className="py-6 px-[4rem] grid grid-cols-12 gap-10">
        <div className=" col-span-7 bg-white border rounded-md p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-20 h-20 rounded-full">
                <AvatarImage src={UserData?.avatar} />
                <AvatarFallback>
                  {UserData?.firstname?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="self-start pt-1">
                <h4 className=" font-poppins-semibold mb-0">{`${UserData?.firstname} ${UserData?.lastname}`}</h4>
                <p className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {formatRoles(UserData?.role || "")}
                </p>
                <p className=" text-gray-500 text-sm font-poppins-medium">
                  @{UserData?.username}
                </p>
              </div>
            </div>
            <div>Edit</div>
          </div>
          <hr className="mt-5 mb-3" />
          <p className=" text-gray-600 font-poppins-medium">Bio</p>
          <p className="text-gray-500">{UserData?.bio}</p>
        </div>
        <div className=" col-span-5 bg-white border rounded-md p-5">
          <h4>Credentials & Highlights</h4>
          <p className="text-gray-600">
            Lives in&nbsp;
            <span className="text-gray-800 font-poppins-medium">
              {UserData?.present_address}
            </span>
          </p>
          <p className="text-gray-600">
            Born in&nbsp;
            <span className="text-gray-800 font-poppins-medium">
              {UserData?.birthdate}
            </span>
          </p>
        </div>
      </div>

      <Loader isVisible={UserLoading && QuestionLoading} />
    </>
  );
};

export default UserProfile;
{
  /* <h6
        className="flex gap-2 items-center cursor-pointer mb-1 font-medium"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Go back
      </h6> */
}
{
  /* <div className="mb-4">
          <div className="flex items-center gap-5">
            <img
              src={UserData?.avatar}
              alt="profile picture"
              className="w-24 h-24 rounded-full"
            />
            <div className="self-start">
              <h3 className=" font-poppins-semibold">@{UserData?.username}</h3><p>{formatRoles(UserData?.role || '')}</p>
              <p className=" text-gray-600">{`${UserData?.firstname} ${UserData?.lastname}`}</p>
              
              <p className="text-sm flex gap-1 items-center">
                <CiLocationOn />
                {UserData?.municipality}, {UserData?.district}
              </p>
              <p>{UserData?.bio}</p>
            </div>
          </div>
        </div>
        <div>
          <Button>Questions</Button>
        </div> */
}

// {QuestionLoading ? (
//   <QuestionSkeleton quantity={4} />
// ) : (
//   <QuestionCards data={questionsData} />
// )}

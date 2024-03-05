import ProfileImage from "@components/user/users/image/ProfileImage";
import ProfileQuestionList from "@components/user/users/list/ProfileQuestionList";
import ProfileTitle from "@components/user/users/title/ProfileTitle";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import useAuth from "@hooks/useAuth";
import { UserTabs } from "@components/ui/custom";
import { useState } from "react";
import ProfileQuestionSavedList from "@components/user/users/list/ProfileQuestionSavedList";
import useGetSavedQuestions from "@hooks/api/get/useGetSavedQuestions";
import { useParams } from "react-router-dom";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetUserProfileQuery from "@hooks/api/get/useGetUserProfileQuery";

const options = ["Posts", "Saved"];

const UserProfile = () => {
  const user = useAuth();
  const params = useParams();
  const isOwn = params.username === user?.data?.username;

  const [currentIndex, setCurrentIndex] = useState<number>(
    params?.saved ? 1 : 0
  );

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      perpage: "10",
      profile: isOwn ? user?.data?.id : params.userId
    });

  //search user
  const { data: userData } = useGetUserProfileQuery(params?.username ?? "");

  const { data: savedQuestionData, isLoading: isSavedQuestionLoading } =
    useGetSavedQuestions({});

  const avatar = isOwn ? user?.data?.avatar : userData?.avatar;
  const fullname = isOwn
    ? user.data?.firstname + " " + user.data?.lastname
    : userData?.firstname + " " + userData?.lastname;
  const role = isOwn ? user?.data?.role : userData?.role;

  return (
    <>
      <ProfileImage avatar={avatar} />
      <ProfileTitle
        fullname={fullname}
        role={role}
        username={user.data?.username}
        postCount={questionData?.questions?.length}
        saveCount={savedQuestionData?.questions?.length}
      />
      <UserTabs
        index={currentIndex}
        options={isOwn ? options : [options[0]]}
        onChange={value => {
          setCurrentIndex(options.indexOf(value as "Posts" | "Saved"));
        }}
      />
      {currentIndex === 0 ? (
        <ProfileQuestionList
          data={questionData}
          isLoading={isQuestionLoading}
        />
      ) : (
        <ProfileQuestionSavedList
          data={savedQuestionData}
          isLoading={isSavedQuestionLoading}
        />
      )}
    </>
  );
};

export default withAuthGuard(UserProfile, [
  "member",
  "farmer",
  "farm_head",
  "asst_admin",
  "admin"
]);

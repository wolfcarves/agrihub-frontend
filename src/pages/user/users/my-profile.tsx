import ProfileImage from "@components/user/users/image/ProfileImage";
import ProfileQuestionList from "@components/user/users/list/ProfileQuestionList";
import ProfileTitle from "@components/user/users/title/ProfileTitle";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import useAuth from "@hooks/useAuth";
import { UserTabs } from "@components/ui/custom";
import { useState } from "react";
import ProfileQuestionSavedList from "@components/user/users/list/ProfileQuestionSavedList";
import useGetSavedQuestions from "@hooks/api/get/useGetSavedQuestions";

const options = ["Posts", "Saved"] as const;

const MyProfile = () => {
  const user = useAuth();
  const [currentTab, setCurrentTab] = useState<(typeof options)[number]>(
    options[0]
  );

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      perpage: "10"
    });

  const { data: savedQuestionData, isLoading: isSavedQuestionLoading } =
    useGetSavedQuestions({});

  return (
    <>
      <ProfileImage />
      <ProfileTitle
        fullname={user.data?.firstname + " " + user.data?.lastname}
        username={user.data?.username}
        postCount={
          questionData?.questions?.filter(q => q.user?.id === user.data?.id)
            .length
        }
      />
      <UserTabs
        options={options}
        onChange={value => setCurrentTab(value as (typeof options)[number])}
      />
      {currentTab === "Posts" ? (
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

export default MyProfile;

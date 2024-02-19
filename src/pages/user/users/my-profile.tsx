import ProfileImage from "@components/user/users/image/ProfileImage";
import ProfileQuestionList from "@components/user/users/list/QuestionList";
import ProfileTabs from "@components/user/users/tabs/ProfileTabs";
import ProfileTitle from "@components/user/users/title/ProfileTitle";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import useAuth from "@hooks/useAuth";

const MyProfile = () => {
  const user = useAuth();

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      perpage: "10"
    });

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
      <ProfileTabs />
      <ProfileQuestionList data={questionData} isLoading={isQuestionLoading} />
    </>
  );
};

export default MyProfile;

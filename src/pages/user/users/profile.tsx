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
import ProfileReportUserDialog from "@components/user/users/dialog/ProfileReportUserDialog";
import useUserReportUsersMutation from "@hooks/api/post/useUserReportUsersMutation";
import { toast } from "sonner";

const options = ["Posts", "Saved"];

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const { mutateAsync: reportUser, isLoading: isReportUserLoading } =
    useUserReportUsersMutation();

  const handleUserReport = async (reason: string, file?: File) => {
    try {
      const res = await reportUser({
        formData: {
          reported: userData?.id,
          evidence: file as Blob[] | undefined, //ganto muna HAHAHAHAHHA taena nakalimutan ko yung blob at file
          reason
        }
      });

      toast.success(res.message);
      setIsOpen(false);
    } catch (error: any) {
      toast.success(error.body.message);
    }
  };

  return (
    <>
      <ProfileImage avatar={avatar} />
      <ProfileTitle
        fullname={fullname}
        role={role}
        username={user.data?.username}
        postCount={questionData?.questions?.length}
        saveCount={savedQuestionData?.questions?.length}
        onReportButtonClick={
          !isOwn ? () => setIsOpen(prev => !prev) : undefined
        }
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
      <ProfileReportUserDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        isLoading={isReportUserLoading}
        onConfirmClick={handleUserReport}
        onCancelClick={() => setIsOpen(false)}
      />
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

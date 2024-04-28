import ProfileImage from "@components/user/users/image/ProfileImage";
import ProfileQuestionList from "@components/user/users/list/ProfileQuestionList";
import useGetQuestionsQuery from "@hooks/api/get/useGetQuestionsQuery";
import useAuth from "@hooks/useAuth";
import { useState } from "react";
import ProfileQuestionSavedList from "@components/user/users/list/ProfileQuestionSavedList";
import useGetSavedQuestions from "@hooks/api/get/useGetSavedQuestions";
import { useParams } from "react-router-dom";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetUserProfileQuery from "@hooks/api/get/useGetUserProfileQuery";
import ProfileReportUserDialog from "@components/user/users/dialog/ProfileReportUserDialog";
import useUserReportUsersMutation from "@hooks/api/post/useUserReportUsersMutation";
import { toast } from "sonner";
import ProfilePersonalInformationList from "@components/user/users/list/ProfilePersonalInformationList";
import BackButton from "@components/ui/custom/button/back-button";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useAuth();
  const params = useParams();
  const isOwn = params.username === user?.data?.username;
  const currentIndex = params.saved ? 1 : 0;

  const { data: questionData, isLoading: isQuestionLoading } =
    useGetQuestionsQuery({
      perpage: "10",
      profile: params.userId
    });
  const { data: userData, isLoading: isUserDataLoading } =
    useGetUserProfileQuery(params?.username ?? "");
  const { data: savedQuestionData, isLoading: isSavedQuestionLoading } =
    useGetSavedQuestions({});
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
      toast.error(error.body.message);
    }
  };

  return (
    <>
      <ProfileImage
        isLoading={isUserDataLoading}
        userId={userData?.id}
        avatar={userData?.avatar}
        fullname={userData?.firstname + " " + userData?.lastname}
        role={userData?.role}
        username={userData?.username}
        bio={userData?.bio}
        district={user?.data?.district}
        createdAt={user?.data?.createdat}
        postCount={questionData?.questions?.length}
        saveCount={savedQuestionData?.questions?.length}
        onReportButtonClick={
          !isOwn ? () => setIsOpen(prev => !prev) : undefined
        }
      />

      <div className="flex flex-wrap-reverse md:flex-nowrap justify-between min-h-[35rem]">
        {currentIndex === 0 ? (
          <ProfileQuestionList
            isOwn={isOwn}
            data={questionData}
            isLoading={isQuestionLoading}
          />
        ) : (
          <ProfileQuestionSavedList
            data={savedQuestionData}
            isLoading={isSavedQuestionLoading}
          />
        )}

        <ProfilePersonalInformationList
          isOwn={isOwn}
          email={userData?.email}
          address={userData?.present_address}
          birthDate={userData?.birthdate}
          phone={userData?.contact_number}
          farmId={userData?.farm_id}
        />
      </div>

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

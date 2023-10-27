import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserProfileCompletionForm from "@components/user/UserForms/UserProfileCompletionForm/UserProfileCompletionForm";
import UserProfileCompletionTitle from "@components/user/UserTitle/UserProfileCompletionTitle";

export default function ProfileCompletion() {
  return (
    <UserFormContainer>
      <UserProfileCompletionTitle />
      <UserProfileCompletionForm />
    </UserFormContainer>
  );
}

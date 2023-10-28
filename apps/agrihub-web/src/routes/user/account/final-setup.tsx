import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserSetupUsernameForm from "@components/user/UserForms/UserFinalSetupForm/UserFinalSetupForm";
import UserFinalSetupFormTitle from "@components/user/UserTitle/UserFinalSetupFormTitle";

export default function SetupUsername() {
  return (
    <UserFormContainer>
      <UserFinalSetupFormTitle />
      <UserSetupUsernameForm />
    </UserFormContainer>
  );
}

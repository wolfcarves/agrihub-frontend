import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserSetupUsernameForm from "@components/user/UserForms/UserFinalSetupForm/UserFinalSetupForm";
import UserSetupUsernameTitle from "@components/user/UserTitle/UserFinalSetupFormTitle";

export default function SetupUsername() {
  return (
    <UserFormContainer>
      <UserSetupUsernameTitle />
      <UserSetupUsernameForm />
    </UserFormContainer>
  );
}

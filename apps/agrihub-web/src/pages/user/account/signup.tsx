import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserSignupForm from "@components/user/UserForms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/UserTitle/UserSignupFormTitle";

export default function Signup() {
  return (
    <UserFormContainer>
      <UserSignupFormTitle />
      <UserSignupForm />
    </UserFormContainer>
  );
}

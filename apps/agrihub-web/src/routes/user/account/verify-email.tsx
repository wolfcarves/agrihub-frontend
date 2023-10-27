import UserVerifyEmailContainer from "@components/user/UserContainers/UserVerifyEmailContainer";
import UserVerifyEmailForm from "@components/user/UserForms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserVerifyEmailTitle from "@components/user/UserTitle/UserVerifyEmailTitle";

export default function VerifyEmail() {
  return (
    <UserVerifyEmailContainer>
      <UserVerifyEmailTitle />
      <UserVerifyEmailForm />
    </UserVerifyEmailContainer>
  );
}

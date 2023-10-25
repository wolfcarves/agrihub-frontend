import UserBaseContainer from "@components/user/UserContainers/UserBaseContainer";
import UserLoginForm from "@components/user/UserForms/UserLoginForm";
import UserLoginHeader from "@components/user/UserHeaders/UserLoginHeader";

export default function Login() {
  return (
    <UserBaseContainer>
      <UserLoginHeader />
      <UserLoginForm />
    </UserBaseContainer>
  );
}

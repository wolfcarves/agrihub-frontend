import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserLoginForm from "@components/user/UserForms/UserLoginForm/UserLoginForm";
import UserLoginFormTitle from "@components/user/UserTitle/UserLoginFormTitle";

export default function Login() {
  return (
    <UserFormContainer>
      <UserLoginFormTitle />
      <UserLoginForm />
    </UserFormContainer>
  );
}

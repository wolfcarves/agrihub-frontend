import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserLoginForm from "@components/user/UserForms/UserLoginForm/UserLoginForm";
import UserLoginFormTitle from "@components/user/UserTitle/UserLoginFormTitle";

const Login = () => {
  return (
    <UserFormContainer>
      <UserLoginFormTitle />
      <UserLoginForm />
    </UserFormContainer>
  );
};

export default Login;

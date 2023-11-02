import UserFormContainer from "@pages/components/user/UserContainers/UserFormContainer";
import UserLoginForm from "@pages/components/user/UserForms/UserLoginForm/UserLoginForm";
import UserFormTitle from "@pages/components/user/UserTitle/UserFormTitle";

const Login = () => {
  return (
    <UserFormContainer>
      <UserFormTitle title="Sign in" size="4xl" />
      <UserLoginForm />
    </UserFormContainer>
  );
};

export default Login;

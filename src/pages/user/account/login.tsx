import UserLoginForm from "@components/user/forms/UserLoginForm/UserLoginForm";
import UserSignInMethods from "@components/user/forms/UserSignInMethods/UserSignInMethod";
import UserFormTitle from "@components/user/title/UserFormTitle";

const Login = () => {
  return (
    <>
      <UserFormTitle title="Login your account" step="1" />
      <UserSignInMethods />
      <UserLoginForm />
    </>
  );
};

export default Login;

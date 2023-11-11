import UserLoginForm from "@components/user/forms/UserLoginForm/UserLoginForm";
import UserSignInMethods from "@components/user/forms/UserSignInMethods/UserSignInMethod";
import UserFormTitle from "@components/user/title/UserFormTitle";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login to Agrihub</title>
      </Helmet>
      <UserFormTitle title="Login your account" />
      <UserSignInMethods />
      <UserLoginForm />
    </>
  );
};

export default Login;

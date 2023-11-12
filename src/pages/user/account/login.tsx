import UserLoginForm from "@components/user/forms/UserLoginForm/UserLoginForm";
import UserSignInMethods from "@components/user/forms/UserSignInMethods/UserSignInMethod";
import UserLoginFormTitle from "@components/user/title/UserLoginFormTitle";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login to Agrihub</title>
      </Helmet>
      <UserLoginFormTitle />
      <UserLoginForm />
      <UserSignInMethods />
    </>
  );
};

export default Login;

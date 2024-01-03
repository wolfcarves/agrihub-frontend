import UserLoginForm from "@components/user/account/forms/UserLoginForm/UserLoginForm";
import UserSignInMethods from "@components/user/account/forms/UserSignInMethods/UserSignInMethod";
import UserLoginFormTitle from "@components/user/account/title/UserLoginFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
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

export default withAuthGuard(Login, ["guest"]);

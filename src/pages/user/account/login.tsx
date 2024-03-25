import BackButton from "@components/ui/custom/button/back-button";
import UserLoginForm from "@components/user/account/forms/UserLoginForm/UserLoginForm";
import UserLoginFormTitle from "@components/user/account/title/UserLoginFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login to AgriHub</title>
      </Helmet>

      <div className="w-full mx-auto max-w-[28rem]">
        <BackButton className="mb-10" />
        <UserLoginFormTitle />
        <UserLoginForm />
      </div>
    </>
  );
};

export default withAuthGuard(Login, ["guest"]);

import UserSignupForm from "@components/user/account/forms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/account/title/UserSignupFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Signup to Agrihub</title>
      </Helmet>

      <div className="w-full mx-auto max-w-[28rem]">
        <UserSignupFormTitle />
        <UserSignupForm />
      </div>
    </>
  );
};

export default withAuthGuard(Signup, ["guest"]);

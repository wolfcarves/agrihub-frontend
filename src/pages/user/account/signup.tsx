import BackButton from "@components/ui/custom/button/back-button";
import UserSignupForm from "@components/user/account/forms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/account/title/UserSignupFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Signup to AgriHub</title>
      </Helmet>

      <div className="w-full mx-auto max-w-[28rem]">
        <BackButton className="mt-20 mb-10" />
        <UserSignupFormTitle />
        <UserSignupForm />
      </div>
    </>
  );
};

export default withAuthGuard(Signup, ["guest"]);

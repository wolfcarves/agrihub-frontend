import UserSignupForm from "@components/user/forms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/title/UserSignupFormTitle";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Signup to Agrihub</title>
      </Helmet>
      <UserSignupFormTitle />
      <UserSignupForm />
    </>
  );
};

export default Signup;

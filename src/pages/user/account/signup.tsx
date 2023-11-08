import UserSignupForm from "@components/user/forms/UserSignupForm/UserSignupForm";
import UserFormTitle from "@components/user/title/UserFormTitle";

const Signup = () => {
  return (
    <>
      <UserFormTitle title="Create an account" step="1" />
      <UserSignupForm />
    </>
  );
};

export default Signup;

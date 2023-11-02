import UserFormContainer from "@pages/components/user/UserContainers/UserFormContainer";
import UserSignupForm from "@pages/components/user/UserForms/UserSignupForm/UserSignupForm";
import UserFormTitle from "@pages/components/user/UserTitle/UserFormTitle";

const Signup = () => {
  return (
    <UserFormContainer>
      <UserFormTitle title="Create an account" size="4xl" />
      <UserSignupForm />
    </UserFormContainer>
  );
};

export default Signup;

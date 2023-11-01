import UserFormContainer from "@components/user/UserContainers/UserFormContainer";
import UserSignupForm from "@components/user/UserForms/UserSignupForm/UserSignupForm";
import UserSignupFormTitle from "@components/user/UserTitle/UserSignupFormTitle";
import withAuthGuard from "@higher-order/withAuthGuard";

const Signup = () => {
  return (
    <UserFormContainer>
      <UserSignupFormTitle />
      <UserSignupForm />
    </UserFormContainer>
  );
};

export default withAuthGuard(Signup);

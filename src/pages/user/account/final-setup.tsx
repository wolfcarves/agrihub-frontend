import UserFormContainer from "@pages/components/user/UserContainers/UserFormContainer";
import UserSetupUsernameForm from "@pages/components/user/UserForms/UserFinalSetupForm/UserFinalSetupForm";
import UserFormTitle from "@pages/components/user/UserTitle/UserFormTitle";

const FinalSetup = () => {
  return (
    <UserFormContainer>
      <UserFormTitle title="You're almost done!" center />
      <UserSetupUsernameForm />
    </UserFormContainer>
  );
};

export default FinalSetup;

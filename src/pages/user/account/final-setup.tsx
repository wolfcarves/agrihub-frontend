import UserFinalSetupForm from "@components/user/forms/UserFinalSetupForm/UserFinalSetupForm";
import UserFormTitle from "@components/user/title/UserFormTitle";

const FinalSetup = () => {
  return (
    <>
      <UserFormTitle title="You're almost done!" center />
      <UserFinalSetupForm />
    </>
  );
};

export default FinalSetup;

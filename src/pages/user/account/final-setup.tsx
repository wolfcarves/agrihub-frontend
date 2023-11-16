import UserFinalSetupForm from "@components/user/forms/UserFinalSetupForm/UserFinalSetupForm";
import UserFinalFormTitle from "@components/user/title/UserFinalFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const FinalSetup = () => {
  return (
    <>
      <UserFinalFormTitle />
      <UserFinalSetupForm />
    </>
  );
};

export default withAuthGuard(FinalSetup);

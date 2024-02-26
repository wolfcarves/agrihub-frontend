import UserFinalSetupForm from "@components/user/account/forms/UserFinalSetupForm/UserFinalSetupForm";
import UserFinalFormTitle from "@components/user/account/title/UserFinalFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const FinalSetup = () => {
  return (
    <>
      <UserFinalFormTitle />
      <UserFinalSetupForm />
    </>
  );
};

export default withAuthGuard(FinalSetup, ["member", "asst_admin"]);

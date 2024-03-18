import UserFinalSetupForm from "@components/user/account/forms/UserFinalSetupForm/UserFinalSetupForm";
import UserFinalFormTitle from "@components/user/account/title/UserFinalFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const FinalSetup = () => {
  return (
    <div className="max-w-[28rem] w-full mx-auto">
      <UserFinalFormTitle />
      <UserFinalSetupForm />
    </div>
  );
};

export default withAuthGuard(FinalSetup, ["member", "asst_admin"]);

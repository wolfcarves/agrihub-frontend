import UserSetupAccountForm from "@components/user/account/forms/UserSetupAccountForm/UserSetupAccountForm";
import UserSetupAccountTitle from "@components/user/account/title/UserSetupAccountTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const SetupAccount = () => {
  return (
    <div className="max-w-[28rem] w-full mx-auto">
      <UserSetupAccountTitle />
      <UserSetupAccountForm />
    </div>
  );
};

export default withAuthGuard(SetupAccount, ["member", "asst_admin"]);

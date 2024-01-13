import UserSetupAccountForm from "@components/user/account/forms/UserSetupAccountForm/UserSetupAccountForm";
import UserSetupAccountTitle from "@components/user/account/title/UserSetupAccountTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const SetupAccount = () => {
  return (
    <>
      <UserSetupAccountTitle />
      <UserSetupAccountForm />
    </>
  );
};

export default withAuthGuard(SetupAccount, ["member"]);

import UserSetupAccountForm from "@components/user/forms/UserSetupAccountForm/UserSetupAccountForm";
import UserSetupAccountTitle from "@components/user/title/UserSetupAccountTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const SetupAccount = () => {
  return (
    <>
      <UserSetupAccountTitle />
      <UserSetupAccountForm />
    </>
  );
};

export default withAuthGuard(SetupAccount);

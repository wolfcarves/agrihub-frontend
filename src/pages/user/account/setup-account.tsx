import UserFormTitle from "@components/user/title/UserFormTitle";
import UserSetupAccountForm from "@components/user/forms/UserSetupAccountForm/UserSetupAccountForm";

const SetupAccount = () => {
  return (
    <>
      <UserFormTitle
        title="Complete your profile"
        size="3xl"
        step="2"
        className="mb-10"
      />
      <UserSetupAccountForm />
    </>
  );
};

export default SetupAccount;

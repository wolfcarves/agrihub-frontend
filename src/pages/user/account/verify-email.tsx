import UserVerifyEmailForm from "@components/user/account/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserVerifyTitle from "@components/user/account/title/UserVerifyTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const VerifyEmail = () => {
  return (
    <>
      <UserVerifyTitle />
      <UserVerifyEmailForm />
    </>
  );
};

export default withAuthGuard(VerifyEmail);

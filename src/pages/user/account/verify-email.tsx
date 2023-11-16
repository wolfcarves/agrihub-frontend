import UserVerifyEmailForm from "@components/user/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserVerifyTitle from "@components/user/title/UserVerifyTitle";
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

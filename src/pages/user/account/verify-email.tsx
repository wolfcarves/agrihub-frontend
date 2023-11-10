import UserVerifyEmailForm from "@components/user/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserFormTitle from "@components/user/title/UserFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const VerifyEmail = () => {
  return (
    <>
      <UserFormTitle
        title="Verify Your Email Address"
        center
        size="3xl"
        step="1"
        className="flex flex-col gap-14"
        description="Check your email & click the link to activate your account"
      />
      <UserVerifyEmailForm />
    </>
  );
};

export default withAuthGuard(VerifyEmail);

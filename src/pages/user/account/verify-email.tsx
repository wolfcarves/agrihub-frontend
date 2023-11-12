import UserVerifyEmailForm from "@components/user/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserFormTitle from "@components/user/title/UserLoginFormTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const VerifyEmail = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="font-semibold">Verify your email address</h1>
        <span>Check your email & click the link to activate your account</span>
      </div>
      <UserVerifyEmailForm />
    </>
  );
};

export default VerifyEmail;

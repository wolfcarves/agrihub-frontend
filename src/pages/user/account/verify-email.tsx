import UserVerifyEmailForm from "@components/user/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserFormTitle from "@components/user/title/UserFormTitle";

const VerifyEmail = () => {
  return (
    <>
      <UserFormTitle
        title="Verify Your Email Address"
        center
        size="2xl"
        step="1"
        className="flex flex-col gap-14"
      />
      <UserVerifyEmailForm />
    </>
  );
};

export default VerifyEmail;

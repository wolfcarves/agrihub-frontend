import UserResetPasswordForm from "@components/user/account/forms/UserResetPasswordForm/UserResetPasswordForm";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const ResetPassword = () => {
  return (
    <>
      <UserResetPasswordForm />
    </>
  );
};

export default withAuthGuard(ResetPassword, ["guest"]);

import UserVerifyEmailContainer from "@pages/components/user/UserContainers/UserVerifyEmailContainer";
import UserVerifyEmailForm from "@pages/components/user/UserForms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserFormTitle from "@pages/components/user/UserTitle/UserFormTitle";

import withAuthGuard from "@higher-order/withAuthGuard";

const VerifyEmail = () => {
  return (
    <UserVerifyEmailContainer>
      <UserFormTitle title="Verify Your Email Address" center size="2xl" />
      <UserVerifyEmailForm />
    </UserVerifyEmailContainer>
  );
};

export default VerifyEmail;

import UserVerifyEmailContainer from "@components/user/UserContainers/UserVerifyEmailContainer";
import UserVerifyEmailForm from "@components/user/UserForms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserVerifyEmailTitle from "@components/user/UserTitle/UserVerifyEmailTitle";

import withAuthGuard from "@higher-order/withAuthGuard";

const VerifyEmail = () => {
  return (
    <UserVerifyEmailContainer>
      <UserVerifyEmailTitle />
      <UserVerifyEmailForm />
    </UserVerifyEmailContainer>
  );
};

export default withAuthGuard(VerifyEmail);

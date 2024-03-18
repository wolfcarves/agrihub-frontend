import UserVerifyEmailForm from "@components/user/account/forms/UserVerifyEmailForm/UserVerifyEmailForm";
import UserVerifyTitle from "@components/user/account/title/UserVerifyTitle";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { GET_MY_PROFILE_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import AccountOutletContainer from "@components/user/account/container/AccountOutletContainer";

const VerifyEmail = () => {
  //Fetches auth data every 5 sec
  const queryClient = useQueryClient();

  useEffect(() => {
    const interval = setInterval(
      () => queryClient.invalidateQueries({ queryKey: [GET_MY_PROFILE_KEY()] }),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AccountOutletContainer>
      <UserVerifyTitle />
      <UserVerifyEmailForm />
    </AccountOutletContainer>
  );
};

export default withAuthGuard(VerifyEmail, ["member"]);

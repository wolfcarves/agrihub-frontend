import { useEffect, useState } from "react";
import useUserSendVerification from "@hooks/api/post/useUserSendVerification";
import Illustartion from "/verify-email-illust.svg";

import useAuth from "@hooks/useAuth";
import { Button } from "@components/ui/button";

const UserVerifyEmailForm = () => {
  const { data: authData } = useAuth();

  const STORAGE_KEY = authData?.email as string;

  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, "30");
  }

  const { mutateAsync: resendEmail, isLoading: isResendEmailLoading } =
    useUserSendVerification();

  const handleResendEmail = async () => {
    localStorage.setItem(STORAGE_KEY, "30");
    try {
      await resendEmail();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center py-10">
        <img src={Illustartion} width={280} />
      </div>

      <div className="flex flex-col w-full gap-5 h-max ">
        <Button type="submit" size={"lg"} onClick={handleResendEmail}>
          Resend Email
        </Button>

        <div className="flex flex-col text-center">
          <span>Send again</span>
          <span>After 1M seconds</span>
        </div>
      </div>
    </>
  );
};

export default UserVerifyEmailForm;

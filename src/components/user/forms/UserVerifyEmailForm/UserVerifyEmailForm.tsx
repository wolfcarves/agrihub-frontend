import { useEffect, useState } from "react";
import { Button, Typography } from "@components-ui";
import useUserSendVerification from "@hooks/api/post/useUserSendVerification";
import Illustartion from "/verify-email-illust.svg";

import useAuth from "@hooks/useAuth";

const UserVerifyEmailForm = () => {
  const { data: authData } = useAuth();

  const STORAGE_KEY = authData?.email as string;

  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, "30");
  }

  const time = localStorage.getItem(STORAGE_KEY);

  const [countdown, setCountdown] = useState<number>(Number(time));

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        STORAGE_KEY,
        String(Number(localStorage.getItem(STORAGE_KEY)) - 1)
      );
      setCountdown(Number(localStorage.getItem(STORAGE_KEY)));
    }, 1000);

    if (localStorage.getItem(STORAGE_KEY) === "0") clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, time]);

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
        <Button
          $title="Resend Email"
          $variant="primary"
          $size="lg"
          $disabled={localStorage.getItem(authData?.email as string) !== "0"}
          $isLoading={isResendEmailLoading}
          onClick={handleResendEmail}
        />

        {countdown !== 0 && (
          <>
            <Typography.Span $title={"Send again"} $align="center" />
            <Typography.Span
              $title={`after ${countdown} seconds`}
              $align="center"
            />
          </>
        )}
      </div>
    </>
  );
};

export default UserVerifyEmailForm;

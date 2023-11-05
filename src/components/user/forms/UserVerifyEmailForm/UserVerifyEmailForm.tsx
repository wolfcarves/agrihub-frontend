import { useEffect, useState } from "react";
import { Button, Typography } from "@components-ui";
import useUserSendVerification from "@hooks/api/post/useUserSendVerification";
import Illustartion from "@svg/verify-email-illust.svg";

const UserVerifyEmailForm = () => {
  if (!localStorage.getItem("timer")) {
    localStorage.setItem("timer", "30");
  }

  const time = localStorage.getItem("timer");

  const [countdown, setCountdown] = useState<number>(Number(time));

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        "timer",
        String(Number(localStorage.getItem("timer")) - 1)
      );
      setCountdown(Number(localStorage.getItem("timer")));
    }, 1000);

    if (localStorage.getItem("timer") === "0") clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, time]);

  const { mutateAsync: resendEmail, isLoading: isResendEmailLoading } =
    useUserSendVerification();

  const handleResendEmail = async () => {
    localStorage.setItem("timer", "30");
    try {
      await resendEmail();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <Typography.P
          $title="Check your email & click the link to activate your account"
          $align="center"
          $size="sm"
        />
      </div>

      <div className="flex justify-center py-10">
        <img src={Illustartion} width={280} />
      </div>

      <div className="flex flex-col w-full gap-5 h-max ">
        <Button
          $title="Resend Email"
          $variant="primary"
          $size="lg"
          $disabled={localStorage.getItem("timer") !== "0"}
          $isLoading={isResendEmailLoading}
          onClick={handleResendEmail}
        />

        {countdown !== 0 && (
          <>
            <Typography.Span
              $title={"Send again"}
              $align="center"
              $lineHeight={"0"}
              className="mt-5"
            />
            <Typography.Span
              $title={`after ${countdown} seconds`}
              $align="center"
              $lineHeight={"1rem"}
            />
          </>
        )}
      </div>
    </>
  );
};

export default UserVerifyEmailForm;

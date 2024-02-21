import useUserSendVerification from "@hooks/api/post/useUserSendVerification";
import Illustartion from "/verify-email-illust.svg";
import { Button } from "@components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";

const RESEND_MAX_COUNTDOWN = 30;

const UserVerifyEmailForm = () => {
  const { mutateAsync: resendEmail, isLoading: isResendEmailLoading } =
    useUserSendVerification();

  const { mutateAsync: deleteAuth, isLoading: isDeleteAuthLoading } =
    useDeleteAuthMutate();

  const [countDown, setCountdown] = useState(RESEND_MAX_COUNTDOWN);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResendEmail = async () => {
    try {
      await resendEmail();
      setCountdown(RESEND_MAX_COUNTDOWN);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  const handleDeleteAuth = async () => {
    try {
      await deleteAuth();
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <>
      <div className="flex justify-center py-10">
        <img src={Illustartion as unknown as string} width={280} />
      </div>

      {countDown !== 0 && (
        <div className="flex flex-col text-center pb-10">
          <h2>{countDown}</h2>
          <span>Resend after </span>
        </div>
      )}

      <div className="flex flex-col w-full gap-3 h-max ">
        <Button
          type="submit"
          className="w-full"
          isLoading={isResendEmailLoading || countDown !== 0}
          onClick={handleResendEmail}
        >
          Resend
        </Button>

        <Button
          className="w-full"
          type="submit"
          variant={"outline"}
          onClick={handleDeleteAuth}
          disabled={isDeleteAuthLoading}
        >
          Use other account instead
        </Button>
      </div>
    </>
  );
};

export default UserVerifyEmailForm;

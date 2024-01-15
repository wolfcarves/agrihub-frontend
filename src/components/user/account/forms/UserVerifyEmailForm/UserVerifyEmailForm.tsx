import useUserSendVerification from "@hooks/api/post/useUserSendVerification";
import Illustartion from "/verify-email-illust.svg";
import { Button } from "@components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";

const UserVerifyEmailForm = () => {
  const { mutateAsync: resendEmail, isLoading: isResendEmailLoading } =
    useUserSendVerification();

  const { mutateAsync: deleteAuth, isLoading: isDeleteAuthLoading } =
    useDeleteAuthMutate();

  const [countDown, setCountdown] = useState(3);

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
      setCountdown(3);
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

      <div className="flex flex-col w-full gap-5 h-max ">
        <Button
          type="submit"
          size={"lg"}
          disabled={isResendEmailLoading || countDown !== 0}
          onClick={handleResendEmail}
        >
          Resend Email
        </Button>

        <Button
          type="submit"
          variant={"outline"}
          size={"lg"}
          onClick={handleDeleteAuth}
          disabled={isDeleteAuthLoading}
        >
          Logout
        </Button>

        {countDown !== 0 && (
          <div className="flex flex-col text-center">
            <span>Send again</span>
            <span>After {countDown} seconds</span>
          </div>
        )}
      </div>
    </>
  );
};

export default UserVerifyEmailForm;

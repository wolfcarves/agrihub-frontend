import { Button } from "@components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@components/ui/input-otp";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import useUserSendOtpMutation from "@hooks/api/post/useUserSendOtpMutation";
import userUserVerifyOtpMutation from "@hooks/api/post/userUserVerifyOtpMutation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const RESEND_MAX_COUNTDOWN = 60;

const VerifyOtp = () => {
  const [countDown, setCountdown] = useState(RESEND_MAX_COUNTDOWN);
  const [code, setCode] = useState<number>();
  const { mutateAsync: sendOtp, isLoading: isSendOtpLoading } =
    useUserSendOtpMutation();
  const { mutateAsync: verifyOtp, isLoading: isVerifyOtpLoading } =
    userUserVerifyOtpMutation();
  const { mutateAsync: deleteAuth, isLoading: isDeleteAuthLoading } =
    useDeleteAuthMutate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendOtp = async () => {
    try {
      const res = await sendOtp();

      console.log(res);
      setCountdown(RESEND_MAX_COUNTDOWN);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (!code || code?.toString().length < 6) {
        toast.error("Please complete the code");
        return;
      }

      const res = await verifyOtp({
        code
      });

      console.log(res);
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
    <div className="flex flex-col items-center justify-center pt-14">
      <div className="text-center mb-10">
        <h1 className="font-poppins-thin">OTP Verification</h1>
        <p>We just sent one time password to your phone number</p>
      </div>

      <InputOTP
        maxLength={6}
        onChange={value => setCode(Number(value))}
        render={({ slots }) => (
          <>
            <InputOTPGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}{" "}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {slots.slice(3).map((slot, index) => (
                <InputOTPSlot key={index + 3} {...slot} />
              ))}
            </InputOTPGroup>
          </>
        )}
      />

      <div className="py-8">{countDown !== 0 && <h4>{countDown}</h4>}</div>

      <div className="w-full space-y-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleSendOtp}
          isLoading={isSendOtpLoading}
          disabled={countDown !== 0 || isVerifyOtpLoading}
        >
          Resend
        </Button>

        <Button
          className="w-full"
          onClick={handleVerifyOtp}
          isLoading={isVerifyOtpLoading}
          disabled={isSendOtpLoading}
        >
          Submit
        </Button>

        <Button
          variant="outline"
          className="w-full mt-10"
          onClick={handleDeleteAuth}
          isLoading={isDeleteAuthLoading}
        >
          Use another phone number instead
        </Button>
      </div>
    </div>
  );
};

export default withAuthGuard(VerifyOtp, ["member"]);

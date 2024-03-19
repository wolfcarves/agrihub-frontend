import { Button } from "@components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@components/ui/input-otp";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useForgotPasswordByOTPMutation from "@hooks/api/post/useForgotPasswordByOTPMutation";
import useUserVerifyResetPasswordOtpMutation from "@hooks/api/post/useUserVerifyResetPasswordOtpMutation";
import Loader from "@icons/Loader";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const RESEND_MAX_COUNTDOWN = 60;

const VerifyPasswordOTP = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [countDown, setCountdown] = useState(RESEND_MAX_COUNTDOWN);
  const [code, setCode] = useState<number>();
  const { mutateAsync: sendOTP, isLoading: isSendOTPLoading } =
    useForgotPasswordByOTPMutation();
  const { mutateAsync: verifyOtp, isLoading: isVerifyOtpLoading } =
    useUserVerifyResetPasswordOtpMutation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResendOTP = async () => {
    try {
      const res = await sendOTP(searchParams.get("p") ?? "");
      toast.success(res.message);
      setCountdown(RESEND_MAX_COUNTDOWN);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const res = await verifyOtp(code ?? 0);
      navigate(`/account/reset-password/${res.token}`, { replace: true });
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  //Auto submit when code is completed
  useEffect(() => {
    const isCodeComplete = code?.toString().length;

    if (isCodeComplete === 6) {
      handleVerifyOTP();
    }
  }, [code]);

  return (
    <>
      {isVerifyOtpLoading && <Loader />}

      <div className="flex flex-col items-center justify-center pt-14 max-w-[33rem] mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-merri-black">OTP Verification</h1>
          <p>We just sent one time password to your phone number.</p>
          <p>
            We need to verify first if you are the owner of the account before
            proceeding to password reset
          </p>
        </div>

        <InputOTP
          maxLength={6}
          onChange={value => setCode(Number(value))}
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 3).map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} />
                ))}
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

        <div className="flex gap-1.5 w-full">
          <div className="w-full">
            <Button
              className="w-full py-6"
              size="lg"
              onClick={handleResendOTP}
              disabled={countDown !== 0 || isSendOTPLoading}
              isLoading={isSendOTPLoading}
            >
              Resend
            </Button>
          </div>

          <div className="w-full">
            <Link to="../../">
              <Button variant="outline" className="w-full py-6" size="lg">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthGuard(VerifyPasswordOTP, ["guest"]);

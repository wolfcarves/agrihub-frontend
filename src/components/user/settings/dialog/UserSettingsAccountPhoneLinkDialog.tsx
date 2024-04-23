import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import {
  changePhoneSchema,
  ChangePhoneSchema,
  ConfirmPasswordSchema,
  confirmPasswordSchema
} from "../form/form/UserSettingsAccountForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSettingsConfirmPasswordMutation from "@hooks/api/post/useUserSettingsConfirmPasswordMutation";
import { toast } from "sonner";
import LoadingSpinner from "@icons/LoadingSpinner";
import useAuth from "@hooks/useAuth";
import useUserSettingsChangePhoneMutation from "@hooks/api/post/useUserSettingsChangePhoneMutation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@components/ui/input-otp";
import useUserSettingsChangePhoneVerifyOtpMutation from "@hooks/api/post/useUserSettingsChangePhoneVerifyOtpMutation";

interface UserSettingsAccountPhoneLinkDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const UserSettingsAccountPhoneLinkDialog = ({
  open,
  onOpenChange
}: UserSettingsAccountPhoneLinkDialogProps) => {
  const { data } = useAuth()

  const hasPhone = data?.contact_number

  const confirmPasswordForm = useForm<ConfirmPasswordSchema>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      password: ""
    }
  });

  const changePhoneForm = useForm<ChangePhoneSchema>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(changePhoneSchema),
    defaultValues: {
      phone: ""
    }
  });

  const [phone, setPhone] = useState<string>("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [isPhoneEntered, setIsPhoneEntered] = useState<boolean>(false);
  const [code, setCode] = useState<number>(0);

  const { mutateAsync: confirmPassword, isLoading: isConfirmPasswordLoading } =
    useUserSettingsConfirmPasswordMutation();

  const { mutateAsync: changePhone, isLoading: isChangePhoneLoading } =
    useUserSettingsChangePhoneMutation();

  const { mutateAsync: verifyOtp, isLoading: isVerifyOtpLoading } =
    useUserSettingsChangePhoneVerifyOtpMutation();

  const handleConfirmPasswordForm = async (data: ConfirmPasswordSchema) => {
    try {
      await confirmPassword(data.password);
      setIsPasswordCorrect(true);
    } catch (err: any) {
      if (err.body.message === "Email Already Exists") {
        toast.error("Email is already linked to another account");
        return;
      }

      toast.error(err.body.message);
    }
  };

  const handleSubmitForm = async (data: ChangePhoneSchema) => {
    try {
      await changePhone(data?.phone);
      setPhone(data?.phone)
      setIsPhoneEntered(true)

      toast.success(`Check the otp for ${data.phone}`);
      setIsPasswordCorrect(false);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  const handleResend = async () => {
    try {
      await changePhone(phone);
      toast.success(`Check the otp for ${phone}`);

    } catch (err: any) {
      toast.error(err.body.message);

    }
  };

  const handleVeriyOtp = async () => {
    try {
      const { message } = await verifyOtp(code)
      toast.success(message)
      onOpenChange && onOpenChange(false);
    } catch (err: any) {
      toast.error(err)
    }
  }



  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {isPhoneEntered ? <>
        <DialogContent>
          <DialogHeader className="text-md sm:text-lg font-poppins-semibold text-start border-b border-border pb-2">
            Enter otp
          </DialogHeader>

          <DialogDescription>
            Enter the otp we just sent to your replacing phone number.
          </DialogDescription>

          <InputOTP
            className="mx-auto w-max scale-110"
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

          <div className="flex flex-col gap-2 mt-10">
            <Button className="w-full" variant="outline" onClick={handleResend}>Resend</Button>
            <Button className="w-full" onClick={handleVeriyOtp} disabled={isVerifyOtpLoading} isLoading={isVerifyOtpLoading}>Confirm</Button>
          </div>
        </DialogContent>
      </> : isConfirmPasswordLoading ? (
        <DialogContent className="flex">
          <LoadingSpinner className="text-primary m-auto text-xl" />
        </DialogContent>
      ) : !isPasswordCorrect ? (
        <DialogContent>
          <DialogHeader className="text-md sm:text-lg font-poppins-semibold text-start border-b border-border pb-2">
            Please enter your password first
          </DialogHeader>

          <DialogDescription>
            Enter your password below, We need to do this step to verify if you
            are the real owner of this account.
          </DialogDescription>

          <form
            onSubmit={confirmPasswordForm.handleSubmit(
              handleConfirmPasswordForm
            )}
            className="sm:max-w-[600px] rounded-2xl"
          >
            <div className="space-y-1.5">
              <span className="text-foreground/80 font-poppins-medium text-sm">
                Type your password here.
              </span>

              <Input
                type="password"
                placeholder="***********"
                $errorMessage={
                  confirmPasswordForm.formState?.errors.password?.message
                }
                {...confirmPasswordForm.register("password")}
              />
            </div>

            <div className="flex justify-end gap-1.5 mt-3">
              <Button
                type="button"
                className="px-6 shadow-sm"
                variant="outline"
                onClick={() => {
                  onOpenChange && onOpenChange(false);
                }}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="px-6 shadow-sm"
                disabled={
                  !confirmPasswordForm.formState.isDirty ||
                  isConfirmPasswordLoading
                }
                isLoading={isConfirmPasswordLoading}
              >
                Confirm
              </Button>
            </div>
          </form>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogHeader className="text-md sm:text-lg font-poppins-semibold text-start border-b border-border pb-2">
            Enter phone number
          </DialogHeader>

          <DialogDescription>{hasPhone ? "Enter the replacing phone number" : "Enter phone number you want to link"}</DialogDescription>

          <form
            onSubmit={changePhoneForm.handleSubmit(handleSubmitForm)}
            className="sm:max-w-[600px] rounded-2xl"
          >
            <div className="space-y-1.5">
              <span className="text-foreground/80 font-poppins-medium text-sm">
                Type your new phone number here.
              </span>

              <Input
                placeholder="Phone"
                {...changePhoneForm.register("phone")}
                $errorMessage={changePhoneForm.formState?.errors.phone?.message}
              />
            </div>

            <div className="flex justify-end gap-1.5 mt-3">
              <Button
                type="button"
                className="px-6 shadow-sm"
                variant="outline"
                onClick={() => onOpenChange && onOpenChange(false)}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="px-6 shadow-sm"
                disabled={
                  !changePhoneForm.formState.isDirty || isChangePhoneLoading
                }
                isLoading={isChangePhoneLoading}
              >
                Confirm
              </Button>
            </div>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default UserSettingsAccountPhoneLinkDialog;

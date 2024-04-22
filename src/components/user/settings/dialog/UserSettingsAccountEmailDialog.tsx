import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import {
  changeEmailSchema,
  ChangeEmailSchema,
  ConfirmPasswordSchema,
  confirmPasswordSchema
} from "../form/form/UserSettingsAccountForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSettingsConfirmPasswordMutation from "@hooks/api/post/useUserSettingsConfirmPasswordMutation";
import { toast } from "sonner";
import LoadingSpinner from "@icons/LoadingSpinner";
import useUserSettingsChangeEmailMutation from "@hooks/api/post/useUserSettingsChangeEmailMutation";
import useAuth from "@hooks/useAuth";

interface UserSettingsAccountEmailDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const UserSettingsAccountEmailDialog = ({
  open,
  onOpenChange
}: UserSettingsAccountEmailDialogProps) => {
  const { data } = useAuth()

  const hasEmail = data?.email

  const confirmPasswordForm = useForm<ConfirmPasswordSchema>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      password: ""
    }
  });

  const changeEmailForm = useForm<ChangeEmailSchema>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      email: ""
    }
  });

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  const { mutateAsync: confirmPassword, isLoading: isConfirmPasswordLoading } =
    useUserSettingsConfirmPasswordMutation();

  const { mutateAsync: changeEmail, isLoading: isChangeEmailLoading } =
    useUserSettingsChangeEmailMutation();

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

  const handleChangeEmailForm = async (data: ChangeEmailSchema) => {
    try {
      await changeEmail(data.email);

      toast.success(`Check the inbox for ${data.email}`);
      onOpenChange && onOpenChange(false);
      setIsPasswordCorrect(false);
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {isConfirmPasswordLoading ? (
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
            Enter email address
          </DialogHeader>

          <DialogDescription>{hasEmail ? "Enter the replacing email" : "Enter email you want to link"}</DialogDescription>

          <form
            onSubmit={changeEmailForm.handleSubmit(handleChangeEmailForm)}
            className="sm:max-w-[600px] rounded-2xl"
          >
            <div className="space-y-1.5">
              <span className="text-foreground/80 font-poppins-medium text-sm">
                Type your new email here.
              </span>

              <Input
                placeholder="Email address"
                {...changeEmailForm.register("email")}
                $errorMessage={changeEmailForm.formState?.errors.email?.message}
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
                  !changeEmailForm.formState.isDirty || isChangeEmailLoading
                }
                isLoading={isChangeEmailLoading}
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

export default UserSettingsAccountEmailDialog;

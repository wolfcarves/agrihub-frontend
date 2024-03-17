import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthenticationSchema, authenticationSchema } from "./schema";
import { Button } from "@components/ui/button";
import SettingsField from "@components/user/settings/fields/SettingsField";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useForgotPasswordMutation from "@hooks/api/post/useForgotPasswordMutation";
import SettingsRequestResetPasswordDialog from "../../dialog/SettingsRequestResetPasswordDialog";
import useAuth from "@hooks/useAuth";
import { toast } from "sonner";

const UserSettingsAuthenticationForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const user = useAuth();

  const form = useForm<AuthenticationSchema>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(authenticationSchema)
  });

  const {
    mutateAsync: sendEmail,
    isLoading: isSendEmailLoading,
    isSuccess: isSendEmailSuccess
  } = useForgotPasswordMutation();

  const handleSubmitForm = async () => {
    try {
      await sendEmail(user?.data?.email);
      toast.success("Password request sent to your email");
    } catch (error) {}
  };

  return (
    <>
      <div
        className="py-10 space-y-10"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <SettingsField
          hasForm={false}
          label="Change password"
          description="Request to change your current password"
          editable={false}
          buttonComponent={
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={e => {
                e.preventDefault();
                setIsDialogOpen(prev => !prev);
              }}
            >
              Change
            </Button>
          }
        />

        <SettingsRequestResetPasswordDialog
          isLoading={isSendEmailLoading}
          disabled={isSendEmailSuccess}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmitClick={handleSubmitForm}
        />
      </div>
    </>
  );
};

export default withAuthGuard(UserSettingsAuthenticationForm, [
  "member",
  "admin",
  "asst_admin",
  "farm_head",
  "farmer",
  "subfarm_head"
]);

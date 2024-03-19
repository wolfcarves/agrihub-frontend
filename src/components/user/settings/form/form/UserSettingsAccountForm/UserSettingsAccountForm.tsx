import React, { useState } from "react";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";
import UserSettingsAccountEmailDialog from "@components/user/settings/dialog/UserSettingsAccountEmailDialog";
import SettingsField from "@components/user/settings/fields/SettingsField";
import { Form } from "@components/ui/form";
import { useForm } from "react-hook-form";

const UserSettingsAccountForm = () => {
  const [isEmailDiaglogOpen, setIsEmailDialogOpen] = useState<boolean>(false);
  const user = useAuth();
  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const handleSubmitForm = () => {};

  return (
    <Form {...form}>
      <form
        className="py-10 space-y-10"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <SettingsField
          label="Email address"
          defaultValue={user?.data?.email || "No email linked"}
          editable={false}
          hasForm={false}
          buttonComponent={
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-5"
              onClick={() => setIsEmailDialogOpen(prev => !prev)}
            >
              Change
            </Button>
          }
          // errMessage={fieldState.error?.message}
          // {...field}
        />

        <hr />

        <SettingsField
          label="Phone number"
          defaultValue={
            String(user?.data?.contact_number) || "No phone number linked"
          }
          editable={false}
          hasForm={false}
          buttonComponent={
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-5"
              onClick={e => e.preventDefault()}
            >
              Change
            </Button>
          }
          // errMessage={fieldState.error?.message}
          // {...field}
        />

        <hr />

        <h5 className="font-merri-black text-destructive">Danger Zone</h5>

        <SettingsField
          label="Account Deletion"
          description="Once you delete your account, there is no going back. Please be
            certain"
          hasForm={false}
          editable={false}
          buttonComponent={
            <Button
              variant="destructive"
              size="sm"
              className="rounded-full px-5"
              onClick={e => e.preventDefault()}
            >
              Delete
            </Button>
          }
          // errMessage={fieldState.error?.message}
          // {...field}
        />

        <UserSettingsAccountEmailDialog
          open={isEmailDiaglogOpen}
          onOpenChange={setIsEmailDialogOpen}
        />
      </form>
    </Form>
  );
};

export default UserSettingsAccountForm;

import React, { useState } from "react";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";
import UserSettingsAccountEmailDialog from "@components/user/settings/dialog/UserSettingsAccountEmailDialog";

const UserSettingsAccountForm = () => {
  const [isEmailDiaglogOpen, setIsEmailDialogOpen] = useState<boolean>(false);
  const user = useAuth();

  return (
    <>
      <div className="max-w-[50rem]">
        <div className="mt-10 space-y-2">
          <h4 className="text-sm font-poppins-medium uppercase text-foreground/70">
            Account Preferences
          </h4>
          <hr />
        </div>

        <div className="py-5">
          <div className="flex justify-between py-3">
            <div>
              <h5 className="font-poppins-medium">Email address</h5>
              <span className="text-sm">{user?.data?.email}</span>
            </div>

            <Button
              variant="outline"
              className="rounded-full w-24 font-poppins-bold"
              size="sm"
              onClick={() => setIsEmailDialogOpen(prev => !prev)}
            >
              Change
            </Button>
          </div>
        </div>

        <div className="mt-10 space-y-2">
          <h4 className="text-sm font-poppins-medium uppercase text-destructive">
            Danger Zone
          </h4>
          <hr />
        </div>

        <div className="py-5">
          <div className="flex justify-between py-3">
            <div>
              <h5 className="font-poppins-medium text-destructive">
                Delete account
              </h5>
              <span className="text-sm">
                Once you delete your account, there is no going back. Please be
                certain
              </span>
            </div>

            <Button
              variant="destructive"
              className="rounded-full w-24 font-poppins-bold"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <UserSettingsAccountEmailDialog
        open={isEmailDiaglogOpen}
        onOpenChange={setIsEmailDialogOpen}
      />
    </>
  );
};

export default UserSettingsAccountForm;

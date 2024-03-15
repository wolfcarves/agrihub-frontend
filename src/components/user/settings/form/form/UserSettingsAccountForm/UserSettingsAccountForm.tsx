import React, { useState } from "react";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";
import UserSettingsAccountEmailDialog from "@components/user/settings/dialog/UserSettingsAccountEmailDialog";
import { LuPencil } from "react-icons/lu";

const UserSettingsAccountForm = () => {
  const [isEmailDiaglogOpen, setIsEmailDialogOpen] = useState<boolean>(false);
  const user = useAuth();

  return (
    <div className="py-10 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-merri-black">Email address</h5>
          <h5 className="font-poppins-medium mt-3 text-foreground/60">
            rodel.crisosto7@gmail.com
          </h5>
        </div>

        <div>
          <span className="cursor-pointer opacity-70 hover:opacity-100">
            <LuPencil size={18} />
          </span>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <div>
          <h5 className="font-merri-black text-destructive">Danger Zone</h5>
          <h5 className="font-poppins-medium mt-3 text-foreground/60">
            Account deletion <br />
            <span className="text-sm">
              Once you delete your account, there is no going back. Please be
              certain
            </span>
          </h5>
        </div>

        <Button variant="destructive" size="sm" className="rounded-full px-5">
          Delete
        </Button>
      </div>
    </div>
  );

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

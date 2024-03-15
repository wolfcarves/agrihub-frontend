import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { LuPencil } from "react-icons/lu";
import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";

const UserAccountSettings = () => {
  return (
    <>
      <UserSettingsTitle title="Account Settings" />

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
    </>
  );
};

export default withAuthGuard(UserAccountSettings, [
  "member",
  "admin",
  "asst_admin",
  "farm_head",
  "farmer",
  "subfarm_head"
]);

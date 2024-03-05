import React from "react";
import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";
import UserSettingsAccountForm from "@components/user/settings/form/form/UserSettingsAccountForm/UserSettingsAccountForm";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const UserAccountSettings = () => {
  return (
    <>
      <UserSettingsTitle title="Account Settings" />
      <UserSettingsAccountForm />
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

import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";
import UserSettingsAccountForm from "@components/user/settings/form/form/UserSettingsAccountForm/UserSettingsAccountForm";

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

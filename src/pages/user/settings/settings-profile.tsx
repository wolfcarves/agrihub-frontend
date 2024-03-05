import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import UserSettingsProfileTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";
import UserSettingsProfileForm from "@components/user/settings/form/form/UserSettingsProfileForm/UserSettingsProfileForm";

const UserProfileSettings = () => {
  return (
    <>
      <UserSettingsProfileTitle title="Customize Profile" />
      <UserSettingsProfileForm />
    </>
  );
};

export default withAuthGuard(UserProfileSettings, [
  "member",
  "admin",
  "asst_admin",
  "farm_head",
  "farmer",
  "subfarm_head"
]);

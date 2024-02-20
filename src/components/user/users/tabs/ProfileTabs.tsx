import React from "react";
import { UserTabs } from "@components/ui/custom";

const options = ["Posts", "Saved"] as const;

const ProfileTabs = () => {
  return <UserTabs options={options} />;
};

export default ProfileTabs;

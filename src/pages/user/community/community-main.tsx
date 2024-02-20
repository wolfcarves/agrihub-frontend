import React from "react";
import { Outlet } from "react-router-dom";
import CommunityTabs from "../../../components/user/community/community-tabs/community-tabs";
import CommunityDetails from "../../../components/user/community/community-details/community-details";
const CommunityMain = () => {
  return (
    <div className="w-full">
      <CommunityDetails />
      <CommunityTabs />
      <Outlet />
    </div>
  );
};

export default CommunityMain;

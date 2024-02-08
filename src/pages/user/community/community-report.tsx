import React from "react";
import { Outlet } from "react-router-dom";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";

const CommunityReport = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default withAuthGuard(CommunityReport, ["farm_head"]);

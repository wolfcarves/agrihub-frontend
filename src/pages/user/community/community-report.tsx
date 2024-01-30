import React from "react";
import { Outlet } from "react-router-dom";

const CommunityReport = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default CommunityReport;

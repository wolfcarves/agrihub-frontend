import React from "react";
import { Outlet } from "react-router-dom";

const CommunityRequest = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default CommunityRequest;

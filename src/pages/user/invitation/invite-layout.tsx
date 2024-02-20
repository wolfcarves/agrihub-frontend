import React from "react";
import { Outlet } from "react-router-dom";

const InviteLayout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div className="col-span-12 overflow-y-auto scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};

export default InviteLayout;

import React from "react";
import { cn } from "../../../lib/utils";

const AdminSidebar = () => {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 md:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Sidebar
            </h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebar;

import type { ReactNode } from "react";

const SidebarContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full max-w-[200px] py-10">
    <div className="relative overflow-hidden h-full ">{children}</div>
  </div>
);

const Sidebar = ({ children }: { children: ReactNode }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;

import type { ReactNode } from "react";

const UserSidebarContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-20 border-r h-[calc(100vh-3.5rem)] w-full max-w-[220px] py-10 px-2">
    <div className="relative overflow-hidden h-full">{children}</div>
  </div>
);

const UserSidebar = ({ children }: { children: ReactNode }) => {
  return <UserSidebarContainer>{children}</UserSidebarContainer>;
};

export default UserSidebar;

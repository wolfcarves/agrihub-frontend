import { Outlet } from "react-router-dom";
import { UserHeader } from "@components/ui/custom";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col min-h-[100dvh]">
      <UserHeader />
      <Outlet />
      {/* Example Footer */}
      <div className="w-full min-h-[35rem] bg-neutral-900" />
    </div>
  );
};

export default MainLayout;

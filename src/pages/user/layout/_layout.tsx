import { Outlet } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/sidebar/user-sidebar";
import { UserHeader } from "@components/ui/custom";
import { UsePagination } from "@providers/PaginationProvider";
const UserLayout = () => {
  const pagination = UsePagination();
  return (
    <div className="flex flex-col max-h-screen h-screen">
      <Sheet key={"sidebar"}>
        <UserHeader />
        <Sidebar />
        <Outlet />
      </Sheet>
    </div>
  );
};

export default UserLayout;

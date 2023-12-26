import { Outlet } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/Sidebar/Sidebar";
import Topbar from "@components/ui/custom/Topbar/Topbar";
import SidebarRight from "@components/user/questions/right-sidebar/Sidebar";
import SidebarLeft from "@components/user/questions/left-sidebar/Sidebar";
import { UsePagination } from "@providers/PaginationProvider";
const UserLayout = () => {
  const pagination = UsePagination();
  return (
    <div className="flex flex-col max-h-screen h-screen">
      <Sheet key={"sidebar"}>
        <Topbar />
        <Sidebar />
        <Outlet/>
      </Sheet>
    </div>
  );
};

export default UserLayout;

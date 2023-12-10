import { Outlet } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/Sidebar/Sidebar";
import Topbar from "@components/ui/custom/Topbar/Topbar";
import Sidebars from "@components/user/community/sidebar/Sidebar";
const CommunityLayout = () => {
  return (
    <div className="flex flex-col max-h-screen h-screen">
      <Sheet key={"sidebar"}>
        <Topbar />
        <Sidebar />
        <div className="grid grid-cols-12 grid-rows-1  overflow-y-auto">
          <div className="col-span-2 lg:flex hidden my-6 pt-2 flex-col items-end pr-3 border-r border-border">
            <Sidebars />
          </div>

          <div className="lg:col-span-10 col-span-12 overflow-y-auto py-3 scroll-smooth">
            <Outlet />
          </div>
        </div>
      </Sheet>
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default CommunityLayout;

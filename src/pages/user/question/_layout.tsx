import { Outlet } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/Sidebar/Sidebar";
import Topbar from "@components/ui/custom/Topbar/Topbar";
import SidebarRight from "@components/user/questions/right-sidebar/Sidebar";
import SidebarLeft from "@components/user/questions/left-sidebar/Sidebar";
const QuestionLayout = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <Sheet key={"sidebar"}>
        <Topbar />
        <Sidebar />
        <div className="grid grid-cols-12 grid-rows-1  overflow-y-auto">
          <div className="col-span-2 lg:flex hidden flex-col pt-6">
            <SidebarLeft />
          </div>
          <div className="col-span-1 lg:block hidden"></div>
          <div className="lg:col-span-6 col-span-12 overflow-y-auto py-8 px-2 scroll-smooth">
            <Outlet />
          </div>
          <div className="col-span-1 lg:block hidden"></div>
          <div className="col-span-2">
            <SidebarRight />
          </div>
        </div>
      </Sheet>
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default QuestionLayout;

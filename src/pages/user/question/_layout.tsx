import { Outlet } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/Sidebar/Sidebar";
import Topbar from "@components/ui/custom/Topbar/Topbar";

const QuestionLayout = () => {
  return (
    <>
      <Sheet key={"sidebar"}>
        <Topbar />
        <Sidebar />
        <Outlet />
      </Sheet>
    </>
  );
};

export default QuestionLayout;

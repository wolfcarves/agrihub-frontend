import { Outlet } from "react-router-dom";
import Footer from "../../../components/ui/custom/footer/user-footer";
const CalendarLayout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div className="lg:col-span-12  col-span-12 overflow-y-auto scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};

export default CalendarLayout;

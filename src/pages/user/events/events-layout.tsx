import { Outlet } from "react-router-dom";
import { UserResponsiveContainer } from "@components/ui/custom";

const EventsLayout = () => {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
};

export default EventsLayout;

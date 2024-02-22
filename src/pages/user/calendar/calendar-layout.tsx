import { UserResponsiveContainer } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const CalendarLayout = () => {
  return (
    <UserResponsiveContainer className="px-1 ">
      <Outlet />
    </UserResponsiveContainer>
  );
};

export default CalendarLayout;

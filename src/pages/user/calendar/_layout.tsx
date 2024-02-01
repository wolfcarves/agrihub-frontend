import { UserResponsiveContainer } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const CalendarLayout = () => {
  return (
    <UserResponsiveContainer>
      <Outlet />
    </UserResponsiveContainer>
  );
};

export default CalendarLayout;

import { UserResponsiveContainer } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const EventsLayout = () => {
  return (
    <UserResponsiveContainer className="container flex flex-col">
      <Outlet />
    </UserResponsiveContainer>
  );
};

export default EventsLayout;

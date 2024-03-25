import { UserResponsiveContainer } from "@components/ui/custom";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const CalendarLayout = () => {
  return (
    <>
      <Helmet>
        <title>Planting Calendar | AgriHub</title>
      </Helmet>

      <UserResponsiveContainer className="px-1 ">
        <Outlet />
      </UserResponsiveContainer>
    </>
  );
};

export default CalendarLayout;

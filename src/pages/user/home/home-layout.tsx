import { UserResponsiveContainer } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default UserHomeLayout;

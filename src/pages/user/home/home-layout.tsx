import { UserFooter, UserHeader } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
      {/* Paayos nito boi nagooverlap dahil yan sa absolute ng outlet*/}
      {/* <UserFooter /> */}
    </>
  );
};

export default UserHomeLayout;

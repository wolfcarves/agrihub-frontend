import { UserFooter, UserHeader } from "@components/ui/custom";
import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  return (
    <>
      <UserHeader />
      {/* Paayos nito boi nagooverlap dahil yan sa absolute ng outlet or nung home*/}
      <Outlet />
      {/* <UserFooter /> */}
    </>
  );
};

export default UserHomeLayout;

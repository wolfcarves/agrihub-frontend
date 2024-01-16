import { Outlet } from "react-router-dom";

const UserHomeLayout = () => {
  return (
    <>
      {/* Paayos nito boi nagooverlap dahil yan sa absolute ng outlet or nung home*/}
      <Outlet />
      {/* <UserFooter /> */}
    </>
  );
};

export default UserHomeLayout;

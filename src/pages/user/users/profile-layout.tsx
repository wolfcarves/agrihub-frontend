import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
  return (
    <>
      <div className="container scroll-smooth">
        <Outlet />
      </div>
    </>
  );
};

export default UserProfileLayout;

import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default UserProfileLayout;

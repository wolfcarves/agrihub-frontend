import { Outlet } from "react-router-dom";
import { UsePagination } from "@providers/PaginationProvider";

const UserProfileLayout = () => {
  return (
    <div className="container ">
      <Outlet />
    </div>
  );
};

export default UserProfileLayout;

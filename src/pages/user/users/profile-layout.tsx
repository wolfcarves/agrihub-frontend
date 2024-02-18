import { Outlet } from "react-router-dom";
import { UsePagination } from "@providers/PaginationProvider";

const UserProfileLayout = () => {
  return (
    <div className="container py-5">
      <Outlet />
    </div>
  );
};

export default UserProfileLayout;

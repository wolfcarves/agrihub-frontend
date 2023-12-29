import { Outlet } from "react-router-dom";
import { UsePagination } from "@providers/PaginationProvider";
const UserProfileLayout = () => {
  const pagination = UsePagination();
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div
        className="col-span-12 overflow-y-auto py-8 px-2 lg:mx-[5rem] mx-2 scroll-smooth"
        ref={pagination?.topRef}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfileLayout;

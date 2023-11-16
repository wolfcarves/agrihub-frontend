import AdminLayoutContainer from "@components/admin/container/AdminLayoutContainer";
import { ThemeToggler } from "@components/ui/theme-toggler";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@components/admin/sidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <AdminLayoutContainer>
      {/* <AdminSidebar /> */}
      <Outlet />
      <div className="m-2">
        <ThemeToggler />
      </div>
    </AdminLayoutContainer>
  );
};

export default AdminLayout;

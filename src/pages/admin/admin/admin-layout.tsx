import AdminLayoutContainer from "@components/admin/layout/container/AdminLayoutContainer";
import { ThemeToggler } from "@components/ui/theme-toggler";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@components/admin/layout/sidebar/AdminSidebar";
import AdminTopbar from "@components/admin/layout/topbar/AdminTopbar";

const AdminLayout = () => {
  return (
    <AdminLayoutContainer>
      <AdminSidebar />
      <div className="flex flex-col w-full overflow-y-auto custom-scroll">
        <AdminTopbar />
        <Outlet />
      </div>
    </AdminLayoutContainer>
  );
};

export default AdminLayout;

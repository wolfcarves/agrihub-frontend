import AdminLayoutContainer from "@components/admin/layout/container/AdminLayoutContainer";
import { ThemeToggler } from "@components/ui/theme-toggler";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@components/admin/layout/sidebar/admin-sidebar";
import AdminTopbar from "@components/admin/layout/topbar/admin-topbar";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";

const AdminLayout = () => {
  return (
    <AdminLayoutContainer>
      <AdminSidebar />
      <div className="flex flex-col w-full">
        <AdminTopbar />
        <Outlet />
      </div>
    </AdminLayoutContainer>
  );
};

export default withAuthGuard(AdminLayout, ["admin"]);

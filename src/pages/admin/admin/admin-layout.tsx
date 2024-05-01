import AdminLayoutContainer from "@components/admin/layout/container/AdminLayoutContainer";
import { Outlet } from "react-router-dom";
import AdminTopbar from "@components/admin/layout/topbar/admin-topbar";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import AdminSidenav from "../../../components/admin/layout/sidebar/admin-sidenav";
import { Helmet } from "react-helmet-async";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";

const AdminLayout = () => {
  const { data: aboutDetails } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;
  return (
    <>
      <Helmet>
        <title>Admin - AgriHub</title>
        <link
          rel="icon"
          type="image/png"
          href={S3_BASE_URL + aboutDetails?.agrihub_user_logo}
          sizes="16x16"
        />
      </Helmet>

      <AdminLayoutContainer>
        <AdminSidenav />
        <div className="flex flex-col w-full">
          <AdminTopbar />
          <Outlet />
        </div>
      </AdminLayoutContainer>
    </>
  );
};

export default withAuthGuard(AdminLayout, ["admin", "asst_admin"]);

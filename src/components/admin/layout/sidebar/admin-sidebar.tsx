import React from "react";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";
import AgrihubLogo from "../../../../icons/fullLogo.svg";
import AdminSidebarNavLink from "./admin-sidebar-navlink";
import { GiFarmer } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";
import { TbPresentationAnalytics } from "react-icons/tb";
import { useSelector } from "../../../../redux/store";

const AdminSidebar = () => {
  const sidebarState = useSelector(state => state.sidebar.isOpen);

  return (
    <nav
      className={cn(
        `relative hidden duration-500 h-screen border-r pt-1 md:block w-72 bg-[#ffffff]`
      )}
    >
      <Link to={"/admin"} className="flex flex-row gap-3 text-start px-6 pt-5">
        <div className="w-full flex justify-center">
          <img className="w-[76%]" src={AgrihubLogo as unknown as string} />
        </div>
      </Link>
      <hr className="mt-8  mb-6 mx-4" />
      <div className="">
        <AdminSidebarNavLink
          title="Dashboard"
          logo={<RiDashboardLine size={20} />}
          to={`/admin/dashboard`}
        />
        <AdminSidebarNavLink
          title="Analytics"
          logo={<TbPresentationAnalytics size={20} />}
          to={`/admin/analytics`}
        />
        <h6 className="font-poppins-semibold mt-6 pb-1 pl-2 text-sm">
          Community
        </h6>
        <AdminSidebarNavLink
          title="Farm Application"
          logo={<GiFarmer size={20} />}
          to={`/admin/farm/application`}
        />
      </div>
    </nav>
  );
};

export default AdminSidebar;

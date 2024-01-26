import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface AdminSidebarNavLinkProps extends NavLinkProps {
  title: string;
  logo: ReactNode;
  to: string;
}

const AdminSidebarNavLink = ({
  title,
  logo,
  ...props
}: AdminSidebarNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex gap-2 items-center bg-primary/25 text-green-600 px-5 py-3 select-none border-r-[3px] border-primary"
          : "flex gap-2 items-center text-gray-500 px-5 py-3 hover:bg-primary/10 select-none"
      }
      {...props}
    >
      {logo}
      <span className=" text-sm font-poppins-medium">{title}</span>
    </NavLink>
  );
};

export default AdminSidebarNavLink;

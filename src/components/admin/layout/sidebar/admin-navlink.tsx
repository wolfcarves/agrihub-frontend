import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface AdminNavLinkProps extends NavLinkProps {
  title: string;
  logo: ReactNode;
  to: string;
}

const AdminNavLink = ({ title, logo, ...props }: AdminNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex gap-3 items-center bg-primary shadow-lg shadow-primary/20 text-white rounded-lg px-5 py-3 select-none  w-full "
          : "flex gap-3 items-center text-[#858b94] px-5 py-3 hover:bg-primary/20 hover:text-primary rounded-lg select-none w-full "
      }
      {...props}
    >
      {logo}
      <span className=" text-sm font-semibold text-nowrap break-normal">
        {title}
      </span>
    </NavLink>
  );
};

export default AdminNavLink;

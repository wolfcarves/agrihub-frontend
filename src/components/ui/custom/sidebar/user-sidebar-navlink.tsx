import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface UserSidebarNavLinkProps extends NavLinkProps {
  title: string;
  logo: ReactNode;
  to: string;
}

const UserSidebarNavLink = ({
  title,
  logo,
  ...props
}: UserSidebarNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex gap-5 bg-primary rounded-2xl text-white p-5 select-none"
          : "flex gap-5 rounded-2xl text-foreground p-5  hover:bg-gray-100 duration-200 select-none"
      }
      {...props}
    >
      {logo}
      <span className="text-sm font-poppins-medium">{title}</span>
    </NavLink>
  );
};

export default UserSidebarNavLink;

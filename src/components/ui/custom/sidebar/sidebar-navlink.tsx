import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface SidebarNavLinkProps extends NavLinkProps {
  title: string;
  logo: ReactNode;
  to: string;
}

const SidebarNavLink = ({ title, logo, ...props }: SidebarNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex gap-5 bg-primary rounded-2xl text-white p-5"
          : "flex gap-5 rounded-2xl text-neutral-700 p-5"
      }
      preventScrollReset={false} // This won't fucking work, I'll figure it out next time
      {...props}
    >
      {logo}
      <span className="text-sm font-poppins-medium">{title}</span>
    </NavLink>
  );
};

export default SidebarNavLink;

import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarNav {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const SidebarNav: React.FC<SidebarNav> = ({ to, className = "", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-4 pr-16 pl-5 rounded-xl grid grid-cols-3 items-center gap-3
        ${isActive ? "bg-primary text-white" : ""} ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default SidebarNav;

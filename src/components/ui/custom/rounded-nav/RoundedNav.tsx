import React from "react";
import { NavLink } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";

interface RoundedNav {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const RoundedNav: React.FC<RoundedNav> = ({ to, className = "", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-2 px-4 text-sm rounded-2xl
        ${isActive ? "bg-primary text-white" : ""} ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default RoundedNav;

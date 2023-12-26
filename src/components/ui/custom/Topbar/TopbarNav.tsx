import React from "react";
import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

const TopbarNav: React.FC<CustomNavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-2 grid place-items-center  ${
          isActive ? "text-primary border-b-2 border-primary" : "text-black"
        }`
      }
    >
      <span>{children}</span>
    </NavLink>
  );
};

export default TopbarNav;

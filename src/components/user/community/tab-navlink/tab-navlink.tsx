import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface TabNavlinkProps extends NavLinkProps {
  title: string;

  to: string;
}

const TabNavlink = ({ title, ...props }: TabNavlinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `py-2 px-5 rounded-full ${isActive ? "bg-primary text-white" : ""}`
      }
      {...props}
    >
      <span className="">{title}</span>
    </NavLink>
  );
};

export default TabNavlink;

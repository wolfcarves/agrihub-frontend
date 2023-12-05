import React from "react";
import { NavLink } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";
const Sidebar = () => {
  return (
    <>
      <NavLink to={""} className="">
        Questions
      </NavLink>
      <NavLink to={""} className="">
        Tags
      </NavLink>
    </>
  );
};

export default Sidebar;

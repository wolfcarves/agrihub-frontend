import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import SidebarNav from "@components/ui/custom/sidebar-nav/SidebarNav";
const Sidebar = () => {
  return (
    <div className="flex flex-col w-[80%]">
      <SidebarNav to={"/community/explore"}>
        <IoBookmarkOutline size={20} /> Explore
      </SidebarNav>
      <SidebarNav to={"/community/my-community"}>
        <TbMessageCircleQuestion size={20} /> Community
      </SidebarNav>
    </div>
  );
};

export default Sidebar;

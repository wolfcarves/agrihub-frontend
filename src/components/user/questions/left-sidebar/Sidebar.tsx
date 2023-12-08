import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import SidebarNav from "@components/ui/custom/sidebar-nav/SidebarNav";
const Sidebar = () => {
  return (
    <div className="flex flex-col w-[80%]">
      <SidebarNav to={"/forums/list"}>
        <TbMessageCircleQuestion size={20} /> Questions
      </SidebarNav>
      <SidebarNav to={"/forums/saved"}>
        <IoBookmarkOutline size={20} /> Saved
      </SidebarNav>
      <SidebarNav to={"/forums/tags"}>
        <BsTags size={20} /> Tags
      </SidebarNav>
    </div>
  );
};

export default Sidebar;

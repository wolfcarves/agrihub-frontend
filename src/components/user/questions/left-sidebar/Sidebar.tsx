import React, { useEffect, useState } from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import SidebarNav from "@components/ui/custom/sidebar-nav/SidebarNav";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const isQuestionPage =
      pathSegments.length === 4 &&
      pathSegments[0] === "forums" &&
      pathSegments[1] === "question" &&
      !!pathSegments[2] &&
      !!pathSegments[3];

    if (isQuestionPage || location.pathname === "/forums/ask") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-[80%]">
      <SidebarNav
        to={"/forums/list"}
        className={`${active ? "bg-primary text-white" : ""}`}
      >
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

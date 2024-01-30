import React from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";

import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";

const CommunitySidebar = () => {
  const pathname = useLocation().pathname;
  const { isAuthenticated, data: UserData } = useAuth();

  return (
    <UserSidebar className="hidden sm:block">
      {/* <UserSidebarNavLink
        to="/community"
        title="My Community"
        logo={<TbMessageCircleQuestion size={20} />}
        end={pathname === ""}
      /> */}

      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/my-community/${UserData.farm_id}`}
          title="My Community"
          logo={<IoBookmarkOutline size={20} />}
        />
      )}

      <UserSidebarNavLink
        to="/community/explore"
        title="Explore"
        logo={<BsTags size={20} />}
      />
      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/reports/${UserData.farm_id}`}
          title="Reports"
          logo={<IoBookmarkOutline size={20} />}
        />
      )}
    </UserSidebar>
  );
};

export default CommunitySidebar;

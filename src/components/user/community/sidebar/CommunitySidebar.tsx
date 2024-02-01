import React from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";
import { PiListMagnifyingGlass, PiNewspaper, PiUsers } from "react-icons/pi";

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
          logo={<PiUsers size={21} />}
        />
      )}

      <UserSidebarNavLink
        to="/community/explore"
        title="Explore"
        logo={<PiListMagnifyingGlass size={21} />}
      />
      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/reports/${UserData.farm_id}`}
          title="Reports"
          logo={<PiNewspaper size={20} />}
        />
      )}
    </UserSidebar>
  );
};

export default CommunitySidebar;

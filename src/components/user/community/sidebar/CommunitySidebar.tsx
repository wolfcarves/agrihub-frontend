import React from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";
import {
  PiListMagnifyingGlass,
  PiNewspaper,
  PiShieldWarning,
  PiUsers
} from "react-icons/pi";
import useCommunityAutorization from "../../../../hooks/utils/useCommunityAutorization";
import { CiChat1, CiSquareQuestion } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";

const CommunitySidebar = () => {
  const pathname = useLocation().pathname;
  const { isAuthenticated, data: UserData } = useAuth();
  const { isAllowed } = useCommunityAutorization();

  return (
    <UserSidebar className="hidden sm:block">
      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/my-community/${UserData.farm_id}`}
          title="My Community"
          logo={<PiUsers size={21} />}
        />
      )}
      {UserData?.farm_id && isAuthenticated && isAllowed && (
        <UserSidebarNavLink
          to={`/community/chat/${UserData.id}`}
          title="Chat"
          logo={<CiChat1 size={20} />}
        />
      )}
      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/task/${UserData.farm_id}`}
          title="Task"
          logo={<GoTasklist size={20} />}
        />
      )}
      {UserData?.farm_id && isAuthenticated && (
        <UserSidebarNavLink
          to={`/community/reports/${UserData.farm_id}`}
          title="Reports"
          logo={<PiNewspaper size={20} />}
        />
      )}
      {UserData?.farm_id && isAuthenticated && isAllowed && (
        <UserSidebarNavLink
          to={`/community/problem/${UserData.farm_id}`}
          title="Problem"
          logo={<PiShieldWarning size={20} />}
        />
      )}
      {UserData?.farm_id && isAuthenticated && isAllowed && (
        <UserSidebarNavLink
          to={`/community/request/${UserData.farm_id}`}
          title="Request"
          logo={<CiSquareQuestion size={20} />}
        />
      )}

      <UserSidebarNavLink
        to="/community/explore"
        title="Explore"
        logo={<PiListMagnifyingGlass size={21} />}
      />
    </UserSidebar>
  );
};

export default CommunitySidebar;

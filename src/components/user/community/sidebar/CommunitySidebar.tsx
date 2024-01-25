import React from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";

import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";

const CommunitySidebar = () => {
  const pathname = useLocation().pathname;
  const { isAuthenticated } = useAuth();

  return (
    <UserSidebar>
      {/* <UserSidebarNavLink
        to="/community"
        title="My Community"
        logo={<TbMessageCircleQuestion size={20} />}
        end={pathname === ""}
      /> */}

      {/* {isAuthenticated && (
        <UserSidebarNavLink
          to="/community/explore"
          title="Saved"
          logo={<IoBookmarkOutline size={20} />}
          end
        />
      )} */}

      <UserSidebarNavLink
        to="/community/explore"
        title="Explore"
        logo={<BsTags size={20} />}
      />
    </UserSidebar>
  );
};

export default CommunitySidebar;

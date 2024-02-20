import React, { ComponentProps } from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";

import { BsTags } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineManageAccounts,
  MdOutlineEmail,
  MdOutlineFormatPaint
} from "react-icons/md";

type SettingsSidebarProps = ComponentProps<"div">;

const SettingsSidebar = ({ className, ...props }: SettingsSidebarProps) => {
  const pathname = useLocation().pathname;
  const { isAuthenticated } = useAuth();

  return (
    <UserSidebar className={`hidden sm:block ${className}`} {...props}>
      {isAuthenticated && (
        <>
          <UserSidebarNavLink
            to="/settings/profile"
            title="Public Profile"
            logo={<CgProfile size={20} />}
            end={pathname === "/settings/authentications"}
          />

          <UserSidebarNavLink
            to="/settings/account"
            title="Account"
            logo={<MdOutlineManageAccounts size={20} />}
            end
          />

          <UserSidebarNavLink
            to="/settings/email"
            title="Emails"
            logo={<MdOutlineEmail size={20} />}
            end
          />
          <UserSidebarNavLink
            to="/settings/authentication"
            title="Password"
            logo={<RiLockPasswordLine size={20} />}
            end
          />
        </>
      )}
      <UserSidebarNavLink
        to="/settings/appearance"
        title="Appearance"
        logo={<MdOutlineFormatPaint size={20} />}
        end
      />
    </UserSidebar>
  );
};

export default SettingsSidebar;

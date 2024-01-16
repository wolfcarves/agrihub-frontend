import React, { ComponentProps } from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";

import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { RiLightbulbLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";

type QuestionSidebarSheetProps = ComponentProps<"div"> & {
  onLinkClick?: () => void;
};

const QuestionSidebarSheet = ({
  className,
  onLinkClick,
  ...props
}: QuestionSidebarSheetProps) => {
  const pathname = useLocation().pathname;
  const { isAuthenticated } = useAuth();

  const handleEventClick = () => {
    onLinkClick && onLinkClick();
  };

  return (
    <UserSidebar
      className={`block sm:hidden border-r-0 ${className}`}
      {...props}
    >
      <UserSidebarNavLink
        to="/forum"
        title="Questions"
        logo={<TbMessageCircleQuestion size={20} />}
        end={pathname === "/forum/tags"}
        onClick={handleEventClick}
      />

      {isAuthenticated && (
        <UserSidebarNavLink
          to="/forum/saved"
          title="Saved"
          logo={<IoBookmarkOutline size={20} />}
          end
          onClick={handleEventClick}
        />
      )}

      <UserSidebarNavLink
        to="/forum/tags"
        title="Tags"
        logo={<BsTags size={20} />}
        onClick={handleEventClick}
        end
      />

      <div className="mt-10">
        <h6 className="font-poppins-semibold pb-5">Groups</h6>

        <UserSidebarNavLink
          to="/community"
          title="Community"
          logo={<BsPeople size={20} />}
          end
          onClick={handleEventClick}
        />
      </div>

      <div className="mt-10">
        <h6 className="font-poppins-semibold pb-5">Resources</h6>

        <UserSidebarNavLink
          to="/articles"
          title="Articles"
          logo={<GrArticle size={20} />}
          end
          onClick={handleEventClick}
        />

        <UserSidebarNavLink
          to="/blogs"
          title="Blogs"
          logo={<RiLightbulbLine size={20} />}
          end
          onClick={handleEventClick}
        />

        <UserSidebarNavLink
          to="/events"
          title="Events"
          logo={<IoCalendarNumberOutline size={20} />}
          end
          onClick={handleEventClick}
        />

        <UserSidebarNavLink
          to="/about"
          title="About"
          logo={<BsExclamationCircle size={20} />}
          end
          onClick={handleEventClick}
        />
      </div>
    </UserSidebar>
  );
};

export default QuestionSidebarSheet;

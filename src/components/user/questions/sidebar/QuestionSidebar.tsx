import React from "react";
import { Sidebar, SidebarNavLink } from "@components/ui/custom";

import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";

const QuestionSidebar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Sidebar>
      <SidebarNavLink
        to="/forum"
        title="Questions"
        logo={<TbMessageCircleQuestion size={20} />}
        end
      />

      {isAuthenticated && (
        <SidebarNavLink
          to="/forum/saved"
          title="Saved"
          logo={<IoBookmarkOutline size={20} />}
          end
        />
      )}

      <SidebarNavLink
        to="/forum/tags"
        title="Tags"
        logo={<BsTags size={20} />}
        end
      />
    </Sidebar>
  );
};

export default QuestionSidebar;

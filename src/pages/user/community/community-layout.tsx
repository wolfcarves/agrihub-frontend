import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const CommunityLayout = () => {
  const pathname = useLocation().pathname;
  const sidebarNoneRenderPaths = ["/community", "/community/register"];
  const sidebarRender = sidebarNoneRenderPaths.includes(pathname);

  return (
    <CommunityLayoutContainer>
      {!sidebarRender && <CommunitySidebar />}
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
    </CommunityLayoutContainer>
  );
};

export default CommunityLayout;

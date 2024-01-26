import { Outlet, useLocation } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";

const CommunityLayout = () => {
  const pathname = useLocation().pathname;

  const sidebarNoneRenderPaths = ["/community", "/community/register"];
  const sidebarRender = sidebarNoneRenderPaths.includes(pathname);

  return (
    <CommunityLayoutContainer>
      {!sidebarRender && <CommunitySidebar />}
      <Outlet />
    </CommunityLayoutContainer>
  );
};

export default CommunityLayout;

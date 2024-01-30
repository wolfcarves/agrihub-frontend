import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

const CommunityLayout = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { data: UserData, isFetching, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!UserData?.farm_id) {
      navigate(`/community`);
    } else {
      navigate(`/community/my-community/${UserData?.farm_id}/`);
    }
  }, [UserData]);

  const sidebarNoneRenderPaths = ["/community", "/community/register"];
  const sidebarRender = sidebarNoneRenderPaths.includes(pathname);

  return (
    <CommunityLayoutContainer>
      {!sidebarRender && <CommunitySidebar />}
      {isAuthenticated && isFetching ? <></> : <Outlet />}
    </CommunityLayoutContainer>
  );
};

export default CommunityLayout;

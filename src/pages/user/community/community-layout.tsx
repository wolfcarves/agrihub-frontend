import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";
import useAuth from "../../../hooks/useAuth";

const CommunityLayout = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { data: UserData } = useAuth();
  // if (UserData.farm_id) {
  //   navigate(`/community/my-community/${UserData.farm_id}`);
  // } else {
  //   navigate(`/community`);
  // }

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

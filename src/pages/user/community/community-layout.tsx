import { Outlet } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";

const CommunityLayout = () => {
  return (
    <CommunityLayoutContainer>
      <Outlet />
    </CommunityLayoutContainer>
  );
};

export default CommunityLayout;

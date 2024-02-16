import { Outlet } from "react-router-dom";
import SettingsSidebar from "./sidebar/SettingsSidebar";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";

const SettingsLayout = () => {
  return (
    <CommunityLayoutContainer>
      <SettingsSidebar />
      <Outlet />
    </CommunityLayoutContainer>
  );
};

export default SettingsLayout;

import { Outlet } from "react-router-dom";
import { UserResponsiveContainer } from "@components/ui/custom";
import SettingsTab from "@components/user/settings/tabs/SettingsTab";

const SettingsLayout = () => {
  return (
    <UserResponsiveContainer className="flex-col py-5">
      <div>
        <h4 className="font-poppins-medium">User settings</h4>
      </div>
      <SettingsTab />
      <Outlet />
    </UserResponsiveContainer>
  );
};

export default SettingsLayout;

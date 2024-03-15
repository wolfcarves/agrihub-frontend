import { Outlet } from "react-router-dom";
import { UserResponsiveContainer } from "@components/ui/custom";
import SettingsTab from "@components/user/settings/tabs/SettingsTab";

const SettingsLayout = () => {
  return (
    <UserResponsiveContainer className="pt-20">
      <SettingsTab />
      <div className="w-full p-20">
        <Outlet />
      </div>
    </UserResponsiveContainer>
  );
};

export default SettingsLayout;

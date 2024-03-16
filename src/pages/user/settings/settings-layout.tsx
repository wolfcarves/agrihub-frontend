import { Outlet } from "react-router-dom";
import SettingsTab from "@components/user/settings/tabs/SettingsTab";

const SettingsLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-10 lg:pt-20 min-h-[60rem] px-3">
      <SettingsTab />
      <div className="w-full lg:p-20 py-10 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;

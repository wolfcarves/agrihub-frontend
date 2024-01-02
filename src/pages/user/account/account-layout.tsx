import { ThemeToggler } from "@components/ui/theme-toggler";
import UserLayoutAccountContainer from "@components/user/account/containers/UserLayoutAccountContainer";
import UserAccountHeader from "@components/user/account/header/UserAccountHeader";
import { Outlet } from "react-router-dom";

const ChildComponent = () => (
  <div className="my-auto w-full">
    <Outlet />
  </div>
);

const UserAccountLayout = () => {
  return (
    <UserLayoutAccountContainer>
      <UserAccountHeader />
      <ChildComponent />
      <div className="fixed bottom-5 right-5">
        <ThemeToggler />
      </div>
    </UserLayoutAccountContainer>
  );
};

export default UserAccountLayout;

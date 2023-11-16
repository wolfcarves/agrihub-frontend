import { ThemeToggler } from "@components/ui/theme-toggler";
import UserLayoutAccountContainer from "@components/user/containers/UserLayoutAccountContainer";
import UserHeader from "@components/user/headers/UserHeader";
import { Outlet } from "react-router-dom";

const ChildComponent = () => (
  <div className="my-auto w-full">
    <Outlet />
  </div>
);

const AccountLayout = () => {
  return (
    <UserLayoutAccountContainer>
      <UserHeader />
      <ChildComponent />
      <div className="fixed bottom-5 right-5">
        <ThemeToggler />
      </div>
    </UserLayoutAccountContainer>
  );
};

export default AccountLayout;

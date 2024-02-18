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
    </UserLayoutAccountContainer>
  );
};

export default UserAccountLayout;

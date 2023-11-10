import UserAccountContainer from "@components/user/containers/UserAccountContainer";
import UserHeader from "@components/user/headers/UserHeader";
import { Outlet } from "react-router-dom";

const ChildComponent = () => (
  <div className="my-auto w-full">
    <Outlet />
  </div>
);

const AccountLayout = () => {
  return (
    <UserAccountContainer>
      <UserHeader />
      <ChildComponent />
    </UserAccountContainer>
  );
};

export default AccountLayout;

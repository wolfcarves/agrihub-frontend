import UserBaseContainer from "@pages/components/user/UserContainers/UserBaseContainer";
import UserHeader from "@pages/components/user/UserHeaders/UserHeader";
import { Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <UserBaseContainer>
      <UserHeader />
      <Outlet />
    </UserBaseContainer>
  );
}

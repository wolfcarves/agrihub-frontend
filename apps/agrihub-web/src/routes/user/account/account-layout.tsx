import UserBaseContainer from "@components/user/UserContainers/UserBaseContainer";
import UserHeader from "@components/user/UserHeaders/UserHeader";
import { Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <UserBaseContainer>
      <UserHeader />
      <Outlet />
    </UserBaseContainer>
  );
}

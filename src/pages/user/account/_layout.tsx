import UserAccountContainer from "@components/user/containers/UserAccountContainer";
import UserHeader from "@components/user/headers/UserHeader";
import { Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <UserAccountContainer>
      <UserHeader />
      <Outlet />
    </UserAccountContainer>
  );
}

import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./UserHeaderNavigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center h-20 border">
    <div className="container flex justify-between items-center w-full">
      {children}
    </div>
  </div>
);

const UserHeaderSearchBar = () => (
  <div className="flex items-center gap-10 h-full">
    <AgrihubLogo />
    <SearchBar />
  </div>
);

const AuthButtonsGroup = () => (
  <div className="flex gap-3">
    <Button variant="link">Login</Button>
    <Button variant="default_border" className="px-7">
      Signup
    </Button>
  </div>
);

const UserHeader = () => {
  return (
    <UserHeaderContainer>
      <UserHeaderSearchBar />
      <UserHeaderNavigation />
      <AuthButtonsGroup />
    </UserHeaderContainer>
  );
};

export default UserHeader;

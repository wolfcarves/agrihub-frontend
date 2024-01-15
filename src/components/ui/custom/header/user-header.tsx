import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";
import UserHeaderNotification from "./user-header-notification";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-16 sm:h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderSearchBar = () => (
  <div className="flex items-center gap-10 h-full">
    <Link to="/">
      <AgrihubLogo size="sm" />
    </Link>

    <SearchBar placeholder="Type to search..." />
  </div>
);

const AuthButtonsGroup = () => {
  return (
    <div className="flex gap-3">
      <>
        <Link to="/account/login">
          <Button variant="link">Login</Button>
        </Link>

        <Link to="/account/signup">
          <Button variant="default_border" className="px-7">
            Signup
          </Button>
        </Link>
      </>
    </div>
  );
};

const UserHeader = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <UserHeaderContainer>
        <UserHeaderSearchBar />
        <UserHeaderNavigation />

        <div className="flex items-center gap-4">
          {isAuthenticated && <UserHeaderNotification />}
          {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
        </div>
      </UserHeaderContainer>
    </>
  );
};

export default UserHeader;

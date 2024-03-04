import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";
import HeaderNotification from "../notification/header-notification";
import UserHeaderMobileSidebar from "@components/ui/custom/sidebar/user-header-mobile-sidebar";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-14 sm:h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <UserHeaderMobileSidebar />

      <Link to="/">
        <AgrihubLogo />
      </Link>

      <SearchBar className="hidden lg:flex" placeholder="Type to search..." />
    </div>
  );
};

const AuthButtonsGroup = () => {
  return (
    <div className="flex gap-3">
      <>
        <Link to="/account/login">
          <Button variant="link" className="text-sm">
            Login
          </Button>
        </Link>

        <Link to="/account/signup">
          <Button className="px-7 text-sm">Signup</Button>
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
        <UserHeaderLogo />
        <UserHeaderNavigation />

        <div className="flex items-center gap-2">
          {isAuthenticated && <HeaderNotification />}
          {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
        </div>
      </UserHeaderContainer>
    </>
  );
};

export default UserHeader;

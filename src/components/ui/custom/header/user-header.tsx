import AgrihubLogo from "@icons/main-logo.svg";
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
    <div className="flex items-center gap-3 h-full">
      <UserHeaderMobileSidebar />

      <Link to="/">
        <img
          className="w-10 sm:block hidden"
          src={AgrihubLogo as unknown as string}
        />
      </Link>

      <SearchBar className="lg:flex sm:block hidden" placeholder="Search..." />
      <h1 className="font-poppins-bold text-lg hidden opacity-0">
        <span className="font-poppins-regular">A g r i </span>H u b
      </h1>
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

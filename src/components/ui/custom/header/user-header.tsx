import AgrihubLogo from "@icons/main-logo.svg";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { Link, useLocation } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";
import HeaderNotification from "../notification/header-notification";
import UserHeaderMobileSidebar from "@components/ui/custom/sidebar/user-header-mobile-sidebar";
import UserHeaderSearch from "./user-header-search";
import { IoSearch } from "react-icons/io5";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-14 sm:h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderLogo = () => {
  return (
    <Link to="/">
      <img
        className="w-14 sm:block hidden"
        src={AgrihubLogo as unknown as string}
      />
    </Link>
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
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const pathname = useLocation().pathname;

  useEffect(() => {
    handleSearchClose();
  }, [pathname]);

  const handleSearchClose = () => {
    const timeout = setTimeout(() => {
      setIsSearchOpen(false);
    }, 100);

    return () => clearTimeout(timeout);
  };

  return (
    <UserHeaderContainer>
      <div className="flex items-center h-full max-w-[20rem] w-full">
        <UserHeaderLogo />
        <UserHeaderMobileSidebar />
        <SearchBar
          className="lg:flex sm:block  ms-3 w-full"
          placeholder="Search..."
          onFocus={() => setIsSearchOpen(true)}
          onChange={e => setSearchValue(e.target.value)}
          maxLength={40}
        />
      </div>

      <UserHeaderSearch
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        query={searchValue}
      />

      <UserHeaderNavigation />

      <div className="flex items-center gap-2 ps-3">
        {isAuthenticated && <HeaderNotification />}
        {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
      </div>
    </UserHeaderContainer>
  );
};

export default UserHeader;

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
import InstallPWA from "../pwa/pwaInstall";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-14 lg:h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderLogo = () => {
  const { data: aboutDetails } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;
  return (
    <Link to="/">
      <img
        className="w-14 lg:block hidden"
        src={S3_BASE_URL + aboutDetails?.agrihub_user_logo}
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
          className="block lg:flex ms-3 w-full"
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
        <InstallPWA />
        {isAuthenticated && <HeaderNotification />}
        {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
      </div>
    </UserHeaderContainer>
  );
};

export default UserHeader;

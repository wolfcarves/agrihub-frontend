import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode } from "react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderSearchBar = () => (
  <div className="flex items-center gap-10 h-full">
    <Link to="/">
      <AgrihubLogo />
    </Link>

    <SearchBar />
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
        {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
      </UserHeaderContainer>
    </>
  );
};

export default UserHeader;

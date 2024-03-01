import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode, useState } from "react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@components/ui/sheet";
import { HiMenuAlt2 } from "react-icons/hi";
import QuestionSidebarSheet from "@components/user/questions/sidebar/QuestionSidebarSheet";
import HeaderNotification from "../notification/header-notification";

const UserHeaderContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-0 w-full bg-background z-50 flex justify-center h-16 sm:h-20 border-b">
    <UserReponsiveContainer className="justify-between items-center w-full">
      {children}
    </UserReponsiveContainer>
  </div>
);

const UserHeaderSearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="hidden sm:flex gap-10 items-center h-full py-3">
        <Link to="/">
          <AgrihubLogo />
        </Link>

        <SearchBar placeholder="Type to search..." />
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex sm:hidden items-center gap-10 h-full">
          <div className="flex items-center gap-4">
            <SheetTrigger
              className="text-xl opacity-75"
              onClick={() => setIsOpen(true)}
            >
              <HiMenuAlt2 />
            </SheetTrigger>

            <SheetContent side="left" className="p-0">
              <Link to="/">
                <SheetHeader className="flex flex-row gap-3 text-start px-6 pt-5">
                  <div className="w-max">
                    <AgrihubLogo />
                  </div>
                  <span className="font-poppins-medium">Agrihub</span>
                </SheetHeader>
              </Link>

              <QuestionSidebarSheet onLinkClick={() => setIsOpen(false)} />
            </SheetContent>
          </div>
        </div>
      </Sheet>
    </>
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
        <UserHeaderSearchBar />
        <UserHeaderNavigation />

        <div className="flex items-center gap-4">
          {isAuthenticated && <HeaderNotification />}
          {isAuthenticated ? <UserHeaderMenu /> : <AuthButtonsGroup />}
        </div>
      </UserHeaderContainer>
    </>
  );
};

export default UserHeader;

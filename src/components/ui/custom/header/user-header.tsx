import AgrihubLogo from "@icons/AgrihubLogo";
import UserHeaderNavigation from "./user-header-navigation";
import SearchBar from "../search-bar/SearchBar";
import { ReactNode, useState } from "react";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import UserHeaderMenu from "./user-header-menu";
import UserReponsiveContainer from "../container/user-reponsive-container";
import UserHeaderNotification from "./user-header-notification";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@components/ui/sheet";
import { HiMenuAlt2 } from "react-icons/hi";
import QuestionSidebarSheet from "@components/user/questions/sidebar/QuestionSidebarSheet";

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center gap-10 h-full">
        <div className="flex items-center gap-4">
          <SheetTrigger
            className="flex sm:hidden text-xl opacity-75"
            onClick={() => setIsOpen(true)}
          >
            <HiMenuAlt2 />
          </SheetTrigger>

          <div className="hidden"></div>

          <Link to="/">
            <AgrihubLogo />
          </Link>

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

        <div className="hidden sm:flex items-center h-full py-3">
          <SearchBar placeholder="Type to search..." />
        </div>
      </div>
    </Sheet>
  );
};

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

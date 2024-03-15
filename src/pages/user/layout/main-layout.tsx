import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { UserFooter, UserHeader } from "@components/ui/custom";
import { ThemeToggler } from "@components/ui/theme-toggler";

const MainLayout = () => {
  const loader = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    loader?.current?.continuousStart(30, 0);

    const timeout = setTimeout(() => {
      loader?.current?.complete();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <div className="flex flex-col min-h-[90rem] h-screen ">
        <LoadingBar
          ref={loader}
          color="rgb(59 130 246)"
          height={3}
          shadow={true}
        />

        <ScrollRestoration
          getKey={loc => {
            return loc.pathname + loc.search;
          }}
        />

        <UserHeader />
        <div className="flex-1">
          <Outlet />
        </div>
        <UserFooter />

        {/* <div className="fixed bottom-5 end-5">
          <ThemeToggler />
        </div> */}
      </div>
    </>
  );
};

export default MainLayout;

import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { UserFooter, UserHeader } from "@components/ui/custom";

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
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="/agrihub-background.png"
        className="w-full h-full object-cover lg:object-none mx-auto"
      />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-center text-xl lg:text-xl">
          Until the end 💚
        </p>
      </div>
    </div>
  );

  return (
    <>
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
      <Outlet />
      <UserFooter />
    </>
  );
};

export default MainLayout;

import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const MainLayout = () => {
  const loader = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    loader?.current?.continuousStart(30, 0);

    const timeout = setTimeout(() => {
      loader?.current?.complete();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.state]);

  return (
    <>
      <LoadingBar ref={loader} color="rgb(59 130 246)" />

      <ScrollRestoration
        getKey={loc => {
          return loc.pathname + loc.search;
        }}
      />

      <Outlet />
    </>
  );
};

export default MainLayout;

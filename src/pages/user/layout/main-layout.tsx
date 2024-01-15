import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={location => {
          const restoringPaths = ["/"];

          return restoringPaths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
      <Outlet />
    </>
  );
};

export default MainLayout;

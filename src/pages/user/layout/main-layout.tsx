import { Outlet } from "react-router-dom";
import { ScrollToTop } from "@components/ui/custom";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default MainLayout;

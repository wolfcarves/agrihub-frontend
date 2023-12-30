import { Outlet } from "react-router-dom";
import { Header } from "@components/ui/custom";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col min-h-[100dvh] max-h-[100dvh] overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;

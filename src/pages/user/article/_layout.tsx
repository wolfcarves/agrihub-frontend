import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sheet } from "@components/ui/sheet";
import Sidebar from "@components/ui/custom/Sidebar/Sidebar";
import Topbar from "@components/ui/custom/Topbar/Topbar";
import Sidebars from "@components/user/community/sidebar/Sidebar";
import { useEffect } from "react";
const ArticleLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is exactly '/community'
    if (location.pathname === "/community") {
      navigate("/community/explore");
    }
  }, [navigate, location.pathname]);
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div className="lg:col-span-12  col-span-12 overflow-y-auto py-3 scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default ArticleLayout;

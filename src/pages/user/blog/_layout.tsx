import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserHeader } from "@components/ui/custom";
import Footer from "../../../components/ui/custom/footer/user-footer";

const BlogLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="">
      <UserHeader />
      <Outlet />
      <Footer />
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default BlogLayout;

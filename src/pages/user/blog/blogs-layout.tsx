import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/community") {
      navigate("/community/explore");
    }
  }, [navigate, location.pathname]);
  return (
    <>
      <Helmet>
        <title>Blogs | AgriHub</title>
      </Helmet>

      <div className="">
        <Outlet />
      </div>
    </>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default BlogLayout;

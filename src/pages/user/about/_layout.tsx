import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutLayout = () => {
  return (
    <>
      <Helmet>
        <title>Events | AgriHub</title>
      </Helmet>

      <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
        <div className="col-span-12 overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default AboutLayout;

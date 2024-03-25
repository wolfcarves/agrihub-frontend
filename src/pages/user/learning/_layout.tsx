import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const LearningsLayout = () => {
  return (
    <>
      <Helmet>
        <title>Learning Materials | AgriHub</title>
      </Helmet>

      <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
        <div className="lg:col-span-12  col-span-12 overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default LearningsLayout;

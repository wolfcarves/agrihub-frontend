import { Outlet } from "react-router-dom";
import Footer from "../../../components/ui/custom/footer/Footer";

const AboutLayout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div className="col-span-12 overflow-y-auto pt-3 scroll-smooth">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default AboutLayout;

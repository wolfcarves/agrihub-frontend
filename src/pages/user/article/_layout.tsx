import { Outlet } from "react-router-dom";
import Footer from "../../../components/ui/custom/footer/Footer";
const ArticleLayout = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 h-full overflow-y-auto">
      <div className="lg:col-span-12  col-span-12 overflow-y-auto scroll-smooth">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default ArticleLayout;

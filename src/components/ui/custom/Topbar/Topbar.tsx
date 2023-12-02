import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@icons/main-logo.svg";
import AgriLogo from "@icons/logoAgrihub.svg";
import { FaRegBell } from "react-icons/fa6";
import dp from "@assets/images/dp.svg";
import { SheetTrigger } from "@components/ui/sheet";
export default function Topbar() {
  // const toggle = useSelector((state: RootState) => state.sidebar.toggle);
  // const dispatch = useDispatch();

  return (
    <div className="px-6 py-2 bg-white border-b border-border flex justify-between w-full sticky top-0 z-30">
      <div className="flex items-center">
        <SheetTrigger className="md:hidden inline mr-3">
          <RxHamburgerMenu size={20} />
        </SheetTrigger>

        <img className="h-[2.9rem] mr-1" src={Logo} />
        <img className="h-[2.2rem] md:inline hidden" src={AgriLogo} />
      </div>
      <div className="flex items-center gap-3 text-base text-[#404040] font-medium">
        <div>Home</div>
        <div>Forum</div>
        <div>Community</div>
        <div>Articles</div>
        <div>Blogs</div>
        <div>About Us</div>
      </div>
      <div className="flex items-center gap-4">
        <FaRegBell size={20} color={"#404040"} />
        <img
          className="h-[2rem] w-[2rem] aspect-square rounded-full"
          src={dp}
        />
      </div>
    </div>
  );
}

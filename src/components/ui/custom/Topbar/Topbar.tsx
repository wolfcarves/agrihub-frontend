import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@icons/main-logo.svg";
import AgriLogo from "@icons/logoAgrihub.svg";
import { FaRegBell } from "react-icons/fa6";
import { SheetTrigger } from "@components/ui/sheet";
import SearchBar from "../search-bar/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "@providers/AuthProvider";
import { Button } from "../../button";
import TopbarNav from "./Navs/TopbarNav";
import DropdownTools from "./Dropdown/DropdownTools";
export default function Topbar() {
  const navigate = useNavigate();
  const { data: currentUser } = UserAuth() ?? {};
  const handleSignup = () => {
    navigate("/account/signup");
  };
  const handleLogin = () => {
    navigate("/account/login");
  };

  return (
    <div className="px-10 bg-white border-b border-border flex justify-between w-full  z-30">
      <div className="flex  py-2 items-center">
        <SheetTrigger className="md:hidden inline mr-3">
          <RxHamburgerMenu size={20} />
        </SheetTrigger>

        <img className="h-[2.9rem] mr-1" src={Logo} />
        <img
          className="h-[2rem] md:inline hidden mr-3 mb-[.18rem]"
          src={AgriLogo}
        />
        <SearchBar />
      </div>
      <div className="xl:flex hidden justify-center gap-8 text-md text-[#404040] font-medium">
        <TopbarNav to={"/"}>Home</TopbarNav>
        <TopbarNav to={"/forums"}>Forum</TopbarNav>
        <TopbarNav to={"/community"}>Community</TopbarNav>
        <TopbarNav to={"/article"}>Articles</TopbarNav>
        <TopbarNav to={"/blog"}>Blogs</TopbarNav>
        <TopbarNav to={"/about"}>About Us</TopbarNav>
      </div>
      {currentUser ? (
        <div className="flex items-center gap-4">
          <FaRegBell size={20} color={"#404040"} />
          <DropdownTools />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button variant={"outline"} onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleSignup}>Signup</Button>
        </div>
      )}
    </div>
  );
}

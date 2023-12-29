import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@components/ui/sheet";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "./command";
import { Home } from "lucide-react";
import Logo from "@icons/main-logo.svg";
import AgriLogo from "@icons/logoAgrihub.svg";
import { TbListDetails, TbMessageCircleQuestion } from "react-icons/tb";
import { BsBookmarkCheck } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiArticleMedium } from "react-icons/pi";
import { GrBlog } from "react-icons/gr";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function Sidebar() {
  return (
    <div>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <div className="flex  py-2 items-center">
              <img className="h-[2.9rem] mr-1" src={Logo} />
              <img className="h-[2rem] mr-3 mb-[.14rem]" src={AgriLogo} />
            </div>
          </SheetTitle>
        </SheetHeader>
        <div>
          <Command className="">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="mt-4">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Home">
                <SheetClose asChild>asdasd</SheetClose>
                <CommandItem to={""}>
                  <Home className="mr-2 h-4 w-4" />
                  <span>Overview</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Forums">
                <CommandItem to={"/forums/list"}>
                  <TbMessageCircleQuestion className="mr-2 h-4 w-4" />
                  <span>Questions</span>
                </CommandItem>
                <CommandItem to={"/forums/saved"}>
                  <BsBookmarkCheck className="mr-2 h-4 w-4" />
                  <span>Saved</span>
                </CommandItem>
                <CommandItem to={"/forums/tags"}>
                  <IoPricetagsOutline className="mr-2 h-4 w-4" />
                  <span>Tags</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Community">
                <CommandItem to={"/community/my-community"}>
                  <GiFarmTractor className="mr-2 h-4 w-4" />
                  <span>Community</span>
                </CommandItem>
                <CommandItem to={"/community/explore"}>
                  <MdOutlineTravelExplore className="mr-2 h-4 w-4" />
                  <span>Explore</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Miscellaneous">
                <CommandItem to={"/article"}>
                  <PiArticleMedium className="mr-2 h-4 w-4" />
                  <span>Articles</span>
                </CommandItem>
                <CommandItem to={"/blog"}>
                  <GrBlog className="mr-2 h-4 w-4" />
                  <span>Blogs</span>
                </CommandItem>
                <CommandItem to={"/about"}>
                  <TbListDetails className="mr-2 h-4 w-4" />
                  <span>About Us</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </SheetContent>
    </div>
  );
}

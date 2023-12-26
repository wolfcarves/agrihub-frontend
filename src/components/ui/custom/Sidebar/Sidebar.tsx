import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
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
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User
} from "lucide-react";
import Logo from "@icons/main-logo.svg";
import AgriLogo from "@icons/logoAgrihub.svg";

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
                  <User className="mr-2 h-4 w-4" />
                  <span>Overview</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Forums">
                <CommandItem to={"/forums/list"}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Questions</span>
                </CommandItem>
                <CommandItem to={"/forums/saved"}>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Saved</span>
                </CommandItem>
                <CommandItem to={"/forums/tags"}>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Tags</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Article">
                <CommandItem to={"/article"}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Article List</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </SheetContent>
    </div>
  );
}

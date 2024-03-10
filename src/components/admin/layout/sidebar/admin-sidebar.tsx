import React, { useState } from "react";
import logo from "../../../../icons/main-logo.svg";
import { adminNavigation } from "./admin-menu";
import { Link, useNavigate } from "react-router-dom";
import "../../../../globals.css";
import AdminSidebarNavLink from "./admin-sidebar-navlink";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@components/ui/command";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminSidebar = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [commandInputValue, setCommandInputValue] = useState("");

  const { data: authData, isLoading: isAuthDataLoading } =
    useGetMyProfileQuery();

  const handleParentClick = (itemName: string) => {
    setClickedItem(prevClickedItem =>
      prevClickedItem === itemName ? null : itemName
    ); // Toggle clickedItem state
  };

  const handleClick = () => {
    if (open) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={`top-0 left-0 h-full border-r bg-white space-y-8 overflow-y-auto overflow-x-hidden no-scrollbar sm:relative ml-[4.5rem] sm:ml-0 absolute z-40 ${
          open ? "sm:block hidden w-80" : "sm:hidden block w-0"
        }`}
      >
        <div className={`${open ? "block w-64" : "hidden w-0"} my-10`}>
          <h4 className="pb-3 px-4 font-bold text-gray-800 md:px-8 ">
            <div className="flex items-center justify-center px-8">
              <div className="flex-none">
                <img
                  src={logo as unknown as string}
                  width={50}
                  className="mx-auto"
                  onClick={() => handleClick()}
                />
              </div>
            </div>
          </h4>

          <Command>
            <CommandInput placeholder="Search.module.." />

            <CommandList>
              {adminNavigation.map((item, idx) => {
                const checkAuthorization = authData?.[item.module];
                if (!checkAuthorization) {
                  return null;
                }
                return (
                  <React.Fragment key={idx}>
                    <div className="flex gap-4 items-center">
                      <AdminSidebarNavLink
                        to={item.href}
                        logo={item.icon}
                        end={true}
                        title={item.name}
                        onClick={() => {
                          if (item.nav.length > 1) {
                            handleParentClick(item.name);
                          } else {
                            navigate(item.nav[0].href);
                          }
                        }}
                      />
                    </div>
                    {clickedItem === item.name && item.nav.length > 1 && (
                      <>
                        {item.nav.map((navItem, navIdx) => {
                          const subCheckAuthorization =
                            authData?.[navItem.module];
                          if (!subCheckAuthorization) {
                            return null;
                          }
                          return (
                            <CommandGroup
                              heading={navItem.title}
                              key={`${idx}-${navIdx}`}
                              className="bg-green-100"
                            >
                              <CommandItem>
                                <AdminSidebarNavLink
                                  to={navItem.href}
                                  logo
                                  end={true}
                                  title={navItem.name}
                                />
                              </CommandItem>
                            </CommandGroup>
                          );
                        })}
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </CommandList>
          </Command>
        </div>
      </div>
      <div
        className={`cursor-pointer hidden items-center justify-center p-5 sm:block absolute z-50 ${
          open ? "top-0 left-64 " : "top-0 left-0"
        }`}
        onClick={() => handleClick()}
      >
        <div className="flex-none">
          <RxHamburgerMenu size={24} />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;

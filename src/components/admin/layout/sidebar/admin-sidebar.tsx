import React, { useState } from "react";
import logo from "../../../../icons/main-logo.svg";
import { adminNavigation } from "./admin-menu";
import { useNavigate } from "react-router-dom";
import "../../../../globals.css";
import AdminSidebarNavLink from "./admin-sidebar-navlink";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@components/ui/tooltip";
import { LuAlignLeft } from "react-icons/lu";

const AdminSidebar = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const { data: authData } = useGetMyProfileQuery();

  const handleParentClick = (itemName: string) => {
    if (!open) {
      setOpen(true);
    }
    setClickedItem(prevClickedItem =>
      prevClickedItem === itemName ? null : itemName
    );
  };

  const handleClick = () => {
    if (open) {
      setOpen(false);
      setClickedItem(null);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={`top-0 left-0 h-full border-r bg-white space-y-8 overflow-y-auto overflow-x-hidden no-scrollbar sm:relative ml-[4.5rem] sm:ml-0 absolute z-40 duration-200 ${
          open ? "sm:block hidden w-80" : " block w-[4.5rem]"
        }`}
      >
        <div className={`${open ? "block w-64" : " w-20"} my-10 duration-200`}>
          {/* logo */}
          <h4 className={`pb-3 font-bold text-gray-800 ${open ? "" : "-ml-3"}`}>
            <div className="flex items-center justify-center">
              <div className="flex-none">
                <img
                  src={logo as unknown as string}
                  width={45}
                  className="mx-auto"
                />
              </div>
            </div>
          </h4>
          {/* parent bar */}
          <Command>
            <CommandSeparator />
            <CommandList>
              {adminNavigation.map((item, idx) => {
                const checkAuthorization = authData?.[item.module];
                if (!checkAuthorization) {
                  return null;
                }
                return (
                  <React.Fragment key={idx}>
                    <div className="flex gap-4 items-center">
                      <TooltipProvider delayDuration={1}>
                        <Tooltip>
                          <TooltipTrigger className="w-full">
                            <AdminSidebarNavLink
                              to={item.href}
                              logo={item.icon}
                              end={true}
                              title={open ? item.name : ""}
                              onClick={() => {
                                if (item.nav.length > 1) {
                                  handleParentClick(item.name);
                                } else {
                                  navigate(item.nav[0].href);
                                }
                              }}
                            />
                          </TooltipTrigger>
                          {!open ? (
                            <TooltipContent side="right">
                              <p>{item.name}</p>
                            </TooltipContent>
                          ) : (
                            ""
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    {/* child bar */}
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
        className={`duration-200 cursor-pointer hidden items-center justify-center p-5 sm:block absolute z-50 ${
          open ? "top-0 left-64 " : "top-0 left-16"
        }`}
        onClick={() => handleClick()}
      >
        <div className="flex-none">
          <LuAlignLeft size={24} />
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;

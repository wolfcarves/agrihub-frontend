import React, { useState } from "react";
import logo from "../../../../icons/main-logo.svg";
import { adminNavigation } from "./admin-menu";
import { Link } from "react-router-dom";
import "../../../../globals.css";
import AdminSidebarNavLink from "./admin-sidebar-navlink";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";

const AdminSidebar = () => {
  const [clickedItem, setClickedItem] = useState("Overview");
  const [open, setOpen] = useState(true);

  const { data: authData, isLoading: isAuthDataLoading } =
    useGetMyProfileQuery();

  const handleClick = (itemName: string) => {
    if (clickedItem === itemName) {
      setOpen(!open);
    } else {
      setClickedItem(itemName);
      setOpen(true);
    }
  };

  return (
    <>
      <nav className="top-0 left-0 w-20 h-full border-r bg-white space-y-8 hidden sm:block">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center justify-center px-8">
            <Link to="/admin/dashboard" className="flex-none">
              <img
                src={logo as unknown as string}
                width={35}
                className="mx-auto"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <ul className="px-4 text-sm font-medium flex-1">
              {adminNavigation.map((item, idx) => {
                const checkAuthorization = authData?.[item.module];
                // let checkSubModule: boolean

                // if (item.name === "Resources Management"){
                //   item.nav.
                // }
                if (!checkAuthorization) {
                  return <></>;
                }

                return (
                  <div key={idx}>
                    <button
                      onClick={() => handleClick(item.name)}
                      className={`relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-green-50 active:bg-green-100 duration-150 group ${
                        clickedItem === item.name ? "bg-gray-200" : ""
                      }`}
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                        {item.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`top-0 left-0 h-full border-r bg-white space-y-8 overflow-y-auto overflow-x-hidden no-scrollbar sm:relative ml-[4.5rem] sm:ml-0 absolute z-40 ${
          open ? "sm:block hidden w-80" : "sm:hidden block w-0"
        }`}
      >
        <div className={`${open ? "block w-64" : "hidden w-0"} my-10`}>
          <h4 className="pb-3 px-4 font-bold text-gray-800 md:px-8 ">
            {clickedItem && `${clickedItem}`}
          </h4>
          <div className="text-gray-600 px-4 md:px-8">
            <ul>
              {adminNavigation
                .filter(item => item.name === clickedItem)
                .map((item, idx) =>
                  item.nav.map((navItem, navIdx) => {
                    const checkAuthorization = authData?.[navItem.module];

                    if (!checkAuthorization) {
                      return <></>;
                    }

                    return (
                      <>
                        <h5 className="px-4 font-bold text-gray-800">
                          {navItem.title}
                        </h5>
                        <AdminSidebarNavLink
                          to={navItem.href}
                          key={`${idx}-${navIdx}`}
                          logo
                          end={true}
                          title={navItem.name}
                        ></AdminSidebarNavLink>
                      </>
                    );
                  })
                )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;

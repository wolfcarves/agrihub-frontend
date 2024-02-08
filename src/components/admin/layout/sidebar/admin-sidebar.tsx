import React, { useState } from "react";
import logo from "../../../../icons/main-logo.svg";
import { adminNavigation } from "./admin-menu";
import { Link } from "react-router-dom";
import "../../../../globals.css";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@components/ui/sheet";

const AdminSidebar = () => {
  const [clickedItem, setClickedItem] = useState("");

  const handleClick = (itemName: string) => {
    if (clickedItem === itemName) {
    } else {
      setClickedItem(itemName);
    }
  };

  return (
    <>
      <nav className="top-0 left-0 w-20 h-full border-r bg-white space-y-8 ">
        <Sheet>
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
              <ul className="px-4 text-sm font-medium flex-1 ">
                {adminNavigation.map((item, idx) => (
                  <SheetTrigger key={idx}>
                    <button
                      onClick={() => handleClick(item.name)}
                      className={`relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-green-50 active:bg-green-100 duration-150 group ${
                        clickedItem === item.name ? "bg-gray-200 z-[51]" : ""
                      }`}
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                        {item.name}
                      </span>
                    </button>
                  </SheetTrigger>
                ))}

                <SheetContent
                  className=" max-w-[17rem] sm:w-[540px] ml-[4rem] overflow-y-auto no-scrollbar overflow-x-hidden"
                  side="left"
                >
                  <div className={"block w-64 my-10"}>
                    <h4 className="pb-3 px-4 font-bold text-gray-800 md:px-8 ">
                      {clickedItem && `${clickedItem}`}
                    </h4>
                    <div className="text-gray-600 px-4 md:px-8">
                      <ul>
                        {adminNavigation
                          .filter(item => item.name === clickedItem)
                          .map((item, idx) =>
                            item.nav.map((navItem, navIdx) => (
                              <>
                                <h5 className="px-4 font-bold text-gray-800">
                                  {navItem.title}
                                </h5>
                                <Link
                                  to={navItem.href}
                                  key={`${idx}-${navIdx}`}
                                >
                                  <SheetClose>
                                    <div className="block w-full py-2 px-4 border-l hover:border-green-600 hover:text-green-900 duration-150">
                                      {navItem.name}
                                    </div>
                                  </SheetClose>
                                </Link>
                              </>
                            ))
                          )}
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </ul>
            </div>
          </div>
        </Sheet>
      </nav>
    </>
  );
};

export default AdminSidebar;

import React, { useState } from "react";
import logo from "../../../../icons/main-logo.svg";
import { adminNavigation } from "./admin-menu";
import { Link } from "react-router-dom";
import "../../../../globals.css";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

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
      <nav className="top-0 left-0 w-20 h-full border-r bg-white space-y-8">
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
              {adminNavigation.map((item, idx) => (
                <Link to={item.href} key={idx}>
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
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`top-0 left-0 h-full border-r bg-white space-y-8 overflow-y-auto overflow-x-hidden no-scrollbar ${
          open ? "block w-80" : "hidden w-0"
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
                  item.nav.map((navItem, navIdx) => (
                    <>
                      <h5 className="px-4 font-bold text-gray-800">
                        {navItem.title}
                      </h5>
                      <Link to={navItem.href} key={`${idx}-${navIdx}`}>
                        <div className="block w-full py-2 px-4 border-l hover:border-green-600 hover:text-green-900 duration-150">
                          {navItem.name}
                        </div>
                      </Link>
                    </>
                  ))
                )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;

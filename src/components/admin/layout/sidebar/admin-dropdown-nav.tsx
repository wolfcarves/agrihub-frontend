import React, { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";
import { dropdownLinks } from "./admin-links";
import useGetMyProfileQuery from "../../../../hooks/api/get/useGetMyProfileQuery";
import { module_keys } from "../../../../higher-order/account/withAuthGuard";

interface DropdownNavItem {
  icon: React.ReactNode;
  title: string;
  link: string;
  module: module_keys;
  end?: string[];
}

interface AdminDropdownNavProps {
  title: string;
  icon: React.ReactNode;
  items: DropdownNavItem[];
}

const AdminDropdownNav = ({
  title,
  icon,
  items,
  ...props
}: AdminDropdownNavProps) => {
  const { data: authData } = useGetMyProfileQuery();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;
  const activeDropdown = localStorage.getItem("dropdown");
  useEffect(() => {
    if (dropdownLinks.community.includes(pathname)) {
      localStorage.setItem("dropdown", "Community");
    } else if (dropdownLinks.resources.includes(pathname)) {
      localStorage.setItem("dropdown", "Resources");
    } else if (dropdownLinks.forum.includes(pathname)) {
      localStorage.setItem("dropdown", "Forum");
    } else if (dropdownLinks.web.includes(pathname)) {
      localStorage.setItem("dropdown", "Web Management");
    } else {
      localStorage.setItem("dropdown", "");
    }
  }, [activeDropdown, pathname]);

  useEffect(() => {
    if (title === activeDropdown) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [activeDropdown]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex gap-3 items-center rounded-lg px-5 py-3 select-none w-full  hover:bg-primary/20 hover:text-primary ${
          isOpen ? "text-primary" : "text-[#858b94]"
        }`}
      >
        {icon}
        <span className="text-sm font-semibold">{title}</span>
        <div className={`${isOpen ? "rotate-180 duration-300" : ""} ms-auto`}>
          <GoChevronDown size={18} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 w-full pl-8  ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {items.map((item, index) => {
          const checkAuthorization = authData?.[item.module];
          if (!checkAuthorization) {
            return null;
          }
          return (
            <div key={index} className="flex relative">
              <div
                className={` h-full absolute bottom-7  rounded-b-md border-l-[1px] border-b-[1px] border-gray-200/90`}
              />
              <div
                className={`absolute  w-6 h-5 top-1  rounded-bl-md border-l-[1px] border-b-[1px] border-gray-200/90`}
              />

              <div className=" pl-6 w-full">
                <NavLink
                  to={item.link}
                  end={item.end ? item.end.includes(pathname) : false}
                  {...props}
                  className={({ isActive }) =>
                    isActive
                      ? "flex gap-3 items-center bg-primary shadow-lg shadow-primary/20 text-white rounded-lg px-5 py-3 select-none  w-full "
                      : "flex gap-3 items-center text-[#858b94] px-5 py-3 hover:bg-primary/20 hover:text-primary rounded-lg select-none w-full "
                  }
                >
                  <span className=" text-xs font-semibold">{item.title}</span>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDropdownNav;

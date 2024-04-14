import React, { ComponentProps, useState } from "react";
import useGetMyProfileQuery from "../../../../hooks/api/get/useGetMyProfileQuery";
import { adminNavigation } from "../sidebar/admin-links";
import AdminNavLink from "../sidebar/admin-navlink";
import AdminDropdownNav from "../sidebar/admin-dropdown-nav";
import logo from "@assets/icons/agrihub-topleaf.svg";

const AdminMobileSidebarSheet = () => {
  const { data: authData } = useGetMyProfileQuery();
  return (
    <div
      className={` max-h-screen overflow-y-auto border-r bg-white custom-scroll `}
    >
      <div></div>
      <div className="flex items-center  flex-col py-6 sticky bg-white z-20 top-0">
        <img src={logo as unknown as string} width={150} />

        {/* <h4 className=" text-white font-poppins-medium">Agrihub</h4> */}
      </div>

      <div className="px-5 flex flex-col gap-2 pb-4">
        <p className=" font-poppins-medium  text-[#858b94] text-sm my-2">
          Menu
        </p>

        {adminNavigation.slice(0, 5).map((navigation, i) => {
          const checkAuthorization = authData?.[navigation.module];
          if (!checkAuthorization) {
            return null;
          }
          if (navigation.type === "nav") {
            return (
              <AdminNavLink
                key={i}
                to={navigation.link || ""}
                logo={navigation.icon}
                end={true}
                title={navigation.title}
              />
            );
          } else if (navigation.type === "drop") {
            return (
              <AdminDropdownNav
                key={i}
                icon={navigation.icon}
                title={navigation.title}
                items={navigation.items || []}
              />
            );
          }
          return null;
        })}

        <p className=" font-poppins-medium  text-[#858b94] text-sm my-2">
          Others
        </p>
        {adminNavigation.slice(5, 9).map((navigation, i) => {
          const checkAuthorization = authData?.[navigation.module];
          if (!checkAuthorization) {
            return null;
          }
          if (navigation.type === "nav") {
            return (
              <AdminNavLink
                key={i}
                to={navigation.link || ""}
                logo={navigation.icon}
                end={true}
                title={navigation.title}
              />
            );
          } else if (navigation.type === "drop") {
            return (
              <AdminDropdownNav
                key={i}
                icon={navigation.icon}
                title={navigation.title}
                items={navigation.items || []}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default AdminMobileSidebarSheet;

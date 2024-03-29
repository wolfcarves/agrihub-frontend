import React, { useState } from "react";
import logo from "@assets/icons/agrihub-topleaf.svg";
import { adminNavigation } from "./admin-links";
import { useNavigate } from "react-router-dom";
import "../../../../globals.css";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";
import AdminNavLink from "./admin-navlink";
import AdminDropdownNav from "./admin-dropdown-nav";

const AdminSidenav = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const { data: authData } = useGetMyProfileQuery();
  console.log(authData);

  return (
    <div
      className={`w-80 max-h-screen overflow-y-auto border-r bg-white custom-scroll md:block hidden`}
    >
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

export default AdminSidenav;

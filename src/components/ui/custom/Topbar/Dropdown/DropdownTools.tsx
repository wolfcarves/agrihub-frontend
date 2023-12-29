import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../dropdown-menu";
import LogoutAlert from "../../logout-alert/LogoutAlert";
import { UserAuth } from "../../../../../providers/AuthProvider";
import Logo from "@icons/main-logo.svg";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
const DropdownTools = () => {
  const navigate = useNavigate();
  const { data: currentUser } = UserAuth() ?? {};
  console.log(currentUser);
  const handleMyProfile = () => {
    navigate(`/users/${currentUser?.id}/me`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus:ring-0 select-none">
        <img
          className="h-[2rem] w-[2rem] aspect-square rounded-full shadow select-none"
          src={currentUser?.avatar}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuLabel className="flex flex-col">
          <span className="flex items-center capitalize text-[.9rem]">
            <img className="h-[1.1rem] mr-1 mt-[.10rem]" src={Logo} />
            {currentUser?.firstname} {currentUser?.lastname}
          </span>
          <span className=" text-[.7rem] ms-1 text-gray-500">
            @{currentUser?.username}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleMyProfile}>Profile</DropdownMenuItem>
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutAlert />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownTools;

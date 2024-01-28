import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import useAuth from "@hooks/useAuth";
import React from "react";
import { RxHamburgerMenu, RxQuestionMarkCircled } from "react-icons/rx";
import HeaderNotification from "../../../ui/custom/notification/header-notification";
import { useDispatch } from "../../../../redux/store";
import { toggleSidebar } from "../../../../redux/slices/sidebarSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../ui/dropdown-menu";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiCommentError } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import useDeleteAuthMutate from "../../../../hooks/api/delete/useDeleteAuthMutate";
import { LuUser2 } from "react-icons/lu";

const AdminTopbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useAuth();
  const { mutateAsync: deleteAuthData, isLoading } = useDeleteAuthMutate();
  const handleToUser = () => {
    navigate(`/`);
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="sticky top-0 left-0 right-0 border-b w-full">
      <nav className="h-16 flex items-center justify-between px-5 bg-white opacity-100">
        <div role="button" onClick={handleToggleSidebar}>
          <RxHamburgerMenu size={20} />
        </div>
        <div className="flex gap-4">
          <HeaderNotification />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="border h-9 w-9">
                <AvatarImage
                  src={data?.avatar ?? ""}
                  className="object-cover pointer-events-none select-none "
                />
                <AvatarFallback>{data?.firstname.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[20rem]" align="end">
              <DropdownMenuLabel>
                <span className="flex items-center gap-3 line-clamp-1 text-md font-poppins-bold capitalize h-10">
                  <img
                    src={data?.avatar ?? ""}
                    className="w-10 h-10 rounded-full border object-cover pointer-events-none select-none "
                  />
                  {data?.firstname + " " + data?.lastname}
                </span>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              {data?.role === "admin" && (
                <DropdownMenuItem
                  onClick={handleToUser}
                  className="cursor-pointer h-12 gap-2"
                >
                  <LuUser2 className="text-foreground/80 text-lg " />
                  <span className="font-poppins-medium">Home Panel</span>
                </DropdownMenuItem>
              )}

              <Link to="/helps">
                <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                  <RxQuestionMarkCircled className="text-foreground/80 text-lg " />
                  <span className="font-poppins-medium">Help & Support</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                <BiCommentError className="text-foreground/80 text-lg " />
                <span className="font-poppins-medium">Give Feedback</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                <IoSettingsOutline className="text-foreground/80 text-lg " />
                <span className="font-poppins-medium">Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer h-12 gap-2"
                onClick={() => {
                  deleteAuthData();
                }}
              >
                <MdLogout className="text-foreground/80 text-lg " />
                <span className="font-poppins-medium">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default AdminTopbar;

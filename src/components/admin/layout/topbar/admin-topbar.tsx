import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import useAuth from "@hooks/useAuth";
import React, { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@components/ui/sheet";

import logo from "../../../../icons/main-logo.svg";
import AgrihubLogo from "@icons/AgrihubLogo";
import AdminMobileSidebarSheet from "./admin-mobile-sidebar-sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../ui/alert-dialog";

const AdminTopbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useAuth();
  const { mutateAsync: deleteAuthData, isLoading } = useDeleteAuthMutate();
  const handleToUser = () => {
    navigate(`/`);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="sticky top-0 left-0 right-0 border-b w-full">
      <nav className="h-16 flex items-center sm:justify-end justify-between px-5 bg-white opacity-100">
        <div className="block sm:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-1">
              <RxHamburgerMenu size={20} />
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-2">
                <div className="h-20 flex items-center justify-center px-8">
                  <Link to="/admin/dashboard" className="flex-none">
                    <img
                      src={logo as unknown as string}
                      width={50}
                      className="mx-auto"
                    />
                  </Link>
                </div>
              </div>
              <AdminMobileSidebarSheet onLinkClick={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <div className="flex gap-4">
            <HeaderNotification />

            <AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="border h-9 w-9">
                    <AvatarImage
                      src={data?.avatar ?? ""}
                      className="object-cover pointer-events-none select-none "
                    />
                    <AvatarFallback>
                      {data?.firstname?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[20rem]" align="end">
                  <Link to={`/users/${data?.id}/${data?.username}`}>
                    <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                      <span className="flex items-center gap-3 line-clamp-1 text-md font-poppins-bold capitalize h-10">
                        <img
                          src={data?.avatar ?? ""}
                          className="w-10 h-10 rounded-full border object-cover pointer-events-none select-none "
                        />
                        {data?.firstname + " " + data?.lastname}
                      </span>
                    </DropdownMenuItem>
                  </Link>

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
                      <span className="font-poppins-medium">
                        Help & Support
                      </span>
                    </DropdownMenuItem>
                  </Link>

                  <Link to="/feedback">
                    <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                      <BiCommentError className="text-foreground/80 text-lg " />
                      <span className="font-poppins-medium">Give Feedback</span>
                    </DropdownMenuItem>
                  </Link>

                  <Link to="/settings/profile">
                    <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                      <IoSettingsOutline className="text-foreground/80 text-lg " />
                      <span className="font-poppins-medium">Settings</span>
                    </DropdownMenuItem>
                  </Link>

                  <AlertDialogTrigger className="w-full">
                    <DropdownMenuItem className="cursor-pointer h-12 gap-2">
                      <MdLogout className="text-foreground/80 text-lg " />
                      <span className="font-poppins-medium">Logout</span>
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Log out your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will log out your account from this device.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteAuthData();
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminTopbar;

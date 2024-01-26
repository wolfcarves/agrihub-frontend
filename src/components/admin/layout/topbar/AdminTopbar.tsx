import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import useAuth from "@hooks/useAuth";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminTopbar = () => {
  const {data} = useAuth()
  return (
    <div className="sticky top-0 left-0 right-0 border-b w-full">
      <nav className="h-14 flex items-center justify-between px-4 bg-white opacity-100">
       <RxHamburgerMenu  size={20}/>
       <div><Avatar className="border">
            <AvatarImage
              src={data?.avatar ?? ""}
              className="object-cover pointer-events-none select-none "
            />
            <AvatarFallback>{data?.firstname.charAt(0)}</AvatarFallback>
          </Avatar></div>
      </nav>
    </div>
  );
};

export default AdminTopbar;

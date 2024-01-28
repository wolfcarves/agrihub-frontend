import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import useAuth from "@hooks/useAuth";
import { PiBell, PiBellFill } from "react-icons/pi";
import { useState } from "react";

//Refactor nalang dapat dito naka .map pero ang mahalaga masaya tayong mga pilipino
const HeaderNotification = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useAuth();
  const { mutateAsync: deleteAuthData } = useDeleteAuthMutate();

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen(prev => !prev)}>
        <div
          className={`${
            isOpen && "bg-gray-200/80 text-blue-500 "
          } bg-gray-200/40 transform active:scale-75 transition-transform focus:outline-0 text-xl cursor-pointer p-2 rounded-full my-auto flex`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <DropdownMenuTrigger></DropdownMenuTrigger>
          {isOpen ? <PiBellFill /> : <PiBell />}
        </div>

        <DropdownMenuContent
          className="w-[22rem] sm:w-[25rem] ms-5 mt-3"
          align="end"
        >
          <DropdownMenuLabel>
            <span className="line-clamp-1 capitalize text-lg font-poppins-semibold">
              Notifications
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex flex-col  justify-start items-start cursor-pointer min-h-20">
            <span className="font-poppins-medium">
              Your crush sent you a friend request
            </span>
            <span className="font-poppins-medium text-sm mt-2 opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              cupiditate officia eligendi mollitia architecto, harum fuga
              quibusdam asperiores molestiae dolorem?
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col  justify-start items-start cursor-pointer min-h-20">
            <span className="font-poppins-medium">
              Your crush sent you a friend request
            </span>
            <span className="font-poppins-medium text-sm mt-2 opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              cupiditate officia eligendi mollitia architecto, harum fuga
              quibusdam asperiores molestiae dolorem?
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderNotification;

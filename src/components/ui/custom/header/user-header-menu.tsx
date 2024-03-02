import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import useAuth from "@hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { BiCommentError } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import ActivityIndicator from "@icons/ActivityIndicator";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserHeaderMenu = () => {
  const navigate = useNavigate();
  const { data } = useAuth();
  const { mutateAsync: deleteAuthData, isLoading } = useDeleteAuthMutate();

  const handleToAdmin = () => {
    navigate(`/admin/dashboard`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border">
            <AvatarImage
              src={data?.avatar ?? ""}
              className="object-cover pointer-events-none select-none "
            />
            <AvatarFallback>A</AvatarFallback>
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
          {(data?.role === "admin" || data?.role === "asst_admin") && (
            <DropdownMenuItem
              onClick={handleToAdmin}
              className="cursor-pointer h-12 gap-2"
            >
              <RiAdminLine className="text-foreground/80 text-lg " />
              <span className="font-poppins-medium">Admin Panel</span>
            </DropdownMenuItem>
          )}

          <Link to="/helps">
            <DropdownMenuItem className="cursor-pointer h-12 gap-2">
              <RxQuestionMarkCircled className="text-foreground/80 text-lg " />
              <span className="font-poppins-medium">Help & Support</span>
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

      <ActivityIndicator isVisible={isLoading} />
    </>
  );
};

export default UserHeaderMenu;

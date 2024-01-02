import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
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

const UserHeaderMenu = () => {
  const { data } = useAuth();
  const { mutateAsync: deleteAuthData } = useDeleteAuthMutate();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border">
            <AvatarImage src={data?.avatar ?? ""} className="object-cover" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="min-w-[200px] max-w-[200px]"
          align="end"
        >
          <DropdownMenuLabel>
            <span className="line-clamp-1 capitalize">
              {data?.firstname + " " + data?.lastname}
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              deleteAuthData();
            }}
            className="cursor-pointer"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserHeaderMenu;

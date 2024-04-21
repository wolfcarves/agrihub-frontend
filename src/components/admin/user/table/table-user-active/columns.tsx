import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ListUser } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Badge } from "@components/ui/badge";
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
} from "../../../../ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";
import { formatDateString, formatRoles } from "../../../../lib/utils";
import useUserBanUsersMutation from "../../../../../hooks/api/post/useUserBanUsersMutation";
import Loader from "../../../../../icons/Loader";
import { toast } from "sonner";

export const columns: ColumnDef<ListUser>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => <div>{row.getValue("username")}</div>
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => (
      <div>{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <div className=" capitalize">{formatRoles(row.getValue("role"))}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      const navigate = useNavigate();
      const { mutateAsync: banUserMutation, isLoading: banLoading } =
        useUserBanUsersMutation();
      const handleBan = async () => {
        await banUserMutation(user.id || "");
        toast.success("User Banned Successfully!");
        navigate("/admin/record/user-banned");
      };
      if (banLoading) {
        return <Loader isVisible={true} />;
      }

      const handleProfile = () => {
        navigate(`/users/${user.id}/${user.username}`);
      };

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id || "")}
              >
                Copy user ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger> View User Data </DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* modal */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{user.id}</DialogTitle>
            </DialogHeader>

            <div>
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.firstname?.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="mt-2">
                <h4 className="text-gray-700 font-semibold sm:text-lg justify-center items-center flex gap-2">
                  {`${user.firstname} ${user.lastname}`}{" "}
                  <Badge
                    className={`${
                      Number(user.verification_level) <= 3
                        ? "bg-orange-600"
                        : "bg-primary"
                    }`}
                  >
                    {Number(user.verification_level) <= 3
                      ? "Semi-Verified"
                      : "Verified"}
                  </Badge>
                </h4>
                <p className="text-center">
                  @{user.username}{" "}
                  <span className="text-green-600">| {user.role}</span>
                </p>
              </div>

              <div className="flex justify-between gap-2 flex-wrap my-2">
                <DialogDescription>
                  <b>email:</b> {user.email}
                </DialogDescription>
                <DialogDescription>
                  <b>birthday:</b> {formatDateString(user.birthdate || "")}
                </DialogDescription>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <DialogDescription>
                  <b>address:</b> {user.present_address}
                </DialogDescription>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <DialogDescription>
                  <b>District:</b> {user.district}
                </DialogDescription>
                <DialogDescription>
                  <b>zip:</b> {user.zipcode}
                </DialogDescription>
                <DialogDescription>
                  <b>Municipality:</b> {user.municipality}
                </DialogDescription>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <DialogDescription>
                  <b>Bio:</b> {user.bio}
                </DialogDescription>
              </div>
            </div>

            {/* dialog buttons */}
            <DialogFooter>
              <div className="flex justify-end items-center gap-2">
                <AlertDialog>
                  {/* ban alert dailog */}
                  <AlertDialogTrigger>
                    <Button variant="destructive">Ban</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ban username?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will block the user account from doing any
                        activity within the website.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleBan}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button onClick={handleProfile}>PROFILE</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

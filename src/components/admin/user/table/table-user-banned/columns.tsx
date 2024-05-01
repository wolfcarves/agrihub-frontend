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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { AdminUser } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

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
import useUserUnbanUserMutation from "../../../../../hooks/api/post/useUserUnbanUserMutation";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import { formatRoles } from "@components/lib/utils";

export const columns: ColumnDef<AdminUser>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CREATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          USERNAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("username")}</div>
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          FULL NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div>{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },

  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ROLE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">
        {formatRoles(row.getValue("role"))}
      </div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="w-full text-center">ACTIONS</div>;
    },
    cell: ({ row }) => {
      const user = row.original;
      const navigate = useNavigate();
      const { mutateAsync: unbanUserMutation, isLoading: unbanLoading } =
        useUserUnbanUserMutation();
      const handleUnban = async () => {
        await unbanUserMutation(user.id || "");
        toast.success("User Remover Ban Successfully!");
        navigate("/admin/record/users");
      };
      if (unbanLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
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
                <AlertDialogTrigger className="w-full text-start">
                  Remove Ban
                </AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remove user ban?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will remove the user account ban from doing any
                activity within the website.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUnban}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { AdminUser } from "../../../../api/openapi";
import { format } from "date-fns";
import Loader from "../../../../icons/Loader";
import { toast } from "sonner";
import useDeleteUserAdminDisable from "../../../../hooks/api/delete/useDeleteUserAdminDisable";
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
import { formatRoles } from "../../../lib/utils";

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
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EMAIL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    }
  },
  {
    accessorKey: "isbanned",
    header: () => {
      return <div className="text-center">STATUS</div>;
    },
    cell: ({ row }) => (
      <div className="text-center">
        {row.getValue("isbanned") === false ? "Active" : "Banned"}{" "}
      </div>
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
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {formatRoles(row.original.role || "")}
        </div>
      );
    }
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
    cell: ({ row }) => {
      const users = row.original;
      const navigate = useNavigate();
      const { mutateAsync: disableAdmin, isLoading: activeLoading } =
        useDeleteUserAdminDisable();
      const handleDisable = async () => {
        await disableAdmin(users.id || "");
        toast.success("Disabled Successfully!");
        navigate("/admin/record/admins?tab=disabled");
      };
      if (activeLoading) {
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
                onClick={() => navigator.clipboard.writeText(users.id || "")}
              >
                Copy admin ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to={`/admin/record/admins/set-permission/${users.id}`}>
                <DropdownMenuItem>View admin</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <AlertDialogTrigger> Disable Admin</AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Disable this account?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will result in the deactivation of the admin
                account, the administrator will unable to sign in to the system.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDisable} className="bg-red-500">
                Disable
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
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
import { toast } from "sonner";
import usePutUserAdminEnable from "../../../../hooks/api/put/usePutUserAdminEnable";
import Loader from "../../../../icons/Loader";
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
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "username",
    header: "Username"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "isbanned",
    header: "Status",
    cell: ({ row }) => (
      <div>{row.getValue("isbanned") === false ? "Active" : "Banned"} </div>
    )
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <div>{formatRoles(row.original.role || "")}</div>;
    }
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const users = row.original;
      const navigate = useNavigate();
      const { mutateAsync: enableAdmin, isLoading: activeLoading } =
        usePutUserAdminEnable();
      const handleEnable = async () => {
        await enableAdmin(users.id || "");
        toast.success("Enabled Successfully!");
        navigate("/admin/record/admins?tab=active");
      };
      if (activeLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <AlertDialog>
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
                onClick={() => navigator.clipboard.writeText(users.id || "")}
              >
                Copy admin ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to={`/admin/record/admins/set-permission/${users.id}`}>
                <DropdownMenuItem>View admin</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <AlertDialogTrigger>Enable admin</AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Activate this admin account?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will result in the activation of the admin account,
                the administrator will able to sign in again to the system.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleEnable}>
                Activate
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

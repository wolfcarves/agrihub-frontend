import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../ui/dropdown-menu";
import { Button } from "../../../../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { formatRoles } from "../../../../lib/utils";
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
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import useFarmKickMember from "../../../../../hooks/api/post/useFarmKickMember";
import Loader from "../../../../../icons/Loader";
import { toast } from "sonner";
import useFarmAssignHeadMutation from "../../../../../hooks/api/post/useFarmAssignHeadMutation";
import useFarmUnassignHeadMutation from "../../../../../hooks/api/post/useFarmUnassignHeadMutation";
import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useGetUserProfileQuery from "../../../../../hooks/api/get/useGetUserProfileQuery";
import { format } from "date-fns";
import { FarmerApplication } from "../../../../../api/openapi";

export const columns: ColumnDef<FarmerApplication>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return `${format(new Date(row.original.createdat || ""), "PPP")}`;
    }
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { data } = useGetUserProfileQuery(row.original.username || "");
      const { data: useDAta } = useAuth();
      if (useDAta?.id === row.original.id) {
        return (
          <div className="text-green-700">{`${data?.firstname} ${row.original.lastname} (You)`}</div>
        );
      }
      return `${data?.firstname} ${row.original.lastname}`;
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=" capitalize">{row.original.status}</div>;
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { data: users } = useAuth();
      const navigate = useNavigate();
      const handleProfile = () => {
        navigate(`/users/${user.id}/${user.username}`);
      };
      const handleApplication = () => {
        navigate(
          `/community/my-community/${users?.farm_id}/application/${user.username}/${user.id}`
        );
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleProfile}>
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleApplication}>
                View Application
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    }
  }
];

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
import { FarmMember } from "../../../../../api/openapi";
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

export const columns: ColumnDef<FarmMember>[] = [
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
      return `${row.original.firstname} ${row.original.lastname}`;
    }
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return formatRoles(row.original.role);
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const navigate = useNavigate();
      const { isMember, isAllowed } = useCommunityAutorization();
      const handleProfile = () => {
        navigate(`/users/${user.id}/${user.username}`);
      };
      const { mutateAsync: kickMemberMutation, isLoading: kickLoading } =
        useFarmKickMember();
      const handleKick = async () => {
        try {
          await kickMemberMutation(user.id || "");
          toast.success("Removed From Community Successfully!");
        } catch (error: any) {
          toast.error(error.message);
        }
      };
      if (kickLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <AlertDialog>
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

              {isMember && isAllowed && user.role !== "farm_head" && (
                <DropdownMenuItem>
                  <AlertDialogTrigger>Kick Member</AlertDialogTrigger>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remove user in the community?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will remove the user account from the community and
                the user will no longer have access of the community resources.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleKick}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

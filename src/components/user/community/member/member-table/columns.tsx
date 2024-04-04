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
import useFarmAssignHeadMutation from "../../../../../hooks/api/post/useFarmAssignHeadMutation";
import useFarmUnassignHeadMutation from "../../../../../hooks/api/post/useFarmUnassignHeadMutation";
import { useState } from "react";

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
      const [showPromote, setShowPromote] = useState<boolean>(false);
      const [showDemote, setShowDemote] = useState(false);
      const [showKick, setShowKick] = useState(false);
      const user = row.original;
      const navigate = useNavigate();
      const { isMember, isAllowed } = useCommunityAutorization();
      const handleProfile = () => {
        navigate(`/users/${user.id}/${user.username}`);
      };

      //kick member
      const { mutateAsync: kickMemberMutation, isLoading: kickLoading } =
        useFarmKickMember();
      const handleKick = async () => {
        try {
          await kickMemberMutation(user.id || "");
          toast.success("Removed From Community Successfully!");
          setShowKick(false);
        } catch (error: any) {
          toast.error(error.body.message);
        }
      };

      //assign head
      const { mutateAsync: assignHeadMutation, isLoading: assignLoading } =
        useFarmAssignHeadMutation();
      const handleAssign = async () => {
        try {
          await assignHeadMutation(user.id || "");
          toast.success(`${user.firstname} was promoted to Farm Head!`);
          setShowPromote(false);
        } catch (error: any) {
          toast.error(error.body.message);
          console.log(user.id);
        }
      };

      //unassign head
      const { mutateAsync: unassignHeadMutation, isLoading: unassignLoading } =
        useFarmUnassignHeadMutation();
      const handleUnassign = async () => {
        try {
          await unassignHeadMutation(user.id || "");
          toast.success(`${user.firstname} was demoted to Farmer!`);
          setShowDemote(false);
        } catch (error: any) {
          toast.error(error.body.message);
        }
      };
      if (kickLoading || assignLoading || unassignLoading) {
        return <Loader isVisible={true} />;
      }

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
              {isMember && isAllowed && user.role !== "farm_head" && (
                <DropdownMenuItem onClick={() => setShowPromote(true)}>
                  Promote to Farm Head
                </DropdownMenuItem>
              )}

              {isMember && isAllowed && user.role !== "farmer" && (
                <DropdownMenuItem onClick={() => setShowDemote(true)}>
                  Demote to Farmer
                </DropdownMenuItem>
              )}

              {isMember && isAllowed && user.role !== "farm_head" && (
                <DropdownMenuItem onClick={() => setShowKick(true)}>
                  Kick Member
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog open={showPromote}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will change the role from Farmer to Farm Head and
                  the user will have access of the community resources exclusive
                  for Farm Head.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowPromote(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleAssign}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog open={showDemote}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will demote the Farm Head to Farmer from the
                  community and the user will no longer have access of the
                  community resources exclusive for Farm.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowDemote(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleUnassign}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog open={showKick}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Remove user in the community?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will remove the user account from the community
                  and the user will no longer have access of the community
                  resources.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setShowKick(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleKick}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      );
    }
  }
];

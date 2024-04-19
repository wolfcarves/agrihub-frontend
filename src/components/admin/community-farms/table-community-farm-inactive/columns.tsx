import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  CommunityFarmData,
  FarmInactiveDetails,
  InactiveFarmReport,
  SeedlingRequestListItem
} from "@api/openapi";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Badge } from "@components/ui/badge";
import { useNavigate } from "react-router-dom";
import usePutCommunityRestore from "../../../../hooks/api/put/usePutCommunityRestore";
import { toast } from "sonner";
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
import { formatMonth } from "../../../lib/utils";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<FarmInactiveDetails>[] = [
  // {
  //   accessorKey: "createdat",
  //   header: "Created At",
  //   cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  // },
  {
    accessorKey: "farm_name",
    header: "Farm"
  },
  {
    accessorKey: "last_report_date",
    header: "Last Report",
    cell: ({ row }) =>
      format(new Date(row.original.last_report_date || ""), "PPP")
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div>{formatMonth(row.original.months_since_last_report || "")}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const request = row.original;
      const navigate = useNavigate();

      const { mutateAsync: unarchiveMaterial, isLoading: archieveLoading } =
        usePutCommunityRestore();
      const handleUnrchive = async () => {
        await unarchiveMaterial(request.farm_id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/community/farms/active?page=1");
      };
      if (archieveLoading) {
        return <Loader isVisible={true} />;
      }
      const handleView = async () => {
        navigate(`/admin/community/farms/view/${request.farm_id}`);
      };

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
                onClick={() =>
                  navigator.clipboard.writeText(String(request.farm_id))
                }
              >
                Copy application ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
              <DropdownMenuItem>
                <AlertDialogTrigger>Unarchive</AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This community will be visible
                again in community farm list.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUnrchive}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

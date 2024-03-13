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
import { CommunityFarmData, SeedlingRequestListItem } from "@api/openapi";
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
import Loader from "../../../../icons/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useDeleteCommunityArchive from "../../../../hooks/api/delete/useDeleteCommunityArchive";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<CommunityFarmData>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "farm_name",
    header: "Farm"
  },
  {
    accessorKey: "district",
    header: "District"
  },
  {
    accessorKey: "location",
    header: "Location"
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const request = row.original;
      const navigate = useNavigate();

      const { mutateAsync: archiveMaterial, isLoading: archieveLoading } =
        useDeleteCommunityArchive();
      const handleArchive = async () => {
        await archiveMaterial(request.id || "");
        toast.success("Archive Successfully!");
        navigate("/admin/community/farms/archive");
      };
      if (archieveLoading) {
        return <Loader isVisible={true} />;
      }

      return (
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
              onClick={() => navigator.clipboard.writeText(String(request.id))}
            >
              Copy application ID
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleArchive}>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

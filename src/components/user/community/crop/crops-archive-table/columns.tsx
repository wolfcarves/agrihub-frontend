import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {
  ArchivedCrop,
  CommunityCropReportResponseItem
} from "../../../../../api/openapi";
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
import { format } from "date-fns";
import usePutFarmCropUnarchive from "../../../../../hooks/api/put/usePutFarmCropUnarchive";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";

export const columns: ColumnDef<ArchivedCrop>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar className="w-10 h-10 border rounded">
        <AvatarImage
          src={row.original.image}
          className="w-10 h-10 border rounded"
        />
        <AvatarFallback className="rounded">
          {row.original.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    )
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Crop
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },

  {
    accessorKey: "growth_span",
    header: "Growth Span",
    cell: ({ row }) => {
      return `${row.original.growth_span} Months`;
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const crop = row.original;
      const { mutateAsync: unarchiveCrop } = usePutFarmCropUnarchive();
      const handleDelete = () => {
        unarchiveCrop(crop.id);
        toast.success("Unarchived Successfully!");
      };

      return (
        <Button onClick={handleDelete} className="bg-[#27272A]">
          Unarchive
        </Button>
      );
    }
  }
];

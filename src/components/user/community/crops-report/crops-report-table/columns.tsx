import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import { CommunityCropReportResponseItem } from "../../../../../api/openapi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../ui/dropdown-menu";
import { Button } from "../../../../ui/button";
import { MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

export const columns: ColumnDef<CommunityCropReportResponseItem>[] = [
  {
    accessorKey: "crop_name",
    header: "Crop"
  },
  {
    accessorKey: "date_harvested",
    header: "Date Harvested",
    cell: ({ row }) =>
      format(new Date(row.original.date_harvested || ""), "PPP")
  },
  {
    accessorKey: "harvested_qty",
    header: "Quantity"
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const farm = row.original;
      const navigate = useNavigate();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-1 w-8 p-0 focus-visible:ring-0 "
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            //   onClick={() => navigate(`/admin/farm/application/${farm.id}`)}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

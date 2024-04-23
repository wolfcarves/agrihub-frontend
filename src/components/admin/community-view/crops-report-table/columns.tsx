import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { CommunityCropReportResponseItem } from "../../../../api/openapi";

export const columns: ColumnDef<CommunityCropReportResponseItem>[] = [
  {
    accessorKey: "crop_name",
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
    accessorKey: "date_harvested",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Harvested
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.date_harvested || ""), "PPP")
  },
  {
    accessorKey: "harvested_qty",
    header: "Harvested Quantity"
  },
  {
    accessorKey: "withered_crops",
    header: "Withered Quantity"
  }
];

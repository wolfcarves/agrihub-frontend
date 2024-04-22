import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { formatDate } from "../../../lib/utils";
import { CommunityFarmProblem } from "../../../../api/openapi";
import { Button } from "../../../ui/button";

export const columns: ColumnDef<CommunityFarmProblem>[] = [
  {
    accessorKey: "date_noticed",
    header: "Date Notice",
    cell: ({ row }) => formatDate(row.original.date_noticed || "")
  },
  {
    accessorKey: "problem",
    header: "Problem"
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
  }
];

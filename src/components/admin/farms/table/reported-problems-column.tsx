import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { CommunityFarmProblem } from "@api/openapi";

import { Button } from "../../../ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<CommunityFarmProblem>[] = [
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
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;
      const navigate = useNavigate();

      return (
        <>
          <Button
            type="button"
            className="h-6 text-xs"
            onClick={() => navigate(`/admin/farm/problems/view/${item.fp_id}`)}
          >
            View
          </Button>
        </>
      );
    }
  }
];

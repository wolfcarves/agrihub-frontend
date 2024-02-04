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
import { format } from "date-fns";
import { MemberSchema } from "../../../../../constants/data";

export const columns: ColumnDef<MemberSchema>[] = [
  {
    accessorKey: "name",
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
    }
  },
  {
    accessorKey: "applicationStatus",
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
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const farm = row.original;
      const navigate = useNavigate();

      return (
        <Button
          variant={"outline_border"}
          className=" text-xs h-7 px-3 focus-visible:ring-0 "
        >
          View Profile
        </Button>
      );
    }
  }
];

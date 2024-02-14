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
      const handleProfile = () => {
        navigate(`/user/${user.username}/${user.id}`);
      };
      return (
        <Button
          variant={"outline_border"}
          className=" text-xs h-7 px-3 focus-visible:ring-0 "
          onClick={handleProfile}
        >
          View Profile
        </Button>
      );
    }
  }
];

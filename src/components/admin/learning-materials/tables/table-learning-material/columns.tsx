import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { LearningMaterial } from "@api/openapi";
import { Link } from "react-router-dom";
import { format } from "date-fns";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<LearningMaterial>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CREATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TITLE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    }
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("status")}</div>
    )
  },
  {
    accessorKey: "language",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          LANGUAGE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("language")}</div>
    )
  },
  {
    id: "actions",
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy material ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/learnings/view/${payment.id}`}>
              <DropdownMenuItem>View/update material</DropdownMenuItem>
            </Link>
            <Link to={`/learning-materials/view/${payment.id}`}>
              <DropdownMenuItem>View material in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

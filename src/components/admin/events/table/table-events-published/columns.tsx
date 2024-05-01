import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import { EventDetails } from "../../../../../api/openapi";
import { format } from "date-fns";

export const columns: ColumnDef<EventDetails>[] = [
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
    accessorKey: "event_start",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EVENT START
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.event_start || ""), "PPP' 'HH:mm aaaa")
  },
  {
    accessorKey: "event_end",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EVENT END
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) =>
      row.original.event_end
        ? format(new Date(row.original.event_end || ""), "PPP' 'HH:mm aaaa")
        : "---"
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
    },
    cell: ({ row }) => <div>{row.getValue("title")}</div>
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TYPE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("type")}</div>
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
    id: "actions",
    enableHiding: false,
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
              onClick={() => navigator.clipboard.writeText(payment.id || "")}
            >
              Copy event ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/events/view/${payment.id}`}>
              <DropdownMenuItem>View/update event</DropdownMenuItem>
            </Link>
            <Link to={`/events/${payment.id}`}>
              <DropdownMenuItem>View event in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

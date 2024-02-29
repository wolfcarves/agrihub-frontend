import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CropData } from "@api/openapi";

export const columns: ColumnDef<CropData>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "growth_span",
    header: "Growth Span",
    cell: ({ row }) => <div>{row.getValue("growth_span")} Months</div>
  },
  {
    accessorKey: "isYield",
    header: "Type",
    cell: ({ row }) => (
      <div>{row.getValue("isYield") ? "Yieldable" : "Not Yieldable"}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

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
              onClick={() => navigator.clipboard.writeText(payment.id || "")}
            >
              Copy blog ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/blogs/view/${payment.id}`}>
              <DropdownMenuItem>View/update blog</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

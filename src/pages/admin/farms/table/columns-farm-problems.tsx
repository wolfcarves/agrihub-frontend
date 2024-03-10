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
import { FarmProblem } from "@api/openapi";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export const columns: ColumnDef<FarmProblem>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div>{new Date(row?.original?.updatedat as string).toDateString()}</div>
    )
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <div>{new Date(row?.original?.updatedat as string).toDateString()}</div>
    )
  },
  {
    accessorKey: "problem",
    header: "Problem",
    cell: ({ row }) => <div>{row.original.problem}</div>
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{parse(row.original.description ?? "")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const problem = row.original;

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
              onClick={() =>
                navigator.clipboard.writeText(problem?.id as string)
              }
            >
              Copy problem ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/community/problems/view/${problem?.id}`}>
              <DropdownMenuItem>View problem details</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

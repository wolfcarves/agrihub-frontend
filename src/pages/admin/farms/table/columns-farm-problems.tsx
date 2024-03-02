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

export const data: Problems[] = [
  {
    id: "f1",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
    problem: "Example Problem 1",
    description: "Example Description 1"
  },
  {
    id: "f2",
    createdAt: new Date("2023-02-20"),
    updatedAt: new Date("2023-02-20"),
    problem: "Example Problem 2",
    description: "Example Description 2"
  }
];

export type Problems = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  problem: string;
  description: string;
};

export const columns: ColumnDef<Problems>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.original.createdAt.toDateString()}</div>
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <div>{row.original.updatedAt.toDateString()}</div>
  },
  {
    accessorKey: "problem",
    header: "Problem",
    cell: ({ row }) => <div>{row.original.problem}</div>
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{row.original.description}</div>
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
              onClick={() => navigator.clipboard.writeText(problem.id)}
            >
              Copy problem ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View problem details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

"use client";

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

export const data: ActivityLog[] = [
  {
    id: "al1",
    timestamp: "2023-01-15 08:30:00",
    actor: "Admin One",
    role: "Super Admin",
    action: "Created User",
    outcome: "Success",
    section: "User Management"
  },
  {
    id: "al2",
    timestamp: "2023-02-20 10:15:00",
    actor: "Admin Two",
    role: "Moderator",
    action: "Updated Article",
    outcome: "Success",
    section: "Content Management"
  },
  {
    id: "al3",
    timestamp: "2023-03-10 14:45:00",
    actor: "Admin Three",
    role: "Support",
    action: "Deleted Comment",
    outcome: "Failure",
    section: "Content Management"
  }
];

export type ActivityLog = {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  outcome: "Success" | "Failure";
  section: string;
};

export const columns: ColumnDef<ActivityLog>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => <div>{row.getValue("timestamp")}</div>
  },
  {
    accessorKey: "actor",
    header: "Actor",
    cell: ({ row }) => <div>{row.getValue("actor")}</div>
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <div>{row.getValue("action")}</div>
  },
  {
    accessorKey: "outcome",
    header: "Outcome",
    cell: ({ row }) => <div>{row.getValue("outcome")}</div>
  },
  {
    accessorKey: "section",
    header: "Section",
    cell: ({ row }) => <div>{row.getValue("section")}</div>
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy log ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View activity details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

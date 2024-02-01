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

export const data: Admin[] = [
  {
    id: "a1",
    createdAt: "2023-01-15",
    username: "admin1",
    fullName: "Admin One",
    status: "active",
    role: "Super Admin"
  },
  {
    id: "a2",
    createdAt: "2023-02-20",
    username: "admin2",
    fullName: "Admin Two",
    status: "active",
    role: "Moderator"
  },
  {
    id: "a3",
    createdAt: "2023-03-10",
    username: "admin3",
    fullName: "Admin Three",
    status: "inactive",
    role: "Support"
  }
];

export type Admin = {
  id: string;
  createdAt: string;
  username: string;
  fullName: string;
  status: "active" | "inactive";
  role: string;
};

export const columns: ColumnDef<Admin>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => <div>{row.getValue("username")}</div>
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => <div>{row.getValue("fullName")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>
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
              Copy admin ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View admin</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

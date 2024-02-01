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

export const data: User[] = [
  {
    id: "u1",
    createdAt: "2023-01-15",
    username: "johndoe",
    fullName: "John Doe",
    verificationLevel: "Verified",
    role: "Member"
  },
  {
    id: "u2",
    createdAt: "2023-02-20",
    username: "janedoe",
    fullName: "Jane Doe",
    verificationLevel: "Not Verified",
    role: "Member"
  },
  {
    id: "u3",
    createdAt: "2023-03-10",
    username: "alice",
    fullName: "Alice Johnson",
    verificationLevel: "Verified",
    role: "Admin"
  },
  {
    id: "u4",
    createdAt: "2023-04-05",
    username: "bob",
    fullName: "Bob Brown",
    verificationLevel: "Not Verified",
    role: "Moderator"
  }
];

export type User = {
  id: string;
  createdAt: string;
  username: string;
  fullName: string;
  verificationLevel: "Verified" | "Not Verified";
  role: "Member" | "Admin" | "Moderator";
};

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "verificationLevel",
    header: "Verification Level",
    cell: ({ row }) => <div>{row.getValue("verificationLevel")}</div>
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
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

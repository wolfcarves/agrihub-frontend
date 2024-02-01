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

export const data: Farmer[] = [
  {
    id: "f1",
    createdAt: "2023-01-15",
    name: "John Doe",
    district: "Example District",
    farm: "Doe's Farm",
    role: "Farmer",
    status: "active"
  },
  {
    id: "f2",
    createdAt: "2023-02-20",
    name: "Jane Smith",
    district: "Sample District",
    farm: "Smith's Farm",
    role: "Farmer",
    status: "active"
  },
  {
    id: "f3",
    createdAt: "2023-03-10",
    name: "David Johnson",
    district: "Test District",
    farm: "Johnson's Farm",
    role: "Farm Head",
    status: "inactive"
  },
  {
    id: "f4",
    createdAt: "2023-04-05",
    name: "Mary Brown",
    district: "Trial District",
    farm: "Brown's Farm",
    role: "Farmer",
    status: "active"
  }
];

export type Farmer = {
  id: string;
  createdAt: string;
  name: string;
  district: string;
  farm: string;
  role: string;
  status: "active" | "inactive";
};

export const columns: ColumnDef<Farmer>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "district",
    header: "District",
    cell: ({ row }) => <div>{row.getValue("district")}</div>
  },
  {
    accessorKey: "farm",
    header: "Farm",
    cell: ({ row }) => <div>{row.getValue("farm")}</div>
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
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
              Copy farmer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View farmer details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

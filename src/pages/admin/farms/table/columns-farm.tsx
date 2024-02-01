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

export const data: Farm[] = [
  {
    id: "f1",
    createdAt: "2023-01-15",
    farm: "Sunshine Farm",
    district: "District 1",
    location: "123 Main Street"
  },
  {
    id: "f2",
    createdAt: "2023-02-20",
    farm: "Green Acres",
    district: "District 4",
    location: "456 Elm Street"
  },
  {
    id: "f3",
    createdAt: "2023-03-10",
    farm: "Golden Fields",
    district: "District 3",
    location: "789 Oak Street"
  }
];

export type Farm = {
  id: string;
  createdAt: string;
  farm: string;
  district: string;
  location: string;
};

export const columns: ColumnDef<Farm>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "farm",
    header: "Farm",
    cell: ({ row }) => <div>{row.getValue("farm")}</div>
  },
  {
    accessorKey: "district",
    header: "District",
    cell: ({ row }) => <div>{row.getValue("district")}</div>
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>
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
              Copy farmt ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View farm details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

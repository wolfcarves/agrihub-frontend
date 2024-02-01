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

export const data: ReportedFarmer[] = [
  {
    id: "rf1",
    createdAt: "2023-01-15",
    reported: "John Doe",
    reporter: "Jane Smith",
    role: "Farmer",
    status: "pending",
    severity: "low"
  },
  {
    id: "rf2",
    createdAt: "2023-02-20",
    reported: "Alice Johnson",
    reporter: "Bob Brown",
    role: "Farmer",
    status: "resolved",
    severity: "medium"
  },
  {
    id: "rf3",
    createdAt: "2023-03-10",
    reported: "Michael Lee",
    reporter: "Sarah Miller",
    role: "Farmer",
    status: "pending",
    severity: "high"
  }
];

export type ReportedFarmer = {
  id: string;
  createdAt: string;
  reported: string;
  reporter: string;
  role: string;
  status: "pending" | "resolved";
  severity: "low" | "medium" | "high";
};

export const columns: ColumnDef<ReportedFarmer>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "reported",
    header: "Reported",
    cell: ({ row }) => <div>{row.getValue("reported")}</div>
  },
  {
    accessorKey: "reporter",
    header: "Reporter",
    cell: ({ row }) => <div>{row.getValue("reporter")}</div>
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
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => <div>{row.getValue("severity")}</div>
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
              Copy report ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View report details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

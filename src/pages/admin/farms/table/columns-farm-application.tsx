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

export const data: FarmApplication[] = [
  {
    id: "fa1",
    createdAt: "2023-01-15",
    farm: "Sunshine Farm",
    district: "District 3",
    applicant: "John Doe",
    location: "123 Main Street",
    status: "pending"
  },
  {
    id: "fa2",
    createdAt: "2023-02-20",
    farm: "Green Acres",
    district: "District 1",
    applicant: "Jane Smith",
    location: "456 Elm Street",
    status: "approved"
  },
  {
    id: "fa3",
    createdAt: "2023-03-10",
    farm: "Golden Fields",
    district: "District 1",
    applicant: "Alice Johnson",
    location: "789 Oak Street",
    status: "rejected"
  }
];

export type FarmApplication = {
  id: string;
  createdAt: string;
  farm: string;
  district: string;
  applicant: string;
  location: string;
  status: "pending" | "approved" | "rejected";
};

export const columns: ColumnDef<FarmApplication>[] = [
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
    accessorKey: "applicant",
    header: "Applicant",
    cell: ({ row }) => <div>{row.getValue("applicant")}</div>
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>
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
              Copy application ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View application</DropdownMenuItem>
            <DropdownMenuItem>Approve application</DropdownMenuItem>
            <DropdownMenuItem>Reject application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

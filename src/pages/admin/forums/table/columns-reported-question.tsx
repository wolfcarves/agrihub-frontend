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

export const data: ReportedQuestion[] = [
  {
    id: "i1",
    createdAt: "2023-01-15",
    updatedAt: "2023-01-20",
    question: "How to prevent crop diseases in tomato plants?",
    reason: "Increased humidity in greenhouse",
    status: "resolved",
    severity: "medium"
  },
  {
    id: "i2",
    createdAt: "2023-02-20",
    updatedAt: "2023-02-25",
    question: "What are the symptoms of nutrient deficiency in maize?",
    reason: "Poor soil fertility",
    status: "unresolved",
    severity: "high"
  },
  {
    id: "i3",
    createdAt: "2023-03-10",
    updatedAt: "2023-03-15",
    question: "How to control weeds in organic farming?",
    reason: "Lack of effective weed management strategy",
    status: "in progress",
    severity: "low"
  },
  {
    id: "i4",
    createdAt: "2023-04-05",
    updatedAt: "2023-04-10",
    question: "What causes yellowing of citrus leaves?",
    reason: "Possible pest infestation",
    status: "unresolved",
    severity: "medium"
  }
];

export type ReportedQuestion = {
  id: string;
  createdAt: string;
  updatedAt: string;
  question: string;
  reason: string;
  status: "resolved" | "unresolved" | "in progress";
  severity: "low" | "medium" | "high";
};

export const columns: ColumnDef<ReportedQuestion>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <div>{row.getValue("updatedAt")}</div>
  },
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ row }) => <div>{row.getValue("question")}</div>
  },
  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }) => <div>{row.getValue("reason")}</div>
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
            <DropdownMenuItem>View reported question in page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

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

export const data: Question[] = [
  {
    id: "q1",
    createdAt: "2023-01-15",
    title: "Best practices for organic farming",
    answerCount: 5,
    status: "posted",
    tags: ["Organic Farming", "Farming Practices"]
  },
  {
    id: "q2",
    createdAt: "2023-02-20",
    title: "Effective pest control methods for crops",
    answerCount: 3,
    status: "posted",
    tags: ["Pest Control", "Crop Management"]
  },
  {
    id: "q3",
    createdAt: "2023-03-10",
    title: "Water conservation techniques in agriculture",
    answerCount: 8,
    status: "archive",
    tags: ["Water Conservation", "Agricultural Techniques"]
  },
  {
    id: "q4",
    createdAt: "2023-04-05",
    title: "Improving soil fertility naturally",
    answerCount: 2,
    status: "posted",
    tags: ["Soil Fertility", "Natural Farming"]
  }
];

export type Question = {
  id: string;
  createdAt: string;
  title: string;
  answerCount: number;
  status: "posted" | "archive";
  tags: string[];
};

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>
  },
  {
    accessorKey: "answerCount",
    header: "Answer Count",
    cell: ({ row }) => <div>{row.getValue("answerCount")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => <div>{row.getValue("tags").join(", ")}</div>
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
              Copy question ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View question details</DropdownMenuItem>
            <DropdownMenuItem>View question in page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

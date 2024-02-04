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

export const data: Tag[] = [
  {
    id: "t1",
    createdAt: "2023-01-15",
    updatedAt: "2023-01-20",
    name: "Pesticides",
    detail: "Use of pesticides in agriculture"
  },
  {
    id: "t2",
    createdAt: "2023-02-20",
    updatedAt: "2023-02-25",
    name: "Organic Farming",
    detail: "Practices of organic farming"
  },
  {
    id: "t3",
    createdAt: "2023-03-10",
    updatedAt: "2023-03-15",
    name: "Soil Health",
    detail: "Maintaining soil fertility and health"
  },
  {
    id: "t4",
    createdAt: "2023-04-05",
    updatedAt: "2023-04-10",
    name: "Crop Rotation",
    detail: "Benefits and methods of crop rotation"
  }
];

export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  detail: string;
};

export const columns: ColumnDef<Tag>[] = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "detail",
    header: "Detail",
    cell: ({ row }) => <div>{row.getValue("detail")}</div>
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
              Copy tag ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View/update tag</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

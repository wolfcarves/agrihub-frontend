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
import { Link } from "react-router-dom";

export const data: Blog[] = [
  {
    id: "1",
    createdAt: "2023-01-15",
    updatedAt: "2023-01-20",
    title: "Introduction to Sustainable Agriculture",
    author: "John Doe",
    tags: ["Sustainability", "Agriculture"],
    status: "posted"
  },
  {
    id: "2",
    createdAt: "2023-02-20",
    updatedAt: "2023-02-25",
    title: "5 Tips for Organic Gardening",
    author: "Jane Smith",
    tags: ["Organic Gardening", "Tips"],
    status: "draft"
  },
  {
    id: "3",
    createdAt: "2023-03-10",
    updatedAt: "2023-03-15",
    title: "Maximizing Crop Yields: Techniques and Strategies",
    author: "Alice Johnson",
    tags: ["Crop Yields", "Techniques"],
    status: "posted"
  },
  {
    id: "4",
    createdAt: "2023-04-05",
    updatedAt: "2023-04-10",
    title: "The Importance of Soil Health in Agriculture",
    author: "Bob Brown",
    tags: ["Soil Health", "Agriculture"],
    status: "archived"
  }
];

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  author: string;
  tags: string[];
  status: "posted" | "draft" | "archived";
};

export const columns: ColumnDef<Blog>[] = [
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
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => <div>{row.getValue("author")}</div>
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => <div>{row.getValue("tags").join(", ")}</div>
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
              Copy blog ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/blogs/view/${payment.id}`}>
              <DropdownMenuItem>View/update article</DropdownMenuItem>
            </Link>
            <Link to={`/blogs/view/${payment.id}`}>
              <DropdownMenuItem>View article in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

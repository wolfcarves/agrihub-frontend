"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

export const data: Article[] = [
  {
    id: "a1",
    createdAt: "2023-01-15",
    title: "The Benefits of Cover Crops in Agriculture",
    status: "published",
    tags: ["Cover Crops", "Agriculture"]
  },
  {
    id: "a2",
    createdAt: "2023-02-20",
    title: "Understanding Soil pH: Importance and Management",
    status: "draft",
    tags: ["Soil pH", "Soil Management"]
  },
  {
    id: "a3",
    createdAt: "2023-03-10",
    title: "Integrated Pest Management: A Sustainable Approach",
    status: "published",
    tags: ["Pest Management", "Sustainability"]
  },
  {
    id: "a4",
    createdAt: "2023-04-05",
    title: "The Role of Nitrogen in Plant Growth",
    status: "archived",
    tags: ["Nitrogen", "Plant Growth"]
  }
];

export type Article = {
  id: string;
  createdAt: string;
  title: string;
  status: "published" | "draft" | "archived";
  tags: string[];
};

export const columns: ColumnDef<Article>[] = [
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
              Copy article ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/articles/view/${payment.id}`}>
              <DropdownMenuItem>View/update article</DropdownMenuItem>
            </Link>
            <Link to={`/articles/view/${payment.id}`}>
              <DropdownMenuItem>View article in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

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

export const data: LearningMaterial[] = [
  {
    id: "lm1",
    createdAt: "2023-01-15",
    title: "Introduction to Organic Farming",
    type: "Video",
    status: "published",
    language: "English",
    tags: ["Organic Farming", "Introduction", "Agriculture"]
  },
  {
    id: "lm2",
    createdAt: "2023-02-20",
    title: "Soil Health and Management",
    type: "Article",
    status: "archived",
    language: "Spanish",
    tags: ["Soil Health", "Soil Management", "Agriculture"]
  },
  {
    id: "lm3",
    createdAt: "2023-03-10",
    title: "Integrated Pest Management Handbook",
    type: "Book",
    status: "published",
    language: "English",
    tags: ["Pest Management", "Handbook", "Agriculture"]
  },
  {
    id: "lm4",
    createdAt: "2023-04-05",
    title: "Crop Rotation Infographic",
    type: "Infographic",
    status: "draft",
    language: "Multiple",
    tags: ["Crop Rotation", "Infographic", "Agriculture"]
  }
];

export type LearningMaterial = {
  id: string;
  createdAt: string;
  title: string;
  type: "Video" | "Article" | "Book" | "Infographic";
  status: "draft" | "published" | "archived";
  language: string;
  tags: string[];
};

export const columns: ColumnDef<LearningMaterial>[] = [
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
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div>{row.getValue("type")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => <div>{row.getValue("language")}</div>
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
              Copy material ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/learnings/view/${payment.id}`}>
              <DropdownMenuItem>View/update material</DropdownMenuItem>
            </Link>
            <Link to={`/learning-materials/view/${payment.id}`}>
              <DropdownMenuItem>View material in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

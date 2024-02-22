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

import { FarmApplicationData } from "@api/openapi";
import { formatDate } from "@components/lib/utils";
import { useNavigate } from "react-router-dom";

export const columns: ColumnDef<FarmApplicationData>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => <div>{formatDate(row.getValue("createdat"))}</div>
  },
  {
    accessorKey: "farm_name",
    header: "Farm",
    cell: ({ row }) => <div>{row.getValue("farm_name")}</div>
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const farm = row.original;
      const navigate = useNavigate();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-1 w-8 p-0 focus-visible:ring-0 "
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigate(`/admin/farm/application/${farm.id}`)}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

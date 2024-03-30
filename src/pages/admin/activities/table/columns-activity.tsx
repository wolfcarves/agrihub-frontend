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
import { AuditLog } from "../../../../api/openapi";
import { format } from "date-fns";

export const columns: ColumnDef<AuditLog>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    header: "Actor",
    cell: ({ row }) => (
      <div>{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <div>{row.getValue("action")}</div>
  },
  {
    accessorKey: "section",
    header: "Section",
    cell: ({ row }) => <div>{row.getValue("section")}</div>
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
              onClick={() => navigator.clipboard.writeText(payment.id || "")}
            >
              Copy log ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View activity details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

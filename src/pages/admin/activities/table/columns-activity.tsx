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
import { formatDateTime, formatRoles } from "../../../../components/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { DialogHeader } from "@components/ui/custom/dialog/dialog";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Badge } from "@components/ui/badge";

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
    cell: ({ row }) => (
      <div className=" capitalize">{formatRoles(row.getValue("role"))}</div>
    )
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
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const activity = row.original;
      return (
        <Dialog>
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
                onClick={() => navigator.clipboard.writeText(activity.id || "")}
              >
                Copy log ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger>View Activity</DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Activity #{activity?.id}</DialogTitle>
              <DialogDescription>
                Action taken: {formatDateTime(activity?.createdat || "")}
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-4 justify-between items-center">
              <div className="w-full">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <div className="flex gap-4 items-center">
                  <div className="w-full">
                    <Input
                      id="name"
                      defaultValue={
                        activity?.firstname + " " + activity?.lastname
                      }
                      className="w-full"
                      disabled
                    />
                  </div>
                  <div className=" flex justify-end">
                    <Badge>{activity?.role}</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full">
                <Label htmlFor="name" className="text-right">
                  Section
                </Label>
                <Input
                  id="name"
                  defaultValue={activity?.section}
                  className="w-full"
                  disabled
                />
              </div>
              <div className="w-full">
                <Label htmlFor="name" className="text-right">
                  Action
                </Label>

                <Input
                  id="name"
                  defaultValue={activity?.action}
                  className="w-full"
                  disabled
                />
              </div>
            </div>
            <DialogFooter className="w-full justify-end">
              <DialogClose>
                <Button variant="secondary">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

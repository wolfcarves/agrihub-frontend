import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Badge } from "@components/ui/badge";
import DialogToolCommunicate from "../dialog-tool-request/dialog-tool-communicate";
import { ToolRequest } from "../../../../api/openapi";
import { format } from "date-fns";
import { formatSelectedOrganizations } from "../dialog-tool-request/dialog-tool-accept";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<ToolRequest>[] = [
  {
    accessorKey: "updatedat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          UPDATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.updatedat || ""), "MMM dd, yyyy")
  },
  {
    accessorKey: "tool_requested",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TOOL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("tool_requested")}</div>
  },
  {
    accessorKey: "farm_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          REQUESTED BY
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("farm_name")}</div>
  },
  {
    accessorKey: "quantity_requested",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          QUANTITY REQUESTED
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("quantity_requested")}</div>
  },
  {
    accessorKey: "accepted_by",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ACCEPTED BY
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className=" line-clamp-1">
        {formatSelectedOrganizations(row.original.accepted_by || [])}
      </div>
    )
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className=" capitalize">{row.getValue("status")}</div>
    )
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const request = row.original;
      const status = request.status;
      const request_date = request.createdat;
      const farm = request.farm_name;
      const contact = request.contact;
      const qty = request.quantity_requested;
      const rqstr_note = request.requester_note;
      const requested = request.tool_requested;
      const accepted_by = request.accepted_by;

      return (
        <div>
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className="rounded-full">
                View
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className="flex justify-between gap-4 items-start pt-4">
                  <div>
                    <DialogTitle>Tool Request</DialogTitle>
                    <DialogDescription>
                      Requested:{" "}
                      {format(new Date(request_date || ""), "MMM dd, yyyy")}
                    </DialogDescription>
                  </div>
                  <Badge className="text-white">{status}</Badge>
                </div>

                <div className="flex gap-4 mb-4">
                  <div className="w-full">
                    <Label>Farm Name</Label>
                    <Input type="text" defaultValue={farm} disabled />
                  </div>
                  <div className="w-full">
                    <Label>Contact</Label>
                    <Input type="text" defaultValue={contact} disabled />
                  </div>
                </div>

                <div className="flex w-full gap-4 mb-4">
                  <div className="w-full">
                    <Label>Requested</Label>
                    <Input type="text" defaultValue={requested} disabled />
                  </div>

                  <div className="w-1/3">
                    <Label>Quantity</Label>
                    <Input type="number" defaultValue={qty} disabled />
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Requester Note</Label>
                  <div className="w-full">
                    <Textarea defaultValue={rqstr_note} disabled />
                  </div>
                </div>

                <div className="w-full">
                  <Label>Accepted By:</Label>
                  <Input type="text" defaultValue={accepted_by} disabled />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <DialogToolCommunicate id={request.id || ""} />
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    }
  }
];

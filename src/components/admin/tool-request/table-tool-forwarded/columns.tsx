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
import DialogToolAccept from "../dialog-tool-request/dialog-tool-accept";
import { formatDate } from "@components/lib/utils";

export type ToolRequest = {
  id: number;
  createdAt: string;
  updatedAt: string;
  farm: string;
  contact: string;
  tool: string;
  quantity_request: number;
  forwarded_to: string;
  note: string;
  status:
    | "accepted"
    | "pending"
    | "rejected"
    | "forwarded"
    | "communicating"
    | "completed";
};

export const data: ToolRequest[] = [
  {
    id: 1,
    createdAt: "2023-01-15",
    updatedAt: "2023-01-15",
    farm: "Sunshine Farm",
    contact: "shenronfarm@gmail.com",
    tool: "Tomato",
    quantity_request: 100,
    note: "kulang kami panggupit ng halaman",
    forwarded_to: "JOU and DOA",
    status: "forwarded"
  },
  {
    id: 2,
    createdAt: "2023-02-20",
    updatedAt: "2023-01-15",
    farm: "Green Acres",
    contact: "shenronfarm@gmail.com",
    tool: "Lettuce",
    quantity_request: 200,
    note: "kulang kami panggupit ng halaman",
    forwarded_to: "Joy for Urban Farming",
    status: "forwarded"
  },
  {
    id: 3,
    createdAt: "2023-03-10",
    updatedAt: "2023-01-15",
    farm: "Golden Fields",
    contact: "shenronfarm@gmail.com",
    tool: "Carrot",
    quantity_request: 150,
    note: "kulang kami panggupit ng halaman",
    forwarded_to: "Joy for Urban Farming",
    status: "forwarded"
  }
];

export const columns: ColumnDef<ToolRequest>[] = [
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <div>{row.getValue("updatedAt")}</div>
  },
  {
    accessorKey: "tool",
    header: "Tool",
    cell: ({ row }) => <div>{row.getValue("tool")}</div>
  },
  {
    accessorKey: "farm",
    header: "Requested by",
    cell: ({ row }) => <div>{row.getValue("farm")}</div>
  },
  {
    accessorKey: "quantity_request",
    header: "Quantity Requested",
    cell: ({ row }) => <div>{row.getValue("quantity_request")}</div>
  },
  {
    accessorKey: "forwarded_to",
    header: "Forwarded to",
    cell: ({ row }) => <div>{row.getValue("forwarded_to")}</div>
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
      const request = row.original;
      const status = request.status;
      const request_date = request.createdAt;
      const farm = request.farm;
      const contact = request.contact;
      const qty = request.quantity_request;
      const rqstr_note = request.note;
      const requested = request.tool;
      const forward = request.forwarded_to;

      return (
        <Dialog>
          <DialogTrigger className="ml-2 px-2">
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
                    Requested: {formatDate(request_date)}
                  </DialogDescription>
                </div>
                <Badge className="text-white bg-orange-500 hover:bg-orange-400">
                  {status}
                </Badge>
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
                <Label>Forwarded to:</Label>
                <Input type="text" defaultValue={forward} disabled />
              </div>

              <div className="flex justify-end gap-4 mt-4">
                {/* <Button variant="ghost" onClick={handleToggleEdit}>
                  {isEditing ? "Save" : "Edit"}
                </Button> */}
                <Button variant="destructive">Rejected</Button>
                <DialogToolAccept />
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

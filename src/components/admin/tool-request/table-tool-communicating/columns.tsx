import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

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
import { formatDate } from "@components/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@components/ui/alert-dialog";

export type SeedlingRequest = {
  id: number;
  createdAt: string;
  updatedAt: string;
  farm: string;
  tool: string;
  quantity_request: number;
  contact: string;
  note: string;
  client_note: string;
  accepted_by: string;
  status:
    | "accepted"
    | "pending"
    | "rejected"
    | "forwarded"
    | "communicating"
    | "completed";
};

export const data: SeedlingRequest[] = [
  {
    id: 1,
    createdAt: "2023-01-15",
    updatedAt: "2023-01-15",
    farm: "Sunshine Farm",
    tool: "Tomato",
    quantity_request: 100,
    note: "kulang kami panggupit ng halaman",
    client_note: "parambalew",
    accepted_by: "Center for Urban and Department of Agriculture",
    status: "communicating",
    contact: "sharon@gmail.com"
  },
  {
    id: 2,
    createdAt: "2023-02-20",
    updatedAt: "2023-01-15",
    farm: "Green Acres",
    tool: "Lettuce",
    quantity_request: 200,
    note: "kulang kami panggupit ng halaman",
    client_note: "parambalew",
    accepted_by: "Center for Urban and Department of Agriculture",
    contact: "sharon@gmail.com",
    status: "communicating"
  },
  {
    id: 3,
    createdAt: "2023-03-10",
    updatedAt: "2023-01-15",
    farm: "Golden Fields",
    tool: "Carrot",
    quantity_request: 150,
    note: "kulang kami panggupit ng halaman",
    client_note: "parambalew",
    accepted_by: "Center for Urban and Department of Agriculture",
    contact: "sharon@gmail.com",
    status: "communicating"
  }
];

export const columns: ColumnDef<SeedlingRequest>[] = [
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
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => <div>{row.getValue("contact")}</div>
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
      const note = request.client_note;
      const requested = request.tool;
      const accepted_by = request.accepted_by;

      const [isEditing, setIsEditing] = useState<boolean>(false);

      const handleToggleEdit = () => {
        setIsEditing(!isEditing);
      };

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
                <Badge className="text-white bg-teal-500 hover:bg-teal-400">
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
                <Label>Accepted By:</Label>
                <Input type="text" defaultValue={accepted_by} disabled />
              </div>

              <div className="mb-4">
                <Label>Note</Label>
                <div className="w-full">
                  <Textarea disabled={isEditing} defaultValue={note} />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={handleToggleEdit}>
                  {!isEditing ? "Save Note" : "Edit Note"}
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="default">Comlete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Complete this order?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. Completing the reqeust
                        indicates that the requested tool is already handed over
                        to the farm.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

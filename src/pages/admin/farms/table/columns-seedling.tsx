import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

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

export type SeedlingRequest = {
  id: number;
  createdAt: string;
  farm: string;
  crop: string;
  quantity_request: number;
  status: "accepted" | "pending" | "rejected";
};

export const data: SeedlingRequest[] = [
  {
    id: 1,
    createdAt: "2023-01-15",
    farm: "Sunshine Farm",
    crop: "Tomato",
    quantity_request: 100,
    status: "pending"
  },
  {
    id: 2,
    createdAt: "2023-02-20",
    farm: "Green Acres",
    crop: "Lettuce",
    quantity_request: 200,
    status: "accepted"
  },
  {
    id: 3,
    createdAt: "2023-03-10",
    farm: "Golden Fields",
    crop: "Carrot",
    quantity_request: 150,
    status: "rejected"
  }
];

export const columns: ColumnDef<SeedlingRequest>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "farm",
    header: "Farm",
    cell: ({ row }) => <div>{row.getValue("farm")}</div>
  },
  {
    accessorKey: "crop",
    header: "Crop",
    cell: ({ row }) => <div>{row.getValue("crop")}</div>
  },
  {
    accessorKey: "quantity_request",
    header: "Quantity Requested",
    cell: ({ row }) => <div>{row.getValue("quantity_request")}</div>
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

      const [isEditing, setIsEditing] = useState<boolean>(false);

      const handleToggleEdit = () => {
        setIsEditing(!isEditing);
      };

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
              onClick={() => navigator.clipboard.writeText(String(request.id))}
            >
              Copy application ID
            </DropdownMenuItem>
            <Dialog>
              <DialogTrigger className="ml-2">View request</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <div className="flex justify-between gap-4 items-start pt-4">
                    <div>
                      <DialogTitle>Farm Request</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </div>
                    <Badge>Status</Badge>
                  </div>

                  <div className="w-full mb-4">
                    <Label>From:</Label>
                    <Input type="text" />
                  </div>

                  <div className="flex w-full gap-4 mb-4">
                    <div className="w-full">
                      <Label>Requested</Label>
                      <Input type="text" />
                    </div>

                    <div className="w-1/3">
                      <Label>Quantity</Label>
                      <Input type="number" />
                    </div>
                  </div>

                  <div className="flex w-full gap-4 mb-4">
                    <div className="w-full">
                      <Label>Delivery Date</Label>
                      <Input type="text" disabled={!isEditing} />
                    </div>

                    <div className="w-1/3">
                      <Label>Approved</Label>
                      <Input type="number" disabled={!isEditing} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label>Notes</Label>
                    <div className="w-full">
                      <Textarea disabled={!isEditing} />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-4">
                    <Button variant="ghost" onClick={handleToggleEdit}>
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                    <Button variant="destructive">Reject</Button>
                    <Button variant="outline">Approve</Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <DropdownMenuItem>
              {request.status === "pending"
                ? "Approve request"
                : "Reject request"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

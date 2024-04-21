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
import { ToolRequest, UpdateToolRequestStatus } from "../../../../api/openapi";
import { format } from "date-fns";
import usePutRequestToolUpdate from "../../../../hooks/api/put/usePutRequestToolUpdate";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../icons/Loader";
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
          CREATED AT
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
    accessorKey: "contact",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CONTACT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("contact")}</div>
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
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const navigate = useNavigate();
      const request = row.original;
      const status = request.status;
      const request_date = request.createdat;
      const farm = request.farm_name;
      const contact = request.contact;
      const qty = request.quantity_requested;
      const rqstr_note = request.requester_note;
      const note = request.client_note;
      const requested = request.tool_requested;
      const accepted_by = request.accepted_by;

      const [isEditing, setIsEditing] = useState<boolean>(true);
      const [noted, setNoted] = useState<string>(note || "");

      const handleToggleEdit = () => {
        setIsEditing(!isEditing);
      };

      const { mutateAsync, isLoading } = usePutRequestToolUpdate();

      const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (noted === "") {
          toast.error("Please select an organization");
          return;
        }
        const compiledData: UpdateToolRequestStatus = {
          client_note: noted,
          status: UpdateToolRequestStatus.status.COMPLETED
        };

        try {
          await mutateAsync({
            id: request.id || "",
            requestBody: compiledData
          });
          toast.success("Tool Request Completed Successfully!");
          navigate("/admin/community/tool-request?tab=completed");
        } catch (e: any) {
          toast.error(e.body.message);
        }
      };

      return (
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
                  <Textarea
                    disabled={isEditing}
                    defaultValue={noted}
                    onChange={e => setNoted(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={handleToggleEdit}>
                  {!isEditing ? "Save Note" : "Edit Note"}
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="default">Complete</Button>
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
                      <AlertDialogAction onClick={e => handleSubmitForm(e)}>
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                    <Loader isVisible={isLoading} />
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

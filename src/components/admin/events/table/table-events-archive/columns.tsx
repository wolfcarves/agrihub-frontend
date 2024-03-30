import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@components/ui/button";

import { useNavigate } from "react-router-dom";
import { EventDetails } from "../../../../../api/openapi";
import Loader from "../../../../../icons/Loader";
import usePutEventsUnarchieve from "../../../../../hooks/api/put/usePutEventsUnarchieve";
import { toast } from "sonner";
import { format } from "date-fns";
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
} from "../../../../ui/alert-dialog";

export const columns: ColumnDef<EventDetails>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "event_start",
    header: "Event Start",
    cell: ({ row }) =>
      format(new Date(row.original.event_start || ""), "PPP' 'HH:mm aaaa")
  },
  {
    accessorKey: "eventEnd",
    header: "Event End",
    cell: ({ row }) =>
      format(new Date(row.original.event_end || ""), "PPP' 'HH:mm aaaa")
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const material = row.original;
      const navigate = useNavigate();
      const { mutateAsync: unarchiveMaterial, isLoading: archieveLoading } =
        usePutEventsUnarchieve();
      const handleUnpublish = async () => {
        await unarchiveMaterial(material.id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/resource/events");
      };
      if (archieveLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className=" bg-black hover:bg-black/80">Unarchive</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will unarchive this event.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUnpublish}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

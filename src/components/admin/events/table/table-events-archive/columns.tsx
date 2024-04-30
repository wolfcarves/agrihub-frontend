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
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<EventDetails>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CREATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "event_start",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EVENT START
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.event_start || ""), "PPP' 'HH:mm aaaa")
  },
  {
    accessorKey: "event_end",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EVENT END
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.event_end || ""), "PPP' 'HH:mm aaaa")
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TITLE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("title")}</div>
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TYPE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("type")}</div>
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("status")}</div>
    )
  },
  {
    id: "actions",
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
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
              <AlertDialogTitle>Unarchive this event?</AlertDialogTitle>
              <AlertDialogDescription>
                This will make the event be visible in draft list again.
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

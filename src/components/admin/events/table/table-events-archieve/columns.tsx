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

import { Link, useNavigate } from "react-router-dom";
import { EventDetails } from "../../../../../api/openapi";
import Loader from "../../../../../icons/Loader";
import usePutEventsUnarchieve from "../../../../../hooks/api/put/usePutEventsUnarchieve";
import { toast } from "sonner";

export const columns: ColumnDef<EventDetails>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "eventStart",
    header: "Event Start",
    cell: ({ row }) => <div>{row.getValue("eventStart")}</div>
  },
  {
    accessorKey: "eventEnd",
    header: "Event End",
    cell: ({ row }) => <div>{row.getValue("eventEnd")}</div>
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
        <Button
          className=" bg-black hover:bg-black/80"
          onClick={handleUnpublish}
        >
          Unarchieve
        </Button>
      );
    }
  }
];

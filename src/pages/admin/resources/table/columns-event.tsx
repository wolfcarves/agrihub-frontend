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

import { Link } from "react-router-dom";

export const data: Event[] = [
  {
    id: "e1",
    createdAt: "2023-01-15",
    eventStart: "2023-02-01",
    eventEnd: "2023-02-03",
    title: "Agricultural Expo 2023",
    type: "Expo",
    status: "scheduled"
  },
  {
    id: "e2",
    createdAt: "2023-02-20",
    eventStart: "2023-03-10",
    eventEnd: "2023-03-12",
    title: "Webinar: Sustainable Farming Practices",
    type: "Webinar",
    status: "upcoming"
  },
  {
    id: "e3",
    createdAt: "2023-03-10",
    eventStart: "2023-04-20",
    eventEnd: "2023-04-22",
    title: "Field Day: Organic Farm Tour",
    type: "Field Day",
    status: "past"
  },
  {
    id: "e4",
    createdAt: "2023-04-05",
    eventStart: "2023-05-10",
    eventEnd: "2023-05-12",
    title: "Workshop: Soil Health Management",
    type: "Workshop",
    status: "upcoming"
  }
];

export type Event = {
  id: string;
  createdAt: string;
  eventStart: string;
  eventEnd: string;
  title: string;
  type: string;
  status: "scheduled" | "upcoming" | "past";
};

export const columns: ColumnDef<Event>[] = [
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy event ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to={`/admin/resource/events/view/${payment.id}`}>
              <DropdownMenuItem>View/update article</DropdownMenuItem>
            </Link>
            <Link to={`/events/view/${payment.id}`}>
              <DropdownMenuItem>View event in page</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

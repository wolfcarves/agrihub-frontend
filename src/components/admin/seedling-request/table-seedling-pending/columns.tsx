import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { SeedlingRequestListItem } from "@api/openapi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@components/ui/custom/dialog/dialog";
import { Badge } from "@components/ui/badge";
import { useState } from "react";
import FormSeedlingRequest from "../form-seedling-request/form-seedling-request";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<SeedlingRequestListItem>[] = [
  {
    accessorKey: "farm_name",
    header: "Farm"
  },
  {
    accessorKey: "name",
    header: "Crop",
    cell: ({ row }) => {
      const cropName = row.original;
      if (cropName.other) {
        return <p>{cropName.other}</p>;
      } else {
        return <p>{cropName.name}</p>;
      }
    }
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
      const [open, setOpen] = useState<boolean>(false);

      return (
        <Dialog open={open}>
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
                onClick={() =>
                  navigator.clipboard.writeText(String(request.id))
                }
              >
                Copy application ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                View request
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <div className="flex justify-between gap-4 items-start pt-4">
                <div>
                  <DialogTitle>Farm Request</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </div>
                <Badge
                  className={`${
                    request.status === "pending"
                      ? "bg-orange-500 hover:bg-orange-500/80"
                      : request.status === "accepted"
                      ? "bg-primary hover:bg-primary/80"
                      : request.status === "rejected"
                      ? "bg-red-600 hover:bg-red-600/80"
                      : null
                  }`}
                >
                  {request.status}
                </Badge>
              </div>

              <FormSeedlingRequest data={request} setOpen={setOpen} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

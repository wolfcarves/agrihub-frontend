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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";

import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { UserFeedback } from "../../../../api/openapi";

export const columns: ColumnDef<UserFeedback>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "rating",
    header: "Rate",
    cell: ({ row }) => <div>{row.getValue("rating")}</div> // Changed accessorKey to "rating"
  },
  {
    accessorKey: "feedbackSuggestion",
    header: "Feedback & Suggestion",
    cell: ({ row }) => <div>{row.getValue("feedbackSuggestion")}</div> // Changed accessorKey to "feedbackSuggestion"
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
              onClick={() => navigator.clipboard.writeText(payment.id || "")}
            >
              Copy Feedback ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  View Feedback
                </div>
              </DialogTrigger>
              {/* modal */}
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Feedback & Suggestion </DialogTitle>
                  <div className="flex items-center gap-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/lego/6.jpg"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        Daniel Jeffrey Guellin
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        OFW Saudi
                      </span>
                    </div>
                  </div>
                </DialogHeader>

                <div className="grid gap-4">
                  <div className="flex-col gap-4">
                    <Label htmlFor="title" className="text-right">
                      Rating
                    </Label>
                    <Input
                      id="rating"
                      placeholder="insert title of your material"
                      className="col-span-3"
                      defaultValue="satisfactory"
                      disabled
                    />
                  </div>
                  <div className="flex-col gap-4">
                    <Label className="text-right">
                      Feedback and Suggestion
                    </Label>
                    <Textarea
                      defaultValue="ang hindi magmahal sa sariling wika ay mas malangsa pa sa sinigang"
                      disabled
                    />
                  </div>
                </div>

                {/* buttons */}
                <DialogFooter>
                  <Button variant="outline">Set as Testimonial</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

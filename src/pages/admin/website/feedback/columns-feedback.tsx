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
import { format } from "date-fns";
import useGetCmsUserFeedbackView from "../../../../hooks/api/get/useGetCmsUserFeedbackView";
import Loader from "../../../../icons/Loader";
import { formatImage } from "../../../../components/lib/utils";
import { DialogClose } from "../../../../components/ui/custom/dialog/dialog";

export const columns: ColumnDef<UserFeedback>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "firstname",
    header: "Name",
    cell: ({ row }) => (
      <div>{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },
  {
    accessorKey: "rating",
    header: "Rate",
    cell: ({ row }) => <div>{row.getValue("rating")}</div> // Changed accessorKey to "rating"
  },
  {
    accessorKey: "feedback",
    header: "Feedback & Suggestion",
    cell: ({ row }) => <div>{row.getValue("feedback")}</div> // Changed accessorKey to "feedbackSuggestion"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const feedback = row.original;
      const { data: feedbackData, isLoading } = useGetCmsUserFeedbackView(
        feedback.id || ""
      );
      console.log(feedbackData, "asd");
      if (isLoading) {
        return <></>;
      }

      return (
        <Dialog>
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
                onClick={() => navigator.clipboard.writeText(feedback.id || "")}
              >
                Copy Feedback ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger>View Feedback</DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* modal */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Feedback & Suggestion </DialogTitle>
              <div className="flex items-center gap-x-4">
                <img
                  src={formatImage(feedbackData?.avatar || "")}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <span className="block text-gray-800 font-semibold">
                    {feedbackData?.firstname} {feedbackData?.lastname}
                  </span>
                  <span className="block text-gray-600 text-sm mt-0.5">
                    {format(new Date(feedbackData?.createdat || ""), "PPP")}
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
                  defaultValue={feedbackData?.rating}
                  disabled
                />
              </div>
              <div className="flex-col gap-4">
                <Label className="text-right">Feedback and Suggestion</Label>
                <Textarea defaultValue={feedbackData?.feedback} disabled />
              </div>
            </div>

            {/* buttons */}
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
  }
];

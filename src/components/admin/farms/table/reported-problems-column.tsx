import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { CommunityFarmProblem } from "@api/openapi";

import { Button } from "../../../ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { DialogHeader } from "../../../ui/custom/dialog/dialog";
import { Switch } from "../../../ui/switch";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import { Input } from "../../../ui/input";
import { format } from "date-fns";

export const columns: ColumnDef<CommunityFarmProblem>[] = [
  {
    accessorKey: "problem",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          PROBLEM
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=" capitalize">{row.original.status}</div>;
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;
      const navigate = useNavigate();
      console.log(item);
      return (
        <>
          {item.status === "pending" ? (
            <Button
              type="button"
              className="h-6 text-xs"
              onClick={() =>
                navigate(`/admin/community/problems/view/${item.fp_id}`)
              }
            >
              Solution
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-6 text-xs" variant={"outline"}>
                  Resolved
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Problem Resolved Review</DialogTitle>
                  <DialogDescription>
                    Review resolved problem by the farm head
                  </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Switch checked={Boolean(item.is_helpful)} />
                    <Label className=" font-poppins-medium">Helpful?</Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="title" className=" font-poppins-medium">
                      Feedback
                    </Label>
                    <Textarea
                      placeholder="Input a feedback"
                      className="col-span-3 focus-visible:ring-0"
                      value={item.feedback}
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="title" className=" font-poppins-medium">
                      Date Solved
                    </Label>
                    <Input
                      placeholder="Input a feedback"
                      className="col-span-3 focus-visible:ring-0"
                      value={format(new Date(item.date_solved || ""), "PPP")}
                      readOnly
                    />
                  </div>

                  {/* <DialogFooter>
                  <Button
                    variant={"secondary"}
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </Button>
                  <Button type="submit" onClick={e => handleSubmitForm(e)}>
                    Submit
                  </Button>
                </DialogFooter> */}
                </form>
              </DialogContent>
            </Dialog>
          )}
        </>
      );
    }
  }
];

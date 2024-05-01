import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {
  CommunityFarmProblem,
  CommunityTask,
  MarkProblemAsResolvedRequest
} from "../../../../../api/openapi";

import { Button } from "../../../../ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../ui/custom/dialog/dialog";
import { Label } from "../../../../ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { Switch } from "../../../../ui/switch";
import { Textarea } from "../../../../ui/textarea";
import useProblemsCommunityResolve from "../../../../../hooks/api/post/useProblemsCommunityResolve";
import Loader from "../../../../../icons/Loader";
import SolutionModal from "../../solution-modal/solution-modal";
import { format } from "date-fns";
import { formatDate } from "../../../../lib/utils";
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
import Input from "../../../../ui/custom/input/input";
import useDeleteCommunityFarmTask from "../../../../../hooks/api/delete/useDeleteCommunityFarnTask";
import useAuth from "../../../../../hooks/useAuth";

export const columns: ColumnDef<CommunityTask>[] = [
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => formatDate(row.original.due_date || "")
  },
  {
    header: "Assigned To",
    cell: ({ row }) => (
      <div className=" capitalize">{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },
  {
    accessorKey: "task_type",
    header: "Task",
    cell: ({ row }) => (
      <div className=" capitalize">{row.original.task_type}</div>
    )
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
      const { data: userData } = useAuth();

      const [isOpen, setIsOpen] = useState<boolean>();

      const { mutateAsync: taskMutate, isLoading: taskLoading } =
        useDeleteCommunityFarmTask();

      const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
          await taskMutate(item.id || "");
          toast.success("Deleted Successfully!");
          setIsOpen(false);
        } catch (e: any) {
          toast.error(e.message);
        }
      };

      const handleComply = () => {
        if (item.task_type === "harvest") {
          navigate(
            `/community/reports/${item.farmid}/harvest/${item.report_id}/${item.id}`
          );
        } else if (item.task_type === "plant") {
          navigate(
            `/community/reports/${item.farmid}/plant/${item.crop_id}/${item.id}`
          );
        } else {
          null;
        }
      };

      return (
        <>
          <Dialog open={isOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => setIsOpen(true)}
                variant="outline"
                className=" text-xs h-6 p-2"
              >
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>View Task</DialogTitle>
                <DialogDescription>
                  These are the details about the task
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-4   gap-2 py-4 max-h-[70vh] overflow-y-auto custom-scroll px-2">
                <div className=" col-span-4">
                  <Label
                    htmlFor="name"
                    className="text-right font-poppins-medium"
                  >
                    Assigned To
                  </Label>
                  <Input
                    value={`${item.firstname} ${item.lastname}`}
                    disabled
                    className="col-span-3 disabled:opacity-90"
                  />
                </div>
                {item.crop_name && (
                  <div className=" col-span-4">
                    <Label
                      htmlFor="name"
                      className="text-right font-poppins-medium"
                    >
                      Crop
                    </Label>
                    <Input
                      value={item.crop_name}
                      disabled
                      className="col-span-3 disabled:opacity-90"
                    />
                  </div>
                )}
                {item.action_message && (
                  <div className=" col-span-4">
                    <Label
                      htmlFor="name"
                      className="text-right font-poppins-medium"
                    >
                      Action Message
                    </Label>
                    <Textarea
                      value={item.action_message}
                      disabled
                      className="col-span-3 disabled:opacity-90"
                    />
                  </div>
                )}
                <div className=" col-span-4">
                  <Label
                    htmlFor="name"
                    className="text-right font-poppins-medium"
                  >
                    Role
                  </Label>
                  <Input
                    value={item.role}
                    disabled
                    className="col-span-3 disabled:opacity-90 capitalize"
                  />
                </div>
                <div className=" col-span-4">
                  <Label
                    htmlFor="name"
                    className="text-right font-poppins-medium"
                  >
                    Task
                  </Label>
                  <Input
                    value={item.task_type}
                    disabled
                    className="col-span-3 disabled:opacity-90 capitalize"
                  />
                </div>
                <div className=" col-span-4">
                  <Label
                    htmlFor="name"
                    className="text-right font-poppins-medium"
                  >
                    Message
                  </Label>
                  <Textarea
                    value={item.message}
                    disabled
                    className="col-span-3 disabled:opacity-90 capitalize bg-transparent"
                  />
                </div>
                <div className=" col-span-4">
                  <Label
                    htmlFor="name"
                    className="text-right font-poppins-medium"
                  >
                    Due Date
                  </Label>
                  <Input
                    value={
                      item.due_date && format(new Date(item.due_date), "PPP")
                    }
                    disabled
                    className="col-span-3 disabled:opacity-90 capitalize"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant={"outline"} onClick={() => setIsOpen(false)}>
                  Close
                </Button>

                {item.status === "pending" && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" bg-destructive">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Do you want to delete this task?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the task and remove this data from our
                          community.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                      <Loader isVisible={taskLoading} />
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                {userData?.role === "farmer" && item.status === "pending" && (
                  <Button onClick={handleComply}>Comply</Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      );
    }
  }
];

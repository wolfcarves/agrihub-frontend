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
      // const navigate = useNavigate();

      const [isOpen, setIsOpen] = useState<boolean>();
      const [helpful, setHelpful] = useState<boolean>(false);
      const [feedback, setFeedback] = useState<string>("");

      const { mutateAsync: resolveMutate, isLoading: resolveLoading } =
        useProblemsCommunityResolve();

      const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const compiledData: MarkProblemAsResolvedRequest = {
          is_helpful: helpful,
          feedback: feedback
        };

        try {
          if (feedback === "") {
            throw new Error("Feedback is required.");
          }
          await resolveMutate({ id: item.id || "", requestBody: compiledData });
          toast.success("Submitted Successfully!");
          setIsOpen(false);
        } catch (e: any) {
          toast.error(e.message);
        }
      };

      return (
        <>
          {item.status === "pending" && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="h-6 text-xs bg-destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </>
      );
    }
  }
];

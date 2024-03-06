import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {
  CommunityFarmProblem,
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

export const columns: ColumnDef<CommunityFarmProblem>[] = [
  {
    accessorKey: "problem",
    header: "Problem"
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
          await resolveMutate({ id: item.id || "", requestBody: compiledData });
          toast.success("Submitted Successfully!");
          setIsOpen(false);
        } catch (e: any) {
          toast.error(e.body.message);
        }
      };

      return (
        <>
          {item.status === "pending" && (
            <Dialog open={isOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => setIsOpen(true)} className="h-6 text-xs">
                  Resolve
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Problem Resolved</DialogTitle>
                  <DialogDescription>
                    Fill out the form. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Switch
                      checked={helpful}
                      onCheckedChange={val => setHelpful(val)}
                    />
                    <Label className=" font-poppins-medium">Helpful?</Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="title" className=" font-poppins-medium">
                      Feedback
                    </Label>
                    <Textarea
                      placeholder="Input a problem"
                      className="col-span-3 focus-visible:ring-0"
                      value={feedback}
                      onChange={e => setFeedback(e.target.value)}
                      required
                    />
                  </div>

                  <DialogFooter>
                    <Button
                      variant={"secondary"}
                      type="button"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </Button>
                    <Button type="submit" onClick={e => handleSubmitForm(e)}>
                      Save
                    </Button>
                  </DialogFooter>
                </form>

                <Loader isVisible={resolveLoading} />
              </DialogContent>
            </Dialog>
          )}
        </>
      );
    }
  },
  {
    header: "",
    id: "solution",
    cell: ({ row }) => {
      const data = row.original;
      console.log(data);

      return <SolutionModal problemId={data.fp_id || ""} />;
    }
  }
];

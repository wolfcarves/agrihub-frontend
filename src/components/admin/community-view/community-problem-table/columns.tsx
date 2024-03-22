import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { formatDate } from "../../../lib/utils";
import {
  CommunityFarmProblem,
  MarkProblemAsResolvedRequest
} from "../../../../api/openapi";
import { Button } from "../../../ui/button";
import { useState } from "react";
import useProblemsCommunityResolve from "../../../../hooks/api/post/useProblemsCommunityResolve";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { Switch } from "../../../ui/switch";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import Loader from "../../../../icons/Loader";
import SolutionModal from "../../../user/community/solution-modal/solution-modal";

export const columns: ColumnDef<CommunityFarmProblem>[] = [
  {
    accessorKey: "date_noticed",
    header: "Date Notice",
    cell: ({ row }) => formatDate(row.original.date_noticed || "")
  },
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
  }
];

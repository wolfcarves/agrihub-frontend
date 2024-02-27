import { ColumnDef } from "@tanstack/react-table";

import { useNavigate } from "react-router-dom";
import {
  CommunityCropReportResponseItem,
  SeedlingRequestListItem
} from "../../../../../api/openapi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../ui/dropdown-menu";
import { Button } from "../../../../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import useDeleteRequestSeedlingCancel from "../../../../../hooks/api/delete/useDeleteRequestSeedlingCancel";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";

export const columns: ColumnDef<SeedlingRequestListItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Crop
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Request
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
    }
  },

  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const { mutateAsync: rejectSeedling, isLoading: isSeedlingLoad } =
        useDeleteRequestSeedlingCancel();
      const handleDelete = async () => {
        try {
          await rejectSeedling(row.original.id || "");
          toast.success("Request Cancelled!");
        } catch (e: any) {
          toast.error(e.body.message);
        }
      };
      return (
        row.original.status === "pending" && (
          <>
            {" "}
            <Button
              onClick={handleDelete}
              variant={"destructive"}
              className="text-xs p-3 h-5"
            >
              Cancel
            </Button>
            <Loader isVisible={isSeedlingLoad} />
          </>
        )
      );
    }
  }
];

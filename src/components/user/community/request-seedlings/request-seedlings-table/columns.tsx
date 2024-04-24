import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { SeedlingRequestListItem } from "../../../../../api/openapi";
import { Button } from "../../../../ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import useDeleteRequestSeedlingCancel from "../../../../../hooks/api/delete/useDeleteRequestSeedlingCancel";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../ui/dialog";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/custom/input-admin/input";
import { Textarea } from "../../../../ui/textarea";
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
      const request = row.original;
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
      return request.status === "pending" ? (
        <>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"} className="text-xs p-3 h-5">
                Cancel
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Cancel seedling request?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This action will cancel your
                  seedling request.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Loader isVisible={isSeedlingLoad} />
        </>
      ) : request.status === "accepted" ? (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="text-xs p-3 h-5">
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Request Details</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-1">
                  <Label className="col-span-4 font-poppins-medium">
                    Delivery Date
                  </Label>
                  <Input
                    className="col-span-4 disabled:opacity-100"
                    value={format(new Date(request.delivery_date || ""), "PPP")}
                    disabled
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-1">
                  <Label className="col-span-4 font-poppins-medium">
                    Quantity Approve
                  </Label>
                  <Input
                    className="col-span-4 disabled:opacity-100"
                    value={request.quantity_approve}
                    disabled
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-1">
                  <Label className="col-span-4 font-poppins-medium">Note</Label>
                  <Textarea
                    className="col-span-4 disabled:opacity-100"
                    value={request.note}
                    disabled
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      ) : null;
    }
  }
];

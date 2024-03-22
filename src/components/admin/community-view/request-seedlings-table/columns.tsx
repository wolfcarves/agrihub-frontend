import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Button } from "../../../ui/button";
import { SeedlingRequestListItem } from "../../../../api/openapi";
import useDeleteRequestSeedlingCancel from "../../../../hooks/api/delete/useDeleteRequestSeedlingCancel";
import Loader from "../../../../icons/Loader";
import { Textarea } from "../../../ui/textarea";
import { Input } from "../../../ui/input";

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
      console.log(row.original);
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
          <Button
            onClick={handleDelete}
            variant={"destructive"}
            className="text-xs p-3 h-5"
          >
            Cancel
          </Button>
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

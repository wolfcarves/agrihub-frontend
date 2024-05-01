import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";
import { Blog } from "../../../../../api/openapi";
import Loader from "../../../../../icons/Loader";
import { toast } from "sonner";
import { format } from "date-fns";
import usePutBlogsUnarchive from "../../../../../hooks/api/put/usePutBlogsUnarchive";
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
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Blog>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CREATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "updatedat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          UPDATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => format(new Date(row.original.updatedat || ""), "PPP")
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TITLE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    }
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          AUTHOR
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
    cell: ({ row }) => {
      const material = row.original;
      const navigate = useNavigate();
      const { mutateAsync: unarchiveMaterial, isLoading: archieveLoading } =
        usePutBlogsUnarchive();
      const handleUnpublish = async () => {
        await unarchiveMaterial(material.id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/resource/blogs?tab=published");
      };
      if (archieveLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <AlertDialog>
          <AlertDialogTrigger className="w-full">
            <Button className=" bg-black hover:bg-black/80">Unarchive</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Unarchive this blog?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will unarchive this blog and going to be placed in
                blog drafts.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUnpublish}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
  }
];

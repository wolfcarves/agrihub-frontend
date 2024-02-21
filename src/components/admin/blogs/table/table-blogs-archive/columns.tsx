import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { EventDetails } from "../../../../../api/openapi";
import Loader from "../../../../../icons/Loader";
import usePutEventsUnarchieve from "../../../../../hooks/api/put/usePutEventsUnarchieve";
import { toast } from "sonner";
import { format } from "date-fns";
import usePutBlogsUnarchive from "../../../../../hooks/api/put/usePutBlogsUnarchive";

export const columns: ColumnDef<EventDetails>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "updatedat",
    header: "Updated At",
    cell: ({ row }) => format(new Date(row.original.updatedat || ""), "PPP")
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "author",
    header: "Author"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const material = row.original;
      const navigate = useNavigate();
      const { mutateAsync: unarchiveMaterial, isLoading: archieveLoading } =
        usePutBlogsUnarchive();
      const handleUnpublish = async () => {
        await unarchiveMaterial(material.id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/resource/blogs");
      };
      if (archieveLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <Button
          className=" bg-black hover:bg-black/80"
          onClick={handleUnpublish}
        >
          Unarchive
        </Button>
      );
    }
  }
];

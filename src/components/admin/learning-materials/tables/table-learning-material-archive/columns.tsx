import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { FarmApplicationData, LearningMaterial } from "@api/openapi";
import { Link, useNavigate } from "react-router-dom";
import usePutLearningUnarchive from "../../../../../hooks/api/put/usePutLearningUnarchive";
import { toast } from "sonner";
import { format } from "date-fns";
import Loader from "../../../../../icons/Loader";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<LearningMaterial>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "language",
    header: "Language"
  },

  {
    id: "actions",

    cell: ({ row }) => {
      const material = row.original;
      const navigate = useNavigate();
      const { mutateAsync: unarchiveMaterial, isLoading: archieveLoading } =
        usePutLearningUnarchive();
      const handleUnpublish = async () => {
        await unarchiveMaterial(material.id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/resource/learnings");
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

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
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<LearningMaterial>[] = [
  {
    accessorKey: "createdat",
    header: "Created At"
  },
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "type",
    header: "Type"
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
      const { mutateAsync: unarchiveMaterial } = usePutLearningUnarchive();
      const handleUnpublish = async () => {
        console.log(material.id);
        await unarchiveMaterial(material.id || "");
        toast.success("Unarchive Successfully!");
        navigate("/admin/resource/learnings");
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleUnpublish}>
              Unarchive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

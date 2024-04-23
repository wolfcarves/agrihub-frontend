import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@components/ui/table";
import { formatDate } from "@components/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../../../../../ui/alert-dialog";
import useDeleteFarmCropArchiveAdmin from "../../../../../../hooks/api/delete/useDeleteFarmCropArchiveAdmin";
import { toast } from "sonner";
import Loader from "../../../../../../icons/Loader";
import useGetFarmCropOthersListAdmin from "../../../../../../hooks/api/get/useGetFarmCropOthersListAdmin";

const TableCropsOthers = () => {
  const { data: cropData } = useGetFarmCropOthersListAdmin();

  const navigate = useNavigate();

  const { mutateAsync: archiveMaterial, isLoading: archieveLoading } =
    useDeleteFarmCropArchiveAdmin();
  const handleArchive = async (id: string) => {
    await archiveMaterial(id || "");
    toast.success("Archive Successfully!");
    navigate("/admin/website/crops?tab=archive");
  };

  if (archieveLoading) {
    return <Loader isVisible={true} />;
  }
  return (
    <div className="border border-border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Created At</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Growth Span</TableHead>
            <TableHead>Companion Crops</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cropData?.map(crops => (
            <TableRow key={crops.id}>
              <TableCell className="font-medium">
                {formatDate(crops.createdat || "")}
              </TableCell>
              <TableCell>{crops.name}</TableCell>
              <TableCell className="text-center">{crops.growth_span}</TableCell>
              <TableCell>{crops.companion}</TableCell>
              <TableCell>
                <AlertDialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(crops.id || "")
                        }
                      >
                        Copy crop ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {/* <Link to={`/admin/website/crops/update/${crops.id}`}>
                        <DropdownMenuItem>View/update crop</DropdownMenuItem>
                      </Link> */}
                      {/* <DropdownMenuItem>
                        <AlertDialogTrigger>Archive</AlertDialogTrigger>
                      </DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will archive the
                        community crop and will be hidden in community list.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleArchive(crops.id || "")}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCropsOthers;

import React from "react";
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
import { FaRegTrashCan } from "react-icons/fa6";
import useFarmDeleteGalleryMutation from "../../../../../hooks/api/post/useFarmDeleteGalleryMutaion";
import { toast } from "sonner";

interface DeleteImageAlertProps {
  imageId: string;
}

const DeleteImageAlert: React.FC<DeleteImageAlertProps> = ({ imageId }) => {
  const { mutateAsync: deleteGallery } = useFarmDeleteGalleryMutation();
  const handleDelete = () => {
    deleteGallery(imageId);
    toast.success("Deleted Successfully!");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-[.30rem] cursor-pointer">
          <FaRegTrashCan />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this image?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete image in
            the gallery and remove this data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteImageAlert;

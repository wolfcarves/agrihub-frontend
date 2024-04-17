import React, { useEffect, useRef, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import usePostUploadImage from "@hooks/api/post/usePostUploadImage";
import useDeleteFileUpload from "@hooks/api/delete/useDeleteFileUpload";
import { toast } from "sonner";
import LoadingSpinner from "@icons/LoadingSpinner";
import { FaRegTrashCan } from "react-icons/fa6";
import { formatImage, parseValidString } from "@lib/utils";
import useCmsAboutAddCarousel from "../../../../hooks/api/post/useCmsAboutAddCarousel";
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
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";

interface DropzoneProps {
  onChange?: (file: string) => void;
  onDelete: () => void;
  className?: string;
  defaultValue?: string;
  isEditing?: boolean;
}

const AwsUploader: React.FC<DropzoneProps> = ({
  onChange,
  onDelete,
  className,
  defaultValue,
  isEditing
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValue || null
  );
  useEffect(() => {
    if (defaultValue) {
      setImagePreview(defaultValue);
    }
  }, [defaultValue]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync, isLoading: IsMutationLoading } =
    useCmsAboutAddCarousel();
  const { mutateAsync: deleteMutation, isLoading: isDeleteLoading } =
    useDeleteFileUpload();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const showImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    try {
      if (file) {
        const uploadedFile = await mutateAsync({
          formData: {
            image: file
          }
        });

        // onChange?(uploadedFile.file as string);
        // setImagePreview(uploadedFile. ?? "");
        showImagePreview(file);
      }
    } catch (error) {
      toast.error("error uploading");
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    try {
      if (file) {
        const uploadedFile = await mutateAsync({
          formData: {
            image: file
          }
        });

        // onChange?(uploadedFile.file as string);
        // setImagePreview(uploadedFile.addImage?.imagesrc ?? "");
        showImagePreview(file);
      }
    } catch (error) {
      toast.error("error uploading");
    }
  };

  const handleDeleteImage = async () => {
    if (imagePreview) {
      try {
        // await deleteMutation(imagePreview);
        setImagePreview(null);
        onDelete();
      } catch (error) {
        toast.error("error deleting");
      }
    } else {
      return;
    }
  };

  if (IsMutationLoading || isDeleteLoading) {
    return (
      <div
        className={`border-2flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      >
        loading
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`border-2 ${
          isDragging ? "border-blue-500" : "border-gray-300"
        } flex flex-col items-center justify-center w-full h-64 ${className} border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => {
          if (!imagePreview) {
            inputRef.current?.click();
          }
        }}
      >
        {imagePreview ? (
          <img
            src={formatImage(imagePreview)}
            alt="Error fetching image from server. Recommended action: delete this image. Please add and reupload a new image."
            className="h-full w-full rounded-lg object-cover aspesct-video"
          />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <RiUploadCloud2Line size={45} className="mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 10mb)
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          ref={inputRef}
        />
      </div>
      {!isEditing &&
        (imagePreview ||
          parseValidString(imagePreview as string) === "" ||
          parseValidString(imagePreview as string) === "null") && (
          <AlertDialog>
            <AlertDialogTrigger className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer">
              <FaRegTrashCan />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this carousel item?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  image and remove its data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  type="button"
                  onClick={handleDeleteImage}
                  className="bg-red-500 hover:bg-red-500"
                >
                  {isDeleteLoading ? (
                    <LoadingSpinner className="absolute" />
                  ) : (
                    <Button variant="destructive">Delete</Button>
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
    </div>
  );
};

export default AwsUploader;

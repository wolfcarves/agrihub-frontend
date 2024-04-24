import React, { useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCamera } from "react-icons/io5";
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
} from "../../alert-dialog";

interface DropzoneProps {
  onChange?: (blob: Blob) => void;
  disabled?: boolean;
  defaultValue?: string;
}

const CaptureWithDelete: React.FC<DropzoneProps> = ({
  onChange,
  disabled,
  defaultValue
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValue || null
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file && onChange) {
      onChange(file);
    }
    if (file) {
      showImagePreview(file);
    }
  };

  const showImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setImagePreview(null);
  };

  return (
    <div
      className={`border-2 border-gray-300 flex flex-col items-center justify-center w-full border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      onClick={() => inputRef.current?.click()}
    >
      {imagePreview ? (
        <div className="relative overflow-hidden w-full">
          <img
            src={imagePreview}
            alt="Uploaded"
            className=" w-full  max-h-[70vh] object-cover object-center rounded-md"
          />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer">
                <FaRegTrashAlt />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  image and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} disabled={disabled}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <IoCamera size={80} className="mb-3 text-gray-400" />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        capture="environment"
        id="cameraInput"
        ref={inputRef}
        disabled={!!imagePreview || disabled}
      />
    </div>
  );
};

export default CaptureWithDelete;

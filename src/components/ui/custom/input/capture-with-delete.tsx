import React, { useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCamera } from "react-icons/io5";

interface DropzoneProps {
  onChange?: (blob: Blob) => void;
}

const CaptureWithDelete: React.FC<DropzoneProps> = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
      className={`border-2 border-gray-300 flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      onClick={() => inputRef.current?.click()}
    >
      {imagePreview ? (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Uploaded"
            className="h-64 w-full rounded-lg object-cover object-center"
          />
          <button
            className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
            onClick={handleDelete}
          >
            <FaRegTrashAlt />
          </button>
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
        disabled={!!imagePreview}
      />
    </div>
  );
};

export default CaptureWithDelete;

import React, { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "../../button";
import { FiUploadCloud } from "react-icons/fi";

interface CoverImageUploadProps {
  onChange?: (blob: Blob | undefined) => void; // Update the type to allow undefined
  disabled?: boolean;
  defaultValue?: string;
}

const CoverImageUpload: React.FC<CoverImageUploadProps> = ({
  onChange,
  disabled,
  defaultValue
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValue || null
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const newImagePreview = URL.createObjectURL(file);
      setImagePreview(newImagePreview);
      onChange?.(file);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    URL.revokeObjectURL(imagePreview || "");
    setImagePreview(null);
    onChange?.(undefined); // Pass undefined instead of null
  };

  const handleUploadButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        ref={inputRef}
        disabled={disabled}
      />
      {imagePreview === null && (
        <Button
          className="w-full p-2"
          disabled={disabled}
          onClick={handleUploadButtonClick}
        >
          <FiUploadCloud className="mr-1" size={18} />
          Upload
        </Button>
      )}
      <div className="flex flex-wrap my-2">
        {imagePreview !== null && (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Uploaded"
              className="h-auto w-auto max-h-[70vh] rounded-lg shadow-md object-cover object-center m-1"
            />
            {!disabled && (
              <button
                className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
                onClick={handleDelete}
              >
                <FaRegTrashCan />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImageUpload;

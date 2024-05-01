import React, { useRef, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

interface DropzoneProps {
  onChange: (blob: Blob) => void;
  className?: string;
  defaultValue?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onChange,
  className,
  defaultValue
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValue || null
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      onChange(file);
      showImagePreview(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      onChange(file);
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

  return (
    <div
      className={`border-2 ${
        isDragging ? "border-blue-500" : "border-gray-300"
      } flex flex-col items-center justify-center w-full h-48 ${className} border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Uploaded"
          className="h-48 w-full rounded-lg object-cover object-center"
        />
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <RiUploadCloud2Line size={45} className="mb-3 text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload banner</span> or
            drag and drop
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
  );
};

export default Dropzone;

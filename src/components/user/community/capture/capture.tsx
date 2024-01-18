import React, { useRef, useState } from "react";
import { IoCamera } from "react-icons/io5";

interface DropzoneProps {
  onChange: (file: FileList | null) => void;
}

const Capture: React.FC<DropzoneProps> = ({ onChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
      onChange(e.dataTransfer.files);
      showImagePreview(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      onChange(e.target.files && e.target.files);
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
      } flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
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
          className="h-64 w-full rounded-lg object-cover object-center"
        />
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
      />
    </div>
  );
};

export default Capture;

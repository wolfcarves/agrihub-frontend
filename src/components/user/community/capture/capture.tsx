import React, { useRef, useState } from "react";
import { IoCamera } from "react-icons/io5";

interface DropzoneProps {
  onChange: (blob: Blob) => void;
}

const Capture: React.FC<DropzoneProps> = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      className={`border-2 border-gray-300 flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
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

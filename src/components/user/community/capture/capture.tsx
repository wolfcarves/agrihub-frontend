import React, { useRef, useState } from "react";
import { IoCamera } from "react-icons/io5";

interface DropzoneProps {
  onChange?: (blob: Blob) => void;
  defaultValue?: string;
}

const Capture: React.FC<DropzoneProps> = ({ onChange, defaultValue }) => {
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

  return (
    <div
      className={`border-2 border-gray-300 flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      onClick={() => inputRef.current?.click()}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Uploaded"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <IoCamera size={80} className="mb-3 text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to capture</span>, to upload
            image
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
        capture="environment"
        id="cameraInput"
        ref={inputRef}
      />
    </div>
  );
};

export default Capture;

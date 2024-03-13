import React, { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "../../../ui/button";
import { FiUploadCloud } from "react-icons/fi";

interface MultiImageUploadProps {
  onChange?: (files: Blob[]) => void;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({ onChange }) => {
  const [imagePreviews, setImagePreviews] = useState<
    { url: string; file: File }[]
  >([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newImagePreviews = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        file
      }));

      setImagePreviews(prevPreviews => [...prevPreviews, ...newImagePreviews]);
      if (onChange) {
        onChange(
          [...newImagePreviews, ...imagePreviews].map(image => image.file)
        );
      }
    }
  };

  const handleDelete = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const updatedPreviews = [...imagePreviews];
    const deletedImage = updatedPreviews.splice(index, 1)[0];
    URL.revokeObjectURL(deletedImage.url);
    setImagePreviews(updatedPreviews);
    if (onChange) {
      onChange(updatedPreviews.map(image => image.file));
    }
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
        multiple
        ref={inputRef}
      />
      <Button className="w-full p-2" onClick={handleUploadButtonClick}>
        <FiUploadCloud className="mr-1" size={18} />
        Upload
      </Button>
      <div className="flex flex-wrap mt-2">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview.url}
              alt={`Uploaded ${index + 1}`}
              className="h-16 w-16 rounded-lg shadow-md object-cover object-center m-1"
            />
            <button
              className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
              onClick={e => handleDelete(index, e)}
            >
              <FaRegTrashCan />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUpload;

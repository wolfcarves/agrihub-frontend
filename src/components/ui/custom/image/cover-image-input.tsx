import React, { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "../../button";
import { FiUploadCloud } from "react-icons/fi";

interface ImagePreview {
  url: string;
  file: File;
}

interface CoverImageUploadProps {
  onChange: (files: Blob[], imagePreviews: ImagePreview[]) => void;
  disabled: boolean;
}

const CoverImageUpload: React.FC<CoverImageUploadProps> = ({
  onChange,
  disabled
}) => {
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newImagePreviews = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        file
      }));

      setImagePreviews(prevPreviews => [...prevPreviews, ...newImagePreviews]);
      onChange(
        newImagePreviews.map(image => image.file),
        [...imagePreviews, ...newImagePreviews]
      );
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
    onChange(
      updatedPreviews.map(image => image.file),
      updatedPreviews
    );
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
      {imagePreviews.length === 0 && (
        <Button className="w-full p-2" onClick={handleUploadButtonClick}>
          <FiUploadCloud className="mr-1" size={18} />
          Upload
        </Button>
      )}
      <div className="flex flex-wrap my-2">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview.url}
              alt={`Uploaded ${index + 1}`}
              className="h-auto w-auto max-h-[70vh] rounded-lg shadow-md object-cover object-center m-1"
            />
            <button
              className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
              onClick={e => handleDelete(index, e)}
              disabled={disabled}
            >
              <FaRegTrashCan />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverImageUpload;

import React, { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "../../button";
import { FaRegUserCircle } from "react-icons/fa";

interface SingleImageUploadProps {
  onChange: (files: Blob[]) => void;
}

const ProfileImageUpload: React.FC<SingleImageUploadProps> = ({ onChange }) => {
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
      onChange(newImagePreviews.map(image => image.file));
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
    onChange(updatedPreviews.map(image => image.file));
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
      {imagePreviews.length === 0 && (
        <Button className="w-full p-2 -mb-1" onClick={handleUploadButtonClick}>
          <FaRegUserCircle className="m-1" size={18} />
        </Button>
      )}
      <div className="flex flex-wrap mt-2">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview.url}
              alt={`Uploaded ${index + 1}`}
              className="h-[3rem] w-[4.9rem] rounded-lg shadow-md object-cover object-center m-1"
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

export default ProfileImageUpload;

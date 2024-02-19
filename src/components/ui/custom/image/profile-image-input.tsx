import React, { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "../../button";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";

interface SingleImageUploadProps {
  onChange: (file: Blob) => void;
}

const ProfileImageUpload: React.FC<SingleImageUploadProps> = ({ onChange }) => {
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

  return (
    <div
      className={` flex flex-col items-center justify-center h-[2.6rem] w-[2.6rem] border-dashed rounded-lg cursor-pointer bg-primary hover:bg-primary/80`}
      onClick={() => inputRef.current?.click()}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Uploaded"
          className=" h-[2.6rem] w-[2.6rem] rounded-lg object-cover object-center"
        />
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <FaRegUserCircle size={20} className=" text-white" />
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

export default ProfileImageUpload;

import React, { useEffect, useState } from "react";
import { Input } from "../../../ui/input";
import { usePreviewImage } from "../../../../hooks/utils/usePreviewImage";
import icon from "@icons/agrihub-logo.svg";
interface CommunityUploadProps {
  variant: "circle" | "rectangle";
  defaultValue?: string;
  onChange?: (blob: Blob) => void;
}

const CommunityUpload: React.FC<CommunityUploadProps> = ({
  variant,
  defaultValue,
  onChange
}) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const variants =
    variant === "circle"
      ? "rounded-full h-24 w-32 aspect-square"
      : "rectangle"
      ? "h-24 w-56 rounded-md"
      : null;

  useEffect(() => {
    if (defaultValue) {
      setImageSrc(defaultValue);
    }
  }, [defaultValue]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (onChange && file) {
      onChange(file);
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setImageSrc(base64data);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col items-center gap-4">
      <div>
        <img
          className={`bg-slate-100 border  ${variants}`}
          src={imageSrc || (icon as unknown as string)}
        />
      </div>

      <Input
        type="file"
        className="h-10"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CommunityUpload;

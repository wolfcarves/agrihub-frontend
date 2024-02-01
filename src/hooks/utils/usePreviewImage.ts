import { useEffect, useState } from "react";

export const usePreviewImage = (file: File | undefined) => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl("");
    }
  }, [file]);

  return previewUrl;
};

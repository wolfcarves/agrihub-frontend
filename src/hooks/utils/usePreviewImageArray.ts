import { useEffect, useState } from "react";

export const usePreviewImageArray = (files: File[] | undefined) => {
  const [previewUrls, setPreviewUrls] = useState<string[] | undefined>();

  useEffect(() => {
    if (files && files.length) {
      Promise.all(
        files.map(
          file =>
            new Promise<string>(resolve => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.readAsDataURL(file);
            })
        )
      ).then(setPreviewUrls);
    } else {
      setPreviewUrls([]);
    }
  }, [files]);

  return previewUrls;
};

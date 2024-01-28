import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB

export const addGalleryCommunitySchema = zod.object({
  description: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(200, "Name is too long"),

  image: zod
    .any()
    .refine((files: Blob[]) => {
      if (!files || files.length === 0) {
        return false; // At least one image is required
      }

      return true; // At least one image is present
    }, "Please upload at least one image of your farm.")
    .refine((files: Blob[]) => {
      for (const file of files) {
        if (file.size > MAX_IMAGE_FILE_SIZE) {
          return false; // Image size exceeds the maximum allowed size
        }
      }

      return true; // All images are within the size limit
    }, "Please ensure each image is under 10MB in size.")
});

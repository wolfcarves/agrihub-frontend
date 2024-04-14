import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
function isYouTubeVideoLink(value: string | undefined): boolean {
  if (!value) return false;
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)/;
  return youtubeRegex.test(value);
}

export const addResourceSchema = zod.object({
  name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(200, "Name is too long"),

  description: zod
    .string({
      required_error: "Description is required"
    })
    .min(1, " Please enter farm Description"),
  resource: zod
    .string({
      required_error: "Resource is required."
    })
    .refine(isYouTubeVideoLink, "Please enter a valid YouTube video link")
    .optional(),

  type: zod
    .string({
      required_error: "Type is required."
    })
    .min(3, "Please enter at least 3 characters")
    .optional(),

  image: zod
    .any()
    .refine((file: Blob) => {
      // Check if no file has been uploaded yet
      if (!file) {
        return true; // No image uploaded yet
      }

      // Check if the uploaded file is a valid image
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"]; // Add more if needed
      if (allowedTypes.includes(file.type)) {
        return true; // Valid image
      }

      return false; // Invalid image type
    }, "Please upload a valid image (JPEG, PNG, or GIF)")

    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional()
});

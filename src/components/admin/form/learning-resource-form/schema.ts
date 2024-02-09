import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
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
    .optional(),

  type: zod
    .string({
      required_error: "Type is required."
    })
    .min(3, "Please enter at least 3 characters")
    .optional(),

  image: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional()
});

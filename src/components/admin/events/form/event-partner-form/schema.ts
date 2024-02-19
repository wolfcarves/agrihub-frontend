import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
export const addEventPartnerSchema = zod.object({
  type: zod
    .string({
      required_error: "Type is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Type is too long")
    .optional(),
  name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters"),
  logo: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a profile")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),
  organizer: zod.boolean().optional()
});

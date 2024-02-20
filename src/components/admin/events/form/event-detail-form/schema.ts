import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
export const addEventDetailSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Title is too long"),
  about: zod
    .string({
      required_error: "About is required."
    })
    .min(5, "Please enter at least 5 characters")
    .optional(),
  guide: zod
    .string({
      required_error: "Guide is required."
    })
    .min(5, "Please enter at least 5 characters")
    .optional(),

  type: zod
    .string({
      required_error: "Type is required"
    })
    .min(1, " Please Select Type")
    .optional(),
  location: zod
    .string({
      required_error: "Location is required"
    })
    .min(1, " Please Input Location"),
  event_start: zod
    .string({
      required_error: "Event Start is required"
    })
    .min(1, " Please Input Start Date"),
  event_end: zod
    .string({
      required_error: "Event End is required"
    })
    .min(1, " Please Input End Date"),
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

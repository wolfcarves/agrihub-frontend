import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB

export const profileCommunitySchema = zod.object({
  farm_name: zod
    .string({
      required_error: "Name is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(200, "Name is too long")
    .optional(),
  description: zod
    .string({
      required_error: "Description is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(400, "Description is too long")
    .optional(),
  size: zod
    .string({
      required_error: "Size is required"
    })
    .min(1, " Please enter farm size")
    .optional(),
  location: zod
    .string({
      required_error: "Street is required."
    })
    .min(3, "Please enter at least 3 characters")
    .max(200, "location is too long")
    .optional(),

  district: zod
    .string({
      required_error: "District is required."
    })
    .optional(),
  avatar: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),

  cover_photo: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional()
});
export type ProfileCommunitySchema = zod.infer<typeof profileCommunitySchema>;

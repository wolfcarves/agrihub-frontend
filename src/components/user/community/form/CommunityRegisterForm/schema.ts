import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 3MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const registerCommunitySchema = zod.object({
  farm_name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(200, "Name is too long"),

  farm_size: zod
    .string({
      required_error: "Size is required"
    })
    .min(1, " Please enter farm size"),

  location: zod
    .string({
      required_error: "Location is required."
    })
    .min(3, "Please enter at least 3 characters")
    .max(200, "Location is too long"),

  district: zod.string({
    required_error: "District is required."
  }),

  id_type: zod.string({
    required_error: "ID type is required."
  }),

  valid_id: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload image")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    ),
  selfie: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload image")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    ),
  proof: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload image")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    ),
  farm_actual_images: zod.any()
});

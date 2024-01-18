import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 3MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const registerCommunitySchema = zod.object({
  name: zod
    .string({
      required_error: "Name is required."
    })
    .min(10, "Please enter at least 10 characters")
    .max(200, "Name is too long"),

  size: zod
    .string({
      required_error: "Size is required"
    })
    .min(1, " Please enter farm size"),

  location: zod
    .string({
      required_error: "Location is required."
    })
    .min(3, "Please enter at least 10 characters")
    .max(200, "Location is too long"),

  district: zod.string({
    required_error: "District is required."
  }),

  idType: zod.string({
    required_error: "ID type is required."
  }),

  id: zod
    .any()
    .refine((file: FileList) => file?.length === 1, "Please upload image")
    .refine(
      (file: FileList) =>
        file?.[0]?.size === undefined
          ? true
          : file?.[0]?.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .refine(
      (file: FileList) => (
        ALLOWED_IMAGE_FORMATS.includes(file?.[0]?.type),
        "Only .jpg, .jpeg, .png, .webp, formats are supported "
      )
    ),
  selfie: zod
    .any()
    .refine((file: FileList) => file?.length === 1, "Please upload image")
    .refine(
      (file: FileList) =>
        file?.[0]?.size === undefined
          ? true
          : file?.[0]?.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .refine(
      (file: FileList) => (
        ALLOWED_IMAGE_FORMATS.includes(file?.[0]?.type),
        "Only .jpg, .jpeg, .png, .webp, formats are supported "
      )
    ),
  proof: zod
    .any()
    .refine((file: FileList) => file?.length === 1, "Please upload image")
    .refine(
      (file: FileList) =>
        file?.[0]?.size === undefined
          ? true
          : file?.[0]?.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .refine(
      (file: FileList) => (
        ALLOWED_IMAGE_FORMATS.includes(file?.[0]?.type),
        "Only .jpg, .jpeg, .png, .webp, formats are supported "
      )
    )
});

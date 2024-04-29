import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const applyCommunitySchema = zod.object({
  contact_person: zod
    .string({
      required_error: "Contact is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(100, "Contact is too long"),
  reason: zod
    .string({
      required_error: "Reason is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(300, "Reason is too long"),

  proof_selfie: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    ),

  valid_id: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
});
export type ApplyCommunitySchema = zod.infer<typeof applyCommunitySchema>;

import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const userFinalSetup = zod.object({
  avatar: zod
    .any()
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
    .optional(),
  username: zod
    .string()
    .min(3, "Please enter atleast 3 characters")
    .max(30, "Username is way too fucking long")
    .refine(u => !u.includes(" "), {
      message: "Username cannot have space"
    }),
  tags: zod.array(zod.string()).optional()
});

export type UserFinalSetup = zod.infer<typeof userFinalSetup>;

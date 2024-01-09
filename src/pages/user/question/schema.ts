import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 3; // 3MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const askQuestionSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required bro."
    })
    .min(10, "Please enter at least 10 characters")
    .max(200, "Title is too long"),

  question: zod
    .string({
      required_error: "Content is required"
    })
    .min(10, "Content : Please enter some text")
    .max(2000, "Question is too long"),

  tags: zod
    .array(zod.string())
    .optional()
    .refine(
      tags => {
        if (tags && tags.length) {
          if (tags.length <= 5) {
            return true;
          }
        }

        return false;
      },
      {
        message: "Up to 5 tags are allowed"
      }
    ),
  imagesrc: zod
    .any()
    .refine(
      (file: FileList) =>
        file?.[0]?.size === undefined
          ? true
          : file?.[0]?.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 3MB"
    )
    .refine(
      (file: FileList) => (
        ALLOWED_IMAGE_FORMATS.includes(file?.[0]?.type),
        "Only .jpg, .jpeg, .png, .webp, formats are supported "
      )
    )
    .optional()
});

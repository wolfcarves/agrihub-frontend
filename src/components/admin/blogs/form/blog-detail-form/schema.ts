import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
export const addBlogsDetailSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Title is too long"),
  category: zod
    .string({
      required_error: "Category is required."
    })

    .max(100, "Category is too long")
    .optional(),
  content: zod
    .string({
      required_error: "Content is required."
    })
    .min(1, "Please enter at least 5 characters")
    .optional(),

  author: zod
    .string({
      required_error: "Author is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Author is too long"),
  author_title: zod
    .string({
      required_error: "Author Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Author Title is too long")
});

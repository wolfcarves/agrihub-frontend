import * as zod from "zod";

export const addLearningDetailSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Title is too long"),
  content: zod
    .string({
      required_error: "Content is required."
    })
    .min(5, "Please enter at least 5 characters")
    .optional(),

  language: zod
    .string({
      required_error: "Language is required"
    })
    .min(1, " Please enter language")
    .optional()
});

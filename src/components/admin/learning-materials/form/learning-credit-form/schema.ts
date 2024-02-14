import * as zod from "zod";

export const addLearningCreditSchema = zod.object({
  title: zod
    .string({
      required_error: "Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Title is too long"),
  name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
});

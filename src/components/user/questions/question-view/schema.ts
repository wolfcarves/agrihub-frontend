import * as zod from "zod";

export const AddAnswer = zod.object({
  answer: zod
    .string()
    .min(3, "Please enter at least 3 characters")
    .max(200, "Answer is too long")
});

export const AddComment = zod.object({
  answer: zod
    .string()
    .min(3, "Please enter at least 3 characters")
    .max(200, "Comment is too long")
});

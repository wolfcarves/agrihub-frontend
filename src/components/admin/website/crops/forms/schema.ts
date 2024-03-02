import * as zod from "zod";
export const addCropSchema = zod.object({
  name: zod
    .string({
      required_error: "Title is required."
    })
    .min(1, "Please enter at least 5 characters")
    .max(100, "Title is too long"),
});

import * as zod from "zod";

export const ReportSchema = zod.object({
  crop_id: zod
    .string()
    .min(3, "Please enter at least 3 characters")
    .max(200, "Title is too long")

  // planted_qty: zod
  //   .string()
  //   .min(3, "Please enter at least 3 characters")
  //   .max(200, "Title is too long"),
  // date_planted: zod
  //   .string()
  //   .min(3, "Please enter at least 3 characters")
  //   .max(200, "Title is too long"),
  // expected_harvest: zod
  //   .string()
  //   .min(3, "Please enter at least 3 characters")
  //   .max(200, "Title is too long"),
  // note: zod
  //   .string()
  //   .min(3, "Please enter at least 3 characters")
  //   .max(200, "Title is too long")
});

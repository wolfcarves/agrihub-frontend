import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10;
export const cropHarvestReportSchema = zod.object({
  withered_crops: zod.coerce
    .number({
      required_error: "Please provide a planted quantity"
    })
    .min(0, "Withered quantity must be at least 1")
    .max(10000, "Withered quantity cannot exceed 10,000"),

  date_harvested: zod.string().min(0, { message: "Harvest date is Required" }),
  kilogram: zod.coerce
    .number({
      required_error: "Please provide a kilogram"
    })
    .min(0, "Kilogram must be at least 0")
    .max(100000, "Kilogram cannot exceed 100,000"),
  notes: zod.string().optional(),
  task_id: zod.string().optional(),
  images: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload harvest images")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
});

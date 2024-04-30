import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10;
export const communityEventSchema = zod.object({
  title: zod
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be 3 or more characters long" })
    .max(200, { message: "Title must be 200 or fewer characters long" }),
  harvested_qty: zod.coerce
    .number({
      required_error: "Please provide a planted quantity"
    })
    .min(0, "Planted quantity must be at least 1")
    .max(10000, "Planted quantity cannot exceed 10,000"),
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

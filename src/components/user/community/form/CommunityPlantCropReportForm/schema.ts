import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10;
export const cropPlantReportSchema = zod.object({
  crop_id: zod.string({
    required_error: "Crop is required"
  }),

  date_planted: zod.string().min(0, { message: "Planted date is Required" }),

  task_id: zod.string().optional(),
  images: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload planting images")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
});

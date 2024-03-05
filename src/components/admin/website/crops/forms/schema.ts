import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
export const addCropSchema = zod.object({
  name: zod
    .string()
    .min(5, { message: "Please enter at least 5 characters" })
    .max(100, { message: "Title is too long" }),
  description: zod
    .string({
      required_error: "Title is required."
    })
    .min(10, { message: "Description must be at least 10 characters long" })
    .optional(),
  seedling_season: zod
    .string()
    .min(1, { message: "Seedling season is required" })
    .optional(),
  harvest_season: zod
    .string()
    .min(1, { message: "Harvest season is required" })
    .optional(),
  growth_span: zod
    .string()
    .min(1, {message: "growth span required"})
    .optional(),
  isyield: zod.boolean()
  .optional(),
  p_season: zod
    .array(zod.string())
    .min(1, { message: "At least one planting season must be selected" })
    .optional(),
  image: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional()
});

export type AddCropSchemaType = zod.infer<typeof addCropSchema>;

import * as zod from "zod";

export const cropAddReportSchema = zod.object({
  crop_id: zod.string().optional(),
  planted_qty: zod.coerce
    .number({
      required_error: "Please provide a planted quantity"
    })
    .min(0, "Planted quantity must be at least 1")
    .max(10000, "Planted quantity cannot exceed 10,000")
    .optional(),
  is_other: zod.boolean().optional(),
  isyield: zod.boolean().optional(),
  c_name: zod.string().optional(),
  harvested_qty: zod.coerce
    .number({
      required_error: "Please provide a harvested quantity"
    })
    .min(0, "Harvested quantity must be at least 1")
    .max(10000, "Harvested quantity cannot exceed 10,000"),
  withered_crops: zod.coerce
    .number({
      required_error: "Please provide a withered quantity"
    })
    .min(0, "Withered quantity must be at least 0")
    .max(10000, "Withered quantity cannot exceed 10,000"),
  kilogram: zod.coerce
    .number({
      required_error: "Please provide a kilogram"
    })
    .min(0, "Withered quantity must be at least 0")
    .max(10000, "Withered quantity cannot exceed 10,000"),
  date_planted: zod.string().min(0, { message: "Planted date is Required" }),
  date_harvested: zod.string().min(1, { message: "Harvest date is Required" }),
  notes: zod.string().min(1, { message: "Notes is Required" }),
  image: zod.any().refine((files: Blob[]) => {
    if (!files || files.length === 0) {
      return false;
    }

    return true;
  }, "Please upload at least one image of your farm.")
});

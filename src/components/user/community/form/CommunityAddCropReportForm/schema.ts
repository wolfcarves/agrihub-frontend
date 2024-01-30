import * as zod from "zod";

export const cropAddReportSchema = zod.object({
  crop_id: zod.string().min(1, { message: "Crop is Required" }),
  planted_qty: zod.string().min(1, { message: "Planted quantity is Required" }),
  harvested_qty: zod
    .string()
    .min(1, { message: "Harvested quantity is Required" }),
  withered_crops: zod.string().min(1, { message: "Withered crop is Required" }),
  date_planted: zod.string().min(1, { message: "Planted date is Required" }),
  date_harvested: zod.string().min(1, { message: "Harvest date is Required" }),
  notes: zod.string().min(1, { message: "Notes is Required" }),
  image: zod.any().refine((files: Blob[]) => {
    if (!files || files.length === 0) {
      return false;
    }

    return true;
  }, "Please upload at least one image of your farm.")
});

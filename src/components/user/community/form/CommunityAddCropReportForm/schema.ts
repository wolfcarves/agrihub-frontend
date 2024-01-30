import * as zod from "zod";

export const cropAddReportSchema = zod.object({
  crop_id: zod.string().min(1, { message: "Crop is Required" }),
  planted_qty: zod.string(),
  harvested_qty: zod.string(),
  withered_crops: zod.string(),
  date_planted: zod.string(),
  date_harvested: zod.string(),
  notes: zod.string(),
  image: zod.any().refine((files: Blob[]) => {
    if (!files || files.length === 0) {
      return false;
    }

    return true;
  }, "Please upload at least one image of your farm.")
});

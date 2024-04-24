import * as zod from "zod";
import { CropItem, CropReportViewResponse } from "../../../../../api/openapi";

export const cropAddReportSchema = (
  cropId: string,
  CropReport: CropReportViewResponse,
  farmCrops: CropItem[]
) => {
  return zod
    .object({
      crop_id: zod.string().optional(),
      planted_qty: cropId
        ? zod.coerce
            .number({
              required_error: "Please provide a planted quantity"
            })
            .min(0, "Planted quantity must be at least 1")
            .max(10000, "Planted quantity cannot exceed 10,000")
            .optional()
        : zod.coerce
            .number({
              required_error: "Please provide a planted quantity"
            })
            .min(0, "Planted quantity must be at least 1")
            .max(10000, "Planted quantity cannot exceed 10,000"),
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
        .min(0, "Kilogram must be at least 0")
        .max(100000, "Kilogram cannot exceed 100,000"),
      date_planted: cropId
        ? zod
            .string()
            .min(0, { message: "Planted date is Required" })
            .optional()
        : zod.string().min(0, { message: "Planted date is Required" }),
      date_harvested: zod
        .string()
        .min(1, { message: "Harvest date is Required" }),
      notes: zod.string().min(1, { message: "Notes is Required" }),
      image: zod.any().refine((files: Blob[]) => {
        if (!files || files.length === 0) {
          return false;
        }

        return true;
      }, "Please upload at least one image of your farm.")
    })
    .refine(
      data => {
        if (cropId) {
          if (CropReport?.isyield) {
            const Quantity =
              Number(CropReport?.planted_qty || "0") - data.withered_crops;
            if (Quantity <= 0) {
              return false;
            }
            return true;
          } else {
            const Quantity =
              Number(CropReport?.planted_qty || "0") -
              (data.withered_crops + data.harvested_qty);

            if (Quantity <= 0) {
              return false;
            }
            return true;
          }
        }
        return true;
      },
      {
        message: CropReport?.isyield
          ? "Withered plants quantity canno't be greater than planted quantity"
          : "The combined quantity of withered plants and harvested canno't be greater than planted quantity",
        path: [CropReport?.isyield ? "withered_crops" : "harvested_qty"] // You can specify the path where the error will be shown
      }
    )
    .refine(
      data => {
        const selectedCrop = farmCrops?.find(obj => obj.id === data.crop_id);
        if (selectedCrop?.isyield) {
          if (selectedCrop?.isyield && data?.planted_qty) {
            const Quantity = data?.planted_qty - data.withered_crops;
            if (Quantity <= 0) {
              return false;
            }
            return true;
          } else {
            const Quantity =
              data?.planted_qty ||
              0 - (data.withered_crops + data.harvested_qty);

            if (Quantity <= 0) {
              return false;
            }
            return true;
          }
        }
        return true;
      },
      {
        message:
          "Withered plants or harvested quantity canno't be greater than planted quantity",
        path: ["withered_crops"] // You can specify the path where the error will be shown
      }
    );
};

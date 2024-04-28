import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB
const ALLOWED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

export const registerCommunitySchema = zod.object({
  farm_name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(200, "Name is too long"),

  farm_size: zod.coerce
    .number({
      required_error: "Size is required"
    })
    .min(1, " Please enter farm size")
    .max(10000, " Invalid farm size value"),
  street: zod
    .string({
      required_error: "Street is required."
    })
    .min(3, "Please enter at least 3 characters")
    .max(200, "Street is too long"),
  barangay: zod
    .string({
      required_error: "Barangay is required."
    })
    .min(3, "Please enter at least 3 characters")
    .max(200, "Barangay is too long"),

  district: zod.string({
    required_error: "District is required."
  }),

  id_type: zod.string({
    required_error: "ID type is required."
  }),

  valid_id: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a valid ID")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    ),

  proof: zod.string({
    required_error: "Ownership is required."
  }),
  type_of_farm: zod.string({
    required_error: "Farm Type is required."
  }),
  farm_actual_images: zod
    .any()
    .refine(
      (file: Blob[]) => file !== undefined,
      "Please upload atleast one image of your farm"
    )
});
export type RegisterCommunitySchema = zod.infer<typeof registerCommunitySchema>;

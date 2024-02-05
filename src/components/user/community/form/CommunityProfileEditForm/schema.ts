import * as zod from "zod";

const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB

export const profileCommunitySchema = zod.object({
  farm_name: zod
    .string({
      required_error: "Name is required."
    })
    .min(5, "Please enter at least 5 characters")
    .max(200, "Name is too long"),

  farm_size: zod
    .string({
      required_error: "Size is required"
    })
    .min(1, " Please enter farm size"),
  location: zod
    .string({
      required_error: "Street is required."
    })
    .min(3, "Please enter at least 3 characters")
    .max(100, "location is too long"),

  district: zod.string({
    required_error: "District is required."
  }),

  avatar: zod.any().refine(
    (file: Blob[]) => {
      return (
        file !== undefined &&
        file[0] instanceof Blob &&
        file[0].size <= MAX_IMAGE_FILE_SIZE
      );
    },
    `Please upload Logo with a maximum size of ${
      MAX_IMAGE_FILE_SIZE / (1024 * 1024)
    }MB`
  ),

  background: zod.any().refine(
    (file: Blob[]) => {
      return (
        file !== undefined &&
        file[0] instanceof Blob &&
        file[0].size <= MAX_IMAGE_FILE_SIZE
      );
    },
    `Please upload background image with a maximum size of ${
      MAX_IMAGE_FILE_SIZE / (1024 * 1024)
    }MB`
  )
});
export type ProfileCommunitySchema = zod.infer<typeof profileCommunitySchema>;

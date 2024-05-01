import * as zod from "zod";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10;
export const communityEventSchema = zod.object({
  title: zod
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be 3 or more characters long" })
    .max(200, { message: "Title must be 200 or fewer characters long" }),
  about: zod
    .string({ required_error: "About is required" })
    .min(3, { message: "About must be 3 or more characters long" }),
  start_date: zod.string().min(1, { message: "Start date is Required" }),
  end_date: zod.string().min(1, { message: "End date is Required" }),
  tags: zod.array(zod.string()).optional(),
  type: zod.string().min(1, { message: "Type is Required" }),
  banner: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload harvest images")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
});

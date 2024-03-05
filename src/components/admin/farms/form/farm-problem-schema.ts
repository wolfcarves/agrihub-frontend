import { z } from "zod";

export const MaterialSchema = z.object({
  content: z.string(),
  createdat: z.string(), // Assuming date-time format
  id: z.string(),
  tags: z.array(
    z.object({
      tag: z.string()
    })
  ),
  fpm_id: z.string().optional(),
  thumbnail: z.object({
    id: z.string(),
    resource: z.string(),
    type: z.string()
  }),
  title: z.string(),
  updatedat: z.string() // Assuming date-time format
});

export type Material = z.infer<typeof MaterialSchema>;

export const CreateProblemSchema = z.object({
  problem: z.string({ required_error: "Problem is required" }),
  description: z.string({ required_error: "Description is required" }).min(5),
  materials: z
    .array(MaterialSchema)
    .min(1, { message: "You must input at least 1 learning material." })
});

export type Problem = z.infer<typeof CreateProblemSchema>;

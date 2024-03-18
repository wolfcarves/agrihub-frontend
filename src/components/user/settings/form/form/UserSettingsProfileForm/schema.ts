import { z } from "zod";

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(3, "First name should be at least 3 characters")
    .max(30, "First name is too long")
    .regex(/^[A-Za-z]+$/, "Numeric and symbols are not allowed"),
  lastname: z
    .string()
    .min(3, "Last name should be at least 3 characters")
    .max(30, "First name is too long")
    .regex(/^[A-Za-z]+$/, "Numeric and symbols are not allowed"),
  bio: z.string().optional().nullish(),
  present_address: z.string().min(8, "Please enter valid address")
});

export type ProfileSchema = z.infer<typeof profileSchema>;

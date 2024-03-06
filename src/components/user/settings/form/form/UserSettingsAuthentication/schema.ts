import { z } from "zod";

export const authenticationSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password is too much")
    .regex(new RegExp(".*[A-Z].*"), "Password must have one capital letter")
    .regex(new RegExp(".*[a-z].*"), "Password must have one capital letter")
    .regex(new RegExp(".*[0-9].*"), "Password must have one digit number"),
  confirmNewPassword: z.string()
});

export type AuthenticationSchema = z.infer<typeof authenticationSchema>;

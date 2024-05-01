import { z } from "zod";

export const forgotPasswordSchema = z
  .object({
    username: z
      .string({
        required_error: "Please enter email or username"
      })
      .optional(),
    phone: z.string().max(13, "Please enter valid phone number").optional()
  })
  .partial()
  .refine(
    data => data.username || data.phone,
    "Please enter either your email or phone number"
  );

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

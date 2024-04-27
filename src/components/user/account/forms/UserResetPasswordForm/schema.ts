import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(25, "Password is too much")
      .regex(new RegExp(".*[A-Z].*"), "Password must have uppercase letter")
      .regex(new RegExp(".*[a-z].*"), "Password must have lowercase letter")
      .regex(new RegExp(".*[0-9].*"), "Password must have one digit number"),
    confirmPassword: z.string()
  })
  .superRefine((val, ctx) => {
    if (
      val.password !== val.confirmPassword ||
      !val.password ||
      !val.confirmPassword
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Password must match",
        path: ["confirmPassword"]
      });
    }
  });

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

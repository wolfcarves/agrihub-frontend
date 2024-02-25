import { z } from "zod";

export const forgotPasswordSchema = z.object({
  username: z.string().min(1, "Please enter email or username")
});

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

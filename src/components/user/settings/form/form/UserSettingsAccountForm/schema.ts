import { z } from "zod";

const phoneRegex = /^(639\d{9}|09\d{9})$/;

export const confirmPasswordSchema = z.object({
  password: z
    .string()
    .min(1, "Please enter your password")
    .max(50, "Password is wrong")
});

export type ConfirmPasswordSchema = z.infer<typeof confirmPasswordSchema>;

export const changeEmailSchema = z.object({
  email: z
    .string({
      required_error: "Please enter your new email address"
    })
    .email()
    .max(50, "Seems to be not a valid email address")
});

export type ChangeEmailSchema = z.infer<typeof changeEmailSchema>;

export const changePhoneSchema = z.object({
  phone: z
    .string()
    .refine(
      value => phoneRegex.test(value ?? ""),
      "Please enter valid phone number, ex.09XXXXXXXXX, 63XXXXXXXXXX"
    )
});

export type ChangePhoneSchema = z.infer<typeof changePhoneSchema>;

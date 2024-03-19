import { z } from "zod";

export const forgotPasswordSchema = z
  .object({
    username: z
      .string({
        required_error: "Please enter email or username"
      })
      .email({
        message: "That is not a valid email"
      })
      .min(1, "Please enter email or username")
      .optional(),
    phone: z
      .string()
      .min(1, "Please enter your phone number")
      .max(13, "Please enter valid phone number")
  })
  .partial()
  .refine(
    data => data.username || data.phone,
    "Please enter either your email or phone number"
  );
// .and(
//   z.union(
//     [
//       z.object({
//         username: z.string(),
//         phone: z.undefined()
//       }),
//       z.object({
//         username: z.undefined(),
//         phone: z.string()
//       })
//     ],
//     {
//       errorMap: () => ({
//         message: "Please enter either your email or phone number"
//       })
//     }
//   )
// );

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

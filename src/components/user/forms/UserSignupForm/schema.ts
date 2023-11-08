import * as zod from "zod";

export const userSignupSchema = zod
  .object({
    email: zod.string().email(),
    password: zod
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password is too much")
      .regex(new RegExp(".*[A-Z].*"), "Password must have one capital letter")
      .regex(new RegExp(".*[a-z].*"), "Password must have one capital letter")
      .regex(new RegExp(".*[0-9].*"), "Password must have one digit number"),
    confirmPassword: zod.string()
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password must match",
        path: ["confirmPassword"]
      });
    }
  });

export type UserSignUp = zod.infer<typeof userSignupSchema>;

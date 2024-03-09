import * as zod from "zod";

const phoneRegex = /^(639\d{9}|09\d{9})$/;

export const userSignupSchema = (type?: "email" | "phone") =>
  zod
    .object({
      email:
        type === "email"
          ? zod.string().email().min(1, "Please enter your email")
          : zod.string().optional(),
      phone:
        type === "phone"
          ? zod
              .string()
              .refine(
                value => phoneRegex.test(value ?? ""),
                "Please enter valid phone number, ex.09XXXXXXXXX, 63XXXXXXXXXX"
              )
          : zod.string().optional(),

      password: zod
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(30, "Password is too much")
        .regex(
          new RegExp(".*[A-Z].*"),
          "Password must have one uppercase letter"
        )
        .regex(
          new RegExp(".*[a-z].*"),
          "Password must have one lowercase letter"
        )
        .regex(new RegExp(".*[0-9].*"), "Password must have one digit number"),
      confirmPassword: zod.string()
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

const schema = userSignupSchema();

export type UserSignUp = zod.infer<typeof schema>;

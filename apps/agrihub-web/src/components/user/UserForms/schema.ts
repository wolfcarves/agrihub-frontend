import * as zod from "zod";

export const UserLoginSchema = zod.object({
  email: zod.string().email().min(1, "Please enter your email."),
  password: zod.string().min(1, "Please enter your password.")
});

export type UserLogin = zod.TypeOf<typeof UserLoginSchema>;

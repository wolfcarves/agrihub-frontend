import * as zod from "zod";

export const UserLoginSchema = zod.object({
  user: zod.string().email().min(1, "Please enter your username."),
  password: zod.string().min(1, "Please enter your password.")
});

export type UserLogin = zod.TypeOf<typeof UserLoginSchema>;

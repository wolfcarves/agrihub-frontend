import { z } from "zod";

export const authenticationSchema = z.object({
  type: z.enum(["email", "phone"])
});

export type AuthenticationSchema = z.infer<typeof authenticationSchema>;

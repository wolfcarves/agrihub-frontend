import { z } from "zod";

const validationMessage = "Alisin ang mga spaces at mga simbolo";

export const profileSchema = z.object({
  firstname: z
    .string()
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, {
      message: validationMessage
    })
    .refine(value => value.trim() === value, {
      message: validationMessage,
      path: ["firstname"]
    }),
  lastname: z
    .string()
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, {
      message: validationMessage
    })
    .refine(value => value.trim() === value, {
      message: validationMessage,
      path: ["lastname"]
    }),
  bio: z.string().max(50, "50 characters only").optional().nullish(),
  present_address: z.string().min(8, "Please enter valid address").trim()
});

export type ProfileSchema = z.infer<typeof profileSchema>;

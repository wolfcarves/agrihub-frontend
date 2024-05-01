import { z } from "zod";

const validationMessage = "Whitespaces and symbold are not allowed";

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
  present_address: z.string().trim().optional(),
  dob: z
    .date({
      required_error: "Birth day is required",
      invalid_type_error: "That's not a date!"
    })
    .min(new Date("1900-01-01"), "That's not a valid date!")
    .max(new Date(), "That's not a valid date!"),
  district: z.string().regex(/^(1|2|3|4|5|6)$/, {
    message: "Invalid district"
  }),
  tags: z.array(z.string()).optional()
});

export type ProfileSchema = z.infer<typeof profileSchema>;

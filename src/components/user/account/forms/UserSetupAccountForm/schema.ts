import * as zod from "zod";

const validationMessage = "Whitespaces and symbols are not allowed";

export const userSetupAcountSchema = zod.object({
  firstname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your firstname is way too long")
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, {
      message: validationMessage
    })
    .refine(value => value.trim() === value, {
      message: validationMessage,
      path: ["firstname"]
    }),
  lastname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your lastname is way too long")
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, {
      message: validationMessage
    })
    .refine(value => value.trim() === value, {
      message: validationMessage,
      path: ["lastname"]
    }),
  dob: zod
    .date({
      required_error: "Birth day is required",
      invalid_type_error: "That's not a date!"
    })
    .min(new Date("1900-01-01"), "That's not a valid date!")
    .max(new Date(), "That's not a valid date!"),
  presentAddress: zod.string().min(8, "Please enter valid address")
});

export type UserSetupAccount = zod.infer<typeof userSetupAcountSchema>;

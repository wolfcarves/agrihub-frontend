import * as zod from "zod";

const pattern = /^[a-zA-Z ]+$/;
const message = "Symbols and numbers are not allowed";

export const userSetupAcountSchema = zod.object({
  firstname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your firstname is way too long")
    .regex(pattern, {
      message
    }),
  middlename: zod
    .string()
    .max(40, "Your lastname is way too long")
    .refine(
      val => {
        if (!val) return true;
        if (pattern.test(val)) return true;
      },
      { message }
    ),
  lastname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your lastname is way too long")
    .regex(pattern, {
      message
    }),
  dob: zod
    .date({
      required_error: "Birth day is required",
      invalid_type_error: "That's not a date!"
    })
    .min(new Date("1900-01-01"), "That's not a valid date!")
    .max(new Date(), "That's not a valid date!"),
  presentAddress: zod.string().max(50, "Input is too long").optional(),
  district: zod.string().regex(/^(1|2|3|4|5|6)$/, {
    message: "Invalid district"
  })
  // municipality: zod.enum(districtsValues, {
  //   required_error: "Please enter your city",
  //   errorMap: () => ({ message: "Invalid city" })
  // })
});

export type UserSetupAccount = zod.infer<typeof userSetupAcountSchema>;

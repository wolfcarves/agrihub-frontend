import * as zod from "zod";
import {
  district1,
  district2,
  district3,
  district4,
  district5,
  district6
} from "../../../../../constants/data";

const validationMessage = "Whitespaces and symbols are not allowed";

const districtsValues = [
  ...district1,
  ...district2,
  ...district3,
  ...district4,
  ...district5,
  ...district6
] as const;

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
  middlename: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your lastname is way too long")
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, {
      message: validationMessage
    })
    .refine(value => value.trim() === value, {
      message: validationMessage,
      path: ["middlename"]
    }),
  dob: zod
    .date({
      required_error: "Birth day is required",
      invalid_type_error: "That's not a date!"
    })
    .min(new Date("1900-01-01"), "That's not a valid date!")
    .max(new Date(), "That's not a valid date!"),
  presentAddress: zod.string().min(8, "Please enter valid address"),
  district: zod.string().regex(/^(1|2|3|4|5|6)$/, {
    message: "Invalid district"
  })
  // municipality: zod.enum(districtsValues, {
  //   required_error: "Please enter your city",
  //   errorMap: () => ({ message: "Invalid city" })
  // })
});

export type UserSetupAccount = zod.infer<typeof userSetupAcountSchema>;

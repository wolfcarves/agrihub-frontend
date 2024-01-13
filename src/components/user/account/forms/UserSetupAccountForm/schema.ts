import * as zod from "zod";

export const userSetupAcountSchema = zod.object({
  firstname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your firstname is way too long"),
  lastname: zod
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(40, "Your lastname is way too long"),
  month: zod.string().refine(val => parseInt(val) <= 12 && parseInt(val) >= 1, {
    message: "Invalid month value"
  }),
  year: zod.string().refine(y => parseInt(y) <= 2010 && parseInt(y) >= 1960),
  presentAddress: zod.string().min(8, "Please enter valid address")
});

export type UserSetupAccount = zod.infer<typeof userSetupAcountSchema>;

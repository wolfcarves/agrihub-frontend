import * as zod from "zod";

export const userSetupAcountSchema = zod.object({
  firstname: zod
    .string()
    .min(3, "Please enter at least 3 characters")
    .max(15, "Your firstname is way too long"),
  lastname: zod
    .string()
    .min(3, "Please enter at least 3 characters")
    .max(30, "Your lastname is way too long"),
  month: zod.number().min(1, "Invalid month").max(12, "Invalid month"),
  year: zod
    .number()
    .int("Cannot accept string")
    .min(1960, "Invalid year")
    .max(new Date().getFullYear() - 13, "Invalid year"),
  presentAddress: zod.string().min(8, "Please enter valid address")
});

export type UserSetupAccount = zod.infer<typeof userSetupAcountSchema>;

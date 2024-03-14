import { z } from "zod";

export const ClientDetailsSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  logo: z.string().min(3, { message: "logo is required" }).optional(),
  email: z.string({ required_error: "email is required" }),
  contact_number: z.string({ required_error: "contact_number is required" }),
  address: z.string({ required_error: "address is required" }),
  mission: z.string({ required_error: "mission is required" }),
  vision: z.string({ required_error: "vision is required" }),
  socials: z
    .array(
      z
        .object({
          id: z.string().optional(),
          name: z.string(),
          link: z.string()
        })
        .optional()
    )
    .min(1)
    .optional(),
  partners: z
    .array(
      z
        .object({
          id: z.string().optional(),
          logo: z.string().min(3),
          name: z.string().min(3),
          description: z.string().min(3)
        })
        .optional()
    )
    .min(1)
    .optional(),
  members: z
    .array(
      z
        .object({
          id: z.string().optional(),
          name: z.string(),
          image: z.string().nullable(),
          position: z.string(),
          description: z.string().nullable()
        })
        .optional()
    )
    .min(1)
    .optional()
});

export type ClientDetails = z.infer<typeof ClientDetailsSchema>;

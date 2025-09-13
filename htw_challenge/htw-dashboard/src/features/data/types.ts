import { z } from "zod";

export const RowSchema = z.object({
  Type: z.string().optional(),
  Name: z.string().optional(),
  Industry: z.string().optional(),
  City: z.string().optional(),
  State: z.string().optional(),
  Country: z.string().optional(),
  Lat: z.string().optional(),
  Lng: z.string().optional(),
  Date: z.string().optional()
}).passthrough();

export type RawRow = z.infer<typeof RowSchema>;

export type Normalized = {
  type: "Person" | "Event" | "Unknown";
  name?: string;
  industry?: string;
  city?: string;
  state?: string;
  country?: string;
  lat?: number;
  lng?: number;
  date?: string;
};

import { z } from "zod";
import { Document } from "mongoose";

export const viewSchema = z.object({
  userId: z.string(),
  viewer: z.string(),
  time: z.number(),
  viewerCountry: z.string(),
  metadata: z.record(z.string(), z.any()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type View = z.infer<typeof viewSchema>;

export interface IView extends View, Document {}

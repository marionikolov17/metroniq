import { z } from "zod";
import { Document } from "mongoose";

export const notificationSchema = z.object({
  userId: z.string(),
  actorIp: z.string(),
  actorCountry: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  metadata: z.record(z.any()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Notification = z.infer<typeof notificationSchema>;

export interface INotification extends Notification, Document {}

import { z } from "zod";
import { Document } from "mongoose";

export const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  profileImage: z.string().optional().default(""),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type User = z.infer<typeof userSchema>;

export interface IUser extends User, Document {}

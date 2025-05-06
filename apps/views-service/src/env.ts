import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('3000'),
});

type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  PORT: process.env.PORT || '3000',
});

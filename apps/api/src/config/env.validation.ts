import { z } from "zod";

const environmentSchema = z.object({
  API_PORT: z.coerce.number().int().positive().default(4000),
  CLERK_ISSUER: z.string().url().optional(),
  CLERK_JWKS_URL: z.string().url().optional(),
  CLERK_SECRET_KEY: z.string().min(1).optional(),
  CORS_ORIGIN: z.string().url(),
  DATABASE_URL: z.string().min(1),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type ApiEnvironment = z.infer<typeof environmentSchema>;

export function validateEnvironment(config: Record<string, unknown>): ApiEnvironment {
  return environmentSchema.parse(config);
}

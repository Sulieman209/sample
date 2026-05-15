import { userRoles } from "@tutoring-saas/types";
import { z } from "zod";

export const syncCurrentUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string().trim().max(120).optional(),
  imageUrl: z.string().url().optional(),
  lastName: z.string().trim().max(120).optional(),
  role: z.enum(userRoles),
});

export type SyncCurrentUserInput = z.infer<typeof syncCurrentUserSchema>;

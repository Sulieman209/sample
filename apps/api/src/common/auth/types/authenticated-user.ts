import type { UserRole } from "@tutoring-saas/types";

export type AuthenticatedUser = {
  clerkId: string;
  email: string | null;
  role: UserRole;
};

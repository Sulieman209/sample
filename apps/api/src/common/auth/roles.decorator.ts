import { SetMetadata } from "@nestjs/common";
import type { UserRole } from "@tutoring-saas/types";

export const REQUIRED_ROLES_KEY = "requiredRoles";

export function Roles(...roles: UserRole[]) {
  return SetMetadata(REQUIRED_ROLES_KEY, roles);
}

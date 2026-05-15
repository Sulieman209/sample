import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "@tutoring-saas/types";
import { REQUIRED_ROLES_KEY } from "@/common/auth/roles.decorator";
import { AuthenticatedUser } from "@/common/auth/types/authenticated-user";

type RequestWithUser = {
  user?: AuthenticatedUser;
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(REQUIRED_ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const role = request.user?.role;

    if (role && requiredRoles.includes(role)) {
      return true;
    }

    throw new ForbiddenException("You do not have access to this resource.");
  }
}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { verifyToken } from "@clerk/backend";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { UserRole, userRoles } from "@tutoring-saas/types";
import { AuthenticatedUser } from "@/common/auth/types/authenticated-user";

type RequestWithUser = Request & {
  user?: AuthenticatedUser;
};

type ClerkClaims = {
  sub: string;
  email?: string;
  publicMetadata?: {
    role?: string;
  };
};

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.getBearerToken(request);

    if (!token) {
      throw new UnauthorizedException("Missing bearer token.");
    }

    const secretKey = this.configService.get<string>("CLERK_SECRET_KEY");
    const claims = (await verifyToken(token, { secretKey })) as ClerkClaims;
    const role = this.normalizeRole(claims.publicMetadata?.role);

    request.user = {
      clerkId: claims.sub,
      email: claims.email ?? null,
      role,
    };

    return true;
  }

  private getBearerToken(request: Request): string | null {
    const header = request.headers.authorization;

    if (!header?.startsWith("Bearer ")) {
      return null;
    }

    return header.slice("Bearer ".length);
  }

  private normalizeRole(value: string | undefined): UserRole {
    if (value && userRoles.includes(value as UserRole)) {
      return value as UserRole;
    }

    return "STUDENT";
  }
}

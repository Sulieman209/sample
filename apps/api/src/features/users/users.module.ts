import { Module } from "@nestjs/common";
import { ClerkAuthGuard } from "@/common/auth/clerk-auth.guard";
import { RolesGuard } from "@/common/auth/roles.guard";
import { UsersController } from "@/features/users/users.controller";
import { UsersRepository } from "@/features/users/users.repository";
import { UsersService } from "@/features/users/users.service";

@Module({
  controllers: [UsersController],
  providers: [ClerkAuthGuard, RolesGuard, UsersRepository, UsersService],
})
export class UsersModule {}

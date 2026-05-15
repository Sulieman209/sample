import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ClerkAuthGuard } from "@/common/auth/clerk-auth.guard";
import { CurrentUser } from "@/common/auth/current-user.decorator";
import { AuthenticatedUser } from "@/common/auth/types/authenticated-user";
import { SyncCurrentUserDto } from "@/features/users/dto/sync-current-user.dto";
import { UsersService } from "@/features/users/users.service";

@Controller("users")
@UseGuards(ClerkAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  getCurrentUser(@CurrentUser() user: AuthenticatedUser) {
    return this.usersService.getCurrentUser(user);
  }

  @Post("me/sync")
  syncCurrentUser(@CurrentUser() user: AuthenticatedUser, @Body() dto: SyncCurrentUserDto) {
    return this.usersService.syncCurrentUser(user, dto);
  }
}

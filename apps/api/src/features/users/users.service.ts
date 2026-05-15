import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthenticatedUser } from "@/common/auth/types/authenticated-user";
import { SyncCurrentUserDto } from "@/features/users/dto/sync-current-user.dto";
import { UsersRepository } from "@/features/users/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getCurrentUser(authenticatedUser: AuthenticatedUser): Promise<User | null> {
    return this.usersRepository.findByClerkId(authenticatedUser.clerkId);
  }

  syncCurrentUser(authenticatedUser: AuthenticatedUser, dto: SyncCurrentUserDto): Promise<User> {
    return this.usersRepository.upsertByClerkId(authenticatedUser.clerkId, {
      email: dto.email,
      firstName: dto.firstName ?? null,
      imageUrl: dto.imageUrl ?? null,
      lastName: dto.lastName ?? null,
      role: dto.role,
    });
  }
}

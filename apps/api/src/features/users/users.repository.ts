import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "@/infra/prisma/prisma.service";

type UserCreateWithoutClerkId = Omit<Prisma.UserCreateInput, "clerkId">;

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByClerkId(clerkId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { clerkId },
    });
  }

  upsertByClerkId(clerkId: string, data: UserCreateWithoutClerkId): Promise<User> {
    return this.prisma.user.upsert({
      create: {
        ...data,
        clerkId,
      },
      update: {
        email: data.email,
        firstName: data.firstName,
        imageUrl: data.imageUrl,
        lastName: data.lastName,
      },
      where: { clerkId },
    });
  }
}

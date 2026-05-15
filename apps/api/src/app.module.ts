import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { validateEnvironment } from "@/config/env.validation";
import { HealthModule } from "@/features/health/health.module";
import { UsersModule } from "@/features/users/users.module";
import { PrismaModule } from "@/infra/prisma/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnvironment,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 120,
      },
    ]),
    PrismaModule,
    HealthModule,
    UsersModule,
  ],
})
export class AppModule {}

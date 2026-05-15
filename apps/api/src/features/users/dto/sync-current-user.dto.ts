import { IsEmail, IsIn, IsOptional, IsString, IsUrl, MaxLength } from "class-validator";
import { UserRole, userRoles } from "@tutoring-saas/types";

export class SyncCurrentUserDto {
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  lastName?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsIn(userRoles)
  role!: UserRole;
}

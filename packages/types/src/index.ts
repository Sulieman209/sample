export const userRoles = ["STUDENT", "TUTOR", "ADMIN", "SUPER_ADMIN"] as const;

export type UserRole = (typeof userRoles)[number];

export type ApiSuccess<TData> = {
  data: TData;
  meta?: Record<string, string | number | boolean>;
};

export type ApiError = {
  error: {
    code: string;
    message: string;
    fieldErrors?: Record<string, string[]>;
  };
};

export type UserSummary = {
  id: string;
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

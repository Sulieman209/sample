# Phase 1, Foundation

## What This Phase Builds

- Monorepo with `apps/web`, `apps/api`, `packages/ui`, `packages/types`, and `packages/utils`.
- Next.js App Router frontend with Clerk route protection, dark mode, responsive app shell, and feature folders.
- NestJS REST API with Helmet, CORS, rate limiting, DTO validation, Clerk auth guard, and role guard.
- Prisma schema for the MVP domain, including users, tutors, students, admins, courses, classes, messaging, support, payments, payouts, reviews, certificates, progress, and audit logs.

## Folder Structure

```txt
apps/
  web/
    src/app/
    src/features/
    src/lib/
    src/providers/
  api/
    prisma/
    src/common/
    src/config/
    src/features/
    src/infra/
packages/
  ui/
  types/
  utils/
docs/
```

## Backend Modules

- `features/health`, operational health endpoint.
- `features/users`, current user read and Clerk user sync.
- `common/auth`, Clerk authentication and role authorization.
- `infra/prisma`, database client lifecycle.

## Initial APIs

- `GET /v1/health`, returns service health.
- `GET /v1/users/me`, returns the current database user for the Clerk identity.
- `POST /v1/users/me/sync`, validates and upserts the current user.

## Frontend Pages

- `/`, product entry.
- `/dashboard`, role-aware dashboard shell.
- `/courses`, course management entry.
- `/tutors`, tutor profile and approval entry.
- `/messages`, messaging workspace entry.
- `/support`, support ticket entry.

## Security Considerations

- Clerk protects private frontend routes.
- The API validates bearer tokens and never trusts the frontend role alone.
- DTO validation rejects unknown fields.
- Helmet, CORS allowlists, and rate limiting are enabled at the API boundary.
- Prisma relations use restrictive deletes where money, tutor ownership, or class history should not disappear accidentally.

## Scalability Considerations

- Feature folders keep future work isolated.
- Shared contracts reduce API drift.
- The modular monolith keeps deployment simple while allowing modules to become services later if the product truly needs it.
- Database indexes are added for role, tutor status, course subject, course status, class time, class status, and message timelines.

## Phase 2 Entry Criteria

- Node.js 22 or newer is installed.
- Dependencies install successfully with pnpm.
- Prisma Client generation succeeds.
- `.env` contains Clerk, database, and CORS values.
- The API health endpoint and protected dashboard can run locally.

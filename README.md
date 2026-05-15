# Tutoring SaaS

Production-grade tutoring and course SaaS foundation with a Next.js frontend, NestJS API, Prisma, Clerk auth boundaries, shared UI, shared types, and feature-based architecture.

## Apps

- `apps/web`, Next.js App Router frontend.
- `apps/api`, NestJS REST API.
- `packages/ui`, shared UI primitives.
- `packages/types`, shared API and domain contracts.
- `packages/utils`, shared validation and utility helpers.

## Local Setup

1. Install Node.js 22 or newer.
2. Enable pnpm with Corepack, `corepack enable`.
3. Install dependencies, `pnpm install`.
4. Copy `.env.example` to `.env` and fill required values.
5. Generate Prisma Client, `pnpm --filter @tutoring-saas/api prisma:generate`.
6. Start both apps, `pnpm dev`.

## Development Rules

- Keep product code inside feature folders.
- Keep frontend business logic out of UI components.
- Keep backend database access inside repositories.
- Use REST APIs only.
- Use strict TypeScript and never use `any`.
- Validate frontend forms with Zod and React Hook Form.
- Validate backend requests with DTOs and server-side authorization.

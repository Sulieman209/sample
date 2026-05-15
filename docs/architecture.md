# Tutoring SaaS Architecture

## Phase 1 Scope

The first phase establishes a monorepo with a Next.js frontend, a NestJS API, shared UI, shared types, shared utilities, Prisma, Clerk auth boundaries, and role-aware routing.

## Architecture Decisions

- The product starts as a modular monolith because it keeps deployments simple while preserving clear feature boundaries.
- REST is the only API style. This keeps the frontend, backend, mobile clients, and future AI agents easy to reason about.
- The backend follows Controller -> Service -> Repository -> Database. Repositories own database access and services own business rules.
- The frontend follows UI -> Feature hook or action -> API client -> Backend. UI components stay free of business logic.
- Shared packages contain only primitives and contracts. Product features live inside `apps/web/src/features` and `apps/api/src/features`.
- Clerk is the identity provider. The API still validates roles server-side because frontend route protection is never treated as authorization.

## Phase Roadmap

1. Foundation, auth, database, layouts, protected routes, role guards, and shared packages.
2. Student, tutor, admin, and super admin user systems.
3. Courses, modules, lessons, files, publishing, and progress tracking.
4. Live classes, Google Meet scheduling, attendance, reminders, and timezones.
5. Subscriptions, payments, invoices, payout processing, and billing webhooks.
6. Messaging, attachments, read receipts, notifications, and support tickets.
7. Search, discovery, public tutor pages, public course pages, and SEO.
8. AI learning features with a modular provider boundary.

## Security Baseline

- Validate every request body with DTO validation.
- Protect privileged API routes with Clerk authentication and server-side role guards.
- Use Helmet, CORS allowlists, rate limiting, and secure environment validation.
- Store all secrets in platform environment variables.
- Keep audit logs for moderation, admin changes, payouts, and support workflows.

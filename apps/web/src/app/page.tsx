import Link from "next/link";
import { Button } from "@tutoring-saas/ui";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Academic learning platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
            Tutoring SaaS
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A focused workspace for live group tutoring, courses, subscriptions, tutor operations,
            messaging, and admin moderation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dashboard">Open dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/tutors">Browse tutors</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

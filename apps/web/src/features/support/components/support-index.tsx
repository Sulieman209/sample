import { Button } from "@tutoring-saas/ui";

export function SupportIndex() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Support</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Track learner, tutor, billing, and moderation issues in one queue.
          </p>
        </div>
        <Button>New ticket</Button>
      </div>
      <div className="rounded-md border p-6 text-sm text-slate-600 dark:text-slate-300">
        Support ticket creation and admin queues arrive in the MVP support phase.
      </div>
    </section>
  );
}

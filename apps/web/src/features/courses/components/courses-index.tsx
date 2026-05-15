import { Button } from "@tutoring-saas/ui";

export function CoursesIndex() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Courses</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Build course paths with modules, lessons, files, and progress tracking.
          </p>
        </div>
        <Button>Create course</Button>
      </div>
      <div className="rounded-md border p-6 text-sm text-slate-600 dark:text-slate-300">
        Course management will connect to the courses API in Phase 3.
      </div>
    </section>
  );
}

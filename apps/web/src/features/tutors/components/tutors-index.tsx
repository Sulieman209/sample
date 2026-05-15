import { Button } from "@tutoring-saas/ui";

const profileChecklist = ["Subject", "Bio", "Certificates", "Availability", "Pricing"];

export function TutorsIndex() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Tutors</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Manage tutor profiles, approval, scheduling readiness, and visibility.
          </p>
        </div>
        <Button>Submit profile</Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {profileChecklist.map((item) => (
          <div className="rounded-md border p-4 text-sm" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

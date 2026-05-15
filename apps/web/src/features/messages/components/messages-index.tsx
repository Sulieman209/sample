export function MessagesIndex() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Messages</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Platform-only communication between tutors, students, and support teams.
        </p>
      </div>
      <div className="grid min-h-[420px] gap-4 rounded-md border p-4 lg:grid-cols-[280px_1fr]">
        <div className="rounded-md bg-slate-50 p-4 text-sm dark:bg-slate-900">No rooms yet.</div>
        <div className="flex items-center justify-center rounded-md border border-dashed text-sm text-slate-500">
          Select a conversation
        </div>
      </div>
    </section>
  );
}

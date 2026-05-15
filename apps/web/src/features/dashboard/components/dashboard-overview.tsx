const metrics = [
  { label: "Active students", value: "0" },
  { label: "Live classes", value: "0" },
  { label: "Published courses", value: "0" },
  { label: "Open tickets", value: "0" },
];

export function DashboardOverview() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Role-aware operations for students, tutors, and administrators.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div className="rounded-md border p-4" key={metric.label}>
            <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

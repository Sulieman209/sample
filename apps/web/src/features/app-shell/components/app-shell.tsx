import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { BookOpen, CalendarDays, GraduationCap, LifeBuoy, MessageSquare } from "lucide-react";
import { ThemeToggle } from "@/features/app-shell/components/theme-toggle";

const navigationItems = [
  { href: "/dashboard", icon: GraduationCap, label: "Dashboard" },
  { href: "/courses", icon: BookOpen, label: "Courses" },
  { href: "/tutors", icon: CalendarDays, label: "Tutors" },
  { href: "/messages", icon: MessageSquare, label: "Messages" },
  { href: "/support", icon: LifeBuoy, label: "Support" },
];

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/dashboard" className="text-sm font-semibold tracking-tight">
            Tutoring SaaS
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
          <nav className="grid gap-1">
            {navigationItems.map((item) => (
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                href={item.href}
                key={item.href}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}

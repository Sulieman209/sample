import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "@/app/globals.css";
import { AppProviders } from "@/providers/app-providers";

export const metadata: Metadata = {
  title: "Tutoring SaaS",
  description: "Live group tutoring, courses, tutor operations, and learning workflows.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen font-sans antialiased">
          <AppProviders>{children}</AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}

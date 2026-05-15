import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/dashboard(.*)",
  "/courses(.*)",
  "/messages(.*)",
  "/support(.*)",
  "/tutors(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  if (protectedRoutes(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

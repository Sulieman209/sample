import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { isClerkMiddlewareConfigured } from "@/config/auth";

const protectedRoutes = createRouteMatcher([
  "/dashboard(.*)",
  "/courses(.*)",
  "/messages(.*)",
  "/support(.*)",
  "/tutors(.*)",
]);

const middleware = isClerkMiddlewareConfigured()
  ? clerkMiddleware(async (auth, request) => {
      if (protectedRoutes(request)) {
        await auth.protect();
      }
    })
  : function publicMiddleware() {
      return NextResponse.next();
    };

export default middleware;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

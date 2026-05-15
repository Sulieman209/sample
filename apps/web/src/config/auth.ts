export function isClerkConfigured(): boolean {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return Boolean(
    publishableKey &&
      (publishableKey.startsWith("pk_test_") || publishableKey.startsWith("pk_live_")) &&
      publishableKey.length > 20,
  );
}

export function isClerkMiddlewareConfigured(): boolean {
  const secretKey = process.env.CLERK_SECRET_KEY;

  return Boolean(isClerkConfigured() && secretKey && secretKey.startsWith("sk_"));
}

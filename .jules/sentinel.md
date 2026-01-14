
## 2026-01-14 - Unprotected Routes
**Vulnerability:** Admin and Dashboard pages were accessible to unauthenticated users via direct URL navigation.
**Learning:** Next.js App Router folders/groups do not imply security. Client-side protection requires explicit AuthGuard components or Middleware.
**Prevention:** Implemented a reusable `AuthGuard` component and applied it to `(authenticated)` and `(admin)` layouts.

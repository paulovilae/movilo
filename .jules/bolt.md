## 2024-05-22 - [Firebase Initialization in Build]
**Learning:** Build fails with `Firebase: Need to provide options` when environment variables are missing during static generation, even if they are in `.env.local` because Next.js build might expect them to be available or the code structure initializes Firebase eagerly.
**Action:** Ensure strict checking of environment variables before initializing Firebase, or mock Firebase during build if possible. For now, creating a dummy `.env.local` works, but the error logs suggest it's falling back to config object which might be incomplete.

## 2024-05-22 - [Performance: Debounce Search]
**Learning:** `ProviderSearchSection` was updating filtering and map state on every keystroke, causing expensive re-calculations.
**Action:** Implemented `useDebounce` hook to delay filtering until user stops typing. This is a common pattern for search inputs.

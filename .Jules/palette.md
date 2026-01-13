## 2024-05-22 - Async Auth Feedback
**Learning:** Users often click "Sign in with Google" multiple times if there is no immediate feedback, as the popup can be slow to appear or the redirect slow to happen.
**Action:** Always implement a `isLoading` state for auth buttons that replaces the icon with a spinner and disables the button immediately upon click.

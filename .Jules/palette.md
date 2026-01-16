## 2024-05-22 - Async Loading States
**Learning:** Users lack feedback during third-party authentication flows (e.g., Google Sign-In), leading to confusion on whether the click was registered.
**Action:** Wrap async authentication calls (like `initiateGoogleSignIn`) in a try/catch block with local loading state, and display a spinner within the button while disabling it to prevent double-submission.

## 2024-05-22 - Async Auth Feedback
**Learning:** Users lack confidence when initiating third-party auth (like Google Sign-In) without immediate visual feedback. The delay between click and popup appearance mimics a broken interaction.
**Action:** Always wrap async auth calls in a loading state that disables the button and shows a spinner immediately upon click.

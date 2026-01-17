# Palette's Journal

## 2024-05-22 - Radix Slot and Loading States
**Learning:** When using Radix UI's `Slot` component (via `asChild` prop in Shadcn UI), we cannot easily inject helper elements like loading spinners because `Slot` expects a single React element child to merge props onto.
**Action:** For `asChild` buttons, rely on the `disabled` state for feedback, or wrap the content in the parent component if a spinner is strictly required. In the `Button` component, explicitly check for `!asChild` before rendering the spinner to avoid `React.Children.only` errors.

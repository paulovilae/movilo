## 2024-05-22 - Accessibility in Icon-Only Buttons
**Learning:** Icon-only buttons (like avatars or hamburgers) often rely on visual context but fail for screen readers. Defaulting to `sr-only` spans or `aria-label` is crucial. Also, decorative icons in summary cards clutter screen reader output if not hidden.
**Action:** Always check `Button` components that wrap icons/images. If the text isn't visible, add `aria-label`. For purely decorative icons next to text, use `aria-hidden="true"`.

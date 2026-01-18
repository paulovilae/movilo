## 2024-05-22 - Missing Authentication Guard on Dashboard
**Vulnerability:** The `/dashboard` and `/provider-dashboard` routes were accessible to unauthenticated users. The UI displayed "Usuario" default text but exposed the full application shell and potential client-side data.
**Learning:** Relying on client-side redirect in `page.tsx` or `useEffect` inside a component without a higher-level guard (Layout) is prone to gaps. The "Ingresar" button linking directly to dashboard without checking auth state exacerbated the confusion.
**Prevention:** Always implement an Authentication Guard in a shared `layout.tsx` for protected route groups (e.g., `(authenticated)`). Do not rely on page-level logic for basic access control.

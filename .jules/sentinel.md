## 2024-05-23 - [Security Headers]
**Vulnerability:** Missing HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
**Learning:** Default Next.js configuration does not include strict security headers, leaving the application vulnerable to clickjacking, MIME sniffing, and man-in-the-middle attacks.
**Prevention:** Explicitly configure `headers()` in `next.config.js` to enforce these protections at the application level.

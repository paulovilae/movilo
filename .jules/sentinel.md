## 2024-05-22 - Missing Security Headers
**Vulnerability:** The application was missing standard HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
**Learning:** Default Next.js configuration does not include these headers automatically. They must be explicitly configured in `next.config.js`.
**Prevention:** Always verify `next.config.js` for `headers()` configuration during project setup or security audits.

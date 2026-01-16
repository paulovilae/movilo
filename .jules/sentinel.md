# Sentinel's Journal

## 2024-05-22 - Missing Security Headers
**Vulnerability:** The application was missing standard HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.), making it vulnerable to clickjacking, MIME sniffing, and man-in-the-middle attacks.
**Learning:** Default Next.js configuration does not include these headers automatically; they must be explicitly configured in `next.config.js`.
**Prevention:** Always verify and configure `headers()` in `next.config.js` for every new Next.js project.

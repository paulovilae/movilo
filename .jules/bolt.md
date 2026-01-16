## 2026-01-16 - [Frontend Performance: Debouncing Search]
**Learning:** High-frequency updates on complex UI elements (like maps) triggered by text inputs can cause significant lag. The memory previously suggested `useDebounce` existed, but it was missing.
**Action:** Always verify the existence of utility hooks before assuming they are available. When implementing search filters that affect heavy components (Leaflet maps), always decouple the input state from the filtering state using a debounce pattern (300-500ms delay).

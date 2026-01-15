## 2024-05-22 - Map Re-rendering on Search
**Learning:** The `ProviderSearchSection` filters providers on every keystroke, causing the `Map` component (Leaflet) to re-render and update markers continuously. This is expensive.
**Action:** Always debounce search inputs that affect heavy components like Maps or large Lists.

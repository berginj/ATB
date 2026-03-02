# Content Manager Request Log

## 2026-03-02

- Request: Integrate `content-manager-kit` into the React + Vite app and add repo guidance for tracking future content-manager improvements.
- Files touched:
  - `src/features/content-manager-kit/`
  - `src/config/content-manager-templates.js`
  - `src/content/defaultManagedContent.js`
  - `src/components/ManagedContentHighlights.jsx`
  - `src/pages/ContentManager.jsx`
  - `src/App.jsx`
  - `src/pages/Home.jsx`
  - `src/components/Footer.jsx`
  - `src/styles/globals.css`
  - `AGENTS.md`
- Follow-up needed:
  - Decide whether browser-local storage is sufficient or whether ATB wants a shared backend workflow for multi-user admin editing.
  - If shared editing is required, wire the submodule server contract into an Azure Functions endpoint.

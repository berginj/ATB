# ATB Working Notes

## Content Manager Rules

- The shared implementation lives in the git submodule at `content-manager-kit/`.
- In this repo, React integrations belong in `src/features/content-manager-kit/`.
- Site-specific templates belong in `src/config/content-manager-templates.js`.
- Seed content belongs in `src/content/defaultManagedContent.js`.
- Do not patch shared submodule code in `content-manager-kit/` for site-specific behavior unless the request explicitly calls for a shared-kit change.
- When a request asks for content manager improvements or modifications, update `docs/content-manager-request-log.md` with:
  - date
  - request summary
  - files touched
  - follow-up needed
- Log the request before or during the implementation so the history stays current.
- If a future change needs shared-kit behavior that the local React wrapper cannot provide cleanly, document the limitation in the request log and then decide whether the change belongs in the submodule repo instead.

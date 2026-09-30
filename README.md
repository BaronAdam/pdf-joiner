# PDF Joiner

Join PDFs page for page, entirely in the browser (Next.js, React, Tailwind).
Merging uses `pdf-lib` `copyPages`, so page sizes, orientation and content are untouched.
Thumbnails come from `pdfjs-dist`; reordering uses `@dnd-kit`.

```bash
npm install
npm run dev
```

## Deploy (Azure Static Web Apps, Free tier)

The app is a static export (`output: "export"` → `out/`). Pushing to `main` runs
`.github/workflows/azure-static-web-apps.yml`, which builds and uploads `out/`.
It needs one repository secret, `AZURE_STATIC_WEB_APPS_API_TOKEN` (the SWA deployment token).
Response headers and MIME types are configured in `public/staticwebapp.config.json`.

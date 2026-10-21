# Project rules

- Keep portfolio projects in typed editable data, with source-backed facts and asset pointers, so every presentation uses the same information.
- Serve individual project overviews through query parameters on the root route so direct links and refreshes work on GitHub Pages without server rewrite rules.
- Keep homepage interactions and theme preferences client-side; themes are preferences, not account data.
- Open LinkedIn links directly in a separate browser tab from the click handler while retaining their original href, because LinkedIn refuses embedded preview navigation.
- Use absolute Lovable asset URLs for uploaded artwork so media works outside Lovable hosting.
- Open research PDFs from the verified public custom-domain origin so new tabs bypass the preview-only address and access gate.
- Generate the GitHub Pages docs copy from the Vite output after production builds so the preview and deployable website cannot diverge; preserve user-maintained README and domain files.

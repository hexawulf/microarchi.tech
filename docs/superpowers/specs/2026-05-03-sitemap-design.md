# Design Spec: Sitemap Creation for microarchi.tech

## Goal
Add a `sitemap.xml` to the root of the project to facilitate Google Search indexing and improve SEO.

## Scope
- Create `sitemap.xml` in the project root.
- Include the main landing page `https://microarchi.tech/`.
- Register the sitemap in `robots.txt` (if applicable).

## Technical Details
- **Format**: XML (Sitemaps.org protocol)
- **Primary URL**: `https://microarchi.tech/`
- **Last Modified**: 2026-05-03
- **Change Frequency**: `monthly`
- **Priority**: `1.0`

## Implementation Steps
1. Create `sitemap.xml`.
2. Verify file content.
3. Commit to Git.
4. Push to GitHub.

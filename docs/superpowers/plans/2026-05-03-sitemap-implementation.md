# Sitemap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `sitemap.xml` to the root of the project and push it to GitHub to facilitate Google Search indexing.

**Architecture:** A single XML file following the Sitemaps.org protocol, placed in the root directory.

**Tech Stack:** XML, Git.

---

### Task 1: Create sitemap.xml

**Files:**
- Create: `sitemap.xml`

- [ ] **Step 1: Write the sitemap.xml file**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://microarchi.tech/</loc>
        <lastmod>2026-05-03</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

- [ ] **Step 2: Verify file content**

Run: `cat sitemap.xml`
Expected: Content matches the XML above.

### Task 2: Git Integration and Deployment

**Files:**
- Modify: `.git` (via git commands)

- [ ] **Step 1: Add sitemap.xml to git**

Run: `git add sitemap.xml`

- [ ] **Step 2: Create a commit**

Run: `git commit -m "feat: add sitemap.xml for SEO indexing"`

- [ ] **Step 3: Push to GitHub**

Run: `git push origin main`

- [ ] **Step 4: Verify remote status**

Run: `git status`
Expected: "Your branch is up to date with 'origin/main'."

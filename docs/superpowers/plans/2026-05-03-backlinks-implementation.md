# SEO Backlinks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add LinkedIn and GitHub backlinks to improve SEO and transparency.

**Architecture:** Inline HTML/SVG updates to existing sections.

**Tech Stack:** HTML, CSS.

---

### Task 1: Add LinkedIn Backlink

**Files:**
- Modify: `index.html:373`

- [ ] **Step 1: Wrap ERLING in a link**

```html
<span class="value">張愷恩 / <a href="https://www.linkedin.com/in/hexawulf" target="_blank" rel="noopener noreferrer" class="social-link">ERLING</a></span>
```

- [ ] **Step 2: Commit changes**

### Task 2: Add GitHub Backlink to Footer

**Files:**
- Modify: `index.html:406`
- Modify: `style.css` (Add styles for social-link)

- [ ] **Step 1: Add GitHub SVG and link to footer**

```html
<div class="footer-right">
    Built for Computex · Taipei · 
    <a href="https://github.com/hexawulf/microarchi.tech" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub Repository">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </a>
</div>
```

- [ ] **Step 2: Add CSS for social links**

```css
.social-link, .footer-social-link {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s ease;
}

.social-link:hover, .footer-social-link:hover {
    opacity: 0.7;
    text-decoration: underline;
}

.footer-social-link {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 4px;
}
```

- [ ] **Step 3: Commit and Push**

Run: `git add index.html style.css && git commit -m "feat: add social backlinks for SEO" && git push origin main`

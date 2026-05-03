# LinkedIn Icon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a trailing LinkedIn icon next to the ERLING link.

**Architecture:** Inline SVG within the existing `<a>` tag.

**Tech Stack:** HTML, CSS.

---

### Task 1: Update index.html

**Files:**
- Modify: `index.html:373`

- [ ] **Step 1: Add SVG to the link**

```html
<a href="https://www.linkedin.com/in/hexawulf" target="_blank" rel="noopener noreferrer" class="social-link">
    ERLING
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
```

### Task 2: Update style.css

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add alignment styles**

```css
.social-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.icon-linkedin, .icon-github {
    flex-shrink: 0;
}
```

### Task 3: Deploy

- [ ] **Step 1: Commit and Push**

Run: `git add index.html style.css docs/ && git commit -m "feat: add LinkedIn icon to Registry section" && git push origin main`

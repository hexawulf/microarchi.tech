# Design Spec: SEO Backlinks and Social Integration

## Goal
Improve the site's E-E-A-T signals for Google Search by linking professional and technical profiles.

## Scope
1. Link "ERLING" in the Registry section to the user's LinkedIn profile.
2. Add a GitHub link with an icon in the footer.

## Technical Details
- **LinkedIn Link**: `https://www.linkedin.com/in/hexawulf`
- **GitHub Link**: `https://github.com/hexawulf/microarchi.tech`
- **Icons**: Use inline SVGs for performance and consistent styling with the existing site design.
- **Styling**: Ensure links inherit site typography (Geist Mono/Noto Sans TC) and follow the minimalist aesthetic.

## Implementation Steps
1. Update `index.html` Registry section for LinkedIn.
2. Update `index.html` Footer section for GitHub.
3. Add subtle hover states in `style.css` if needed.
4. Verify layout and responsiveness.

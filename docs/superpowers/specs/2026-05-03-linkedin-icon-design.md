# Design Spec: LinkedIn Icon Integration

## Goal
Add a visual cue (LinkedIn icon) to the professional link in the Registry section to improve discoverability and professional signaling.

## Scope
1. Add a trailing LinkedIn SVG icon next to "ERLING" in the Registry section.
2. Ensure consistent styling with the GitHub icon in the footer.

## Technical Details
- **Icon**: Inline SVG LinkedIn "In" logo.
- **Placement**: Trailing (after the text "ERLING").
- **Size**: 14px to match text height.
- **Styling**: Use `inline-flex` for alignment; inherit color and hover states.

## Implementation Steps
1. Update `index.html` to include the SVG inside the LinkedIn `<a>` tag.
2. Update `style.css` to handle alignment and spacing.

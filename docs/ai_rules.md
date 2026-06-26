# docs/ai_rules.md

# AI RULES

## Repository Access Rules

1. Read access is permitted only for:

   * archive/stitch_ui_reference/
   * data/
   * docs/
   * src/

2. Never write into:

   * archive/
   * archive/stitch_ui_reference/

3. Never read or write:

   * extra/

4. archive/ exists only for visual inspiration and layout reference.

5. stitch_ui_reference/ represents the target visual quality, design language, spacing philosophy, typography hierarchy and page structure.

6. The implementation must be recreated dynamically and not copied directly from stitch_ui_reference.

---

## Development Rules

1. Every architectural decision requires explicit approval.

2. If approval is not explicitly given, assume the answer is NO.

3. Never introduce:

   * new dependencies
   * new frameworks
   * state management solutions
   * folder restructuring
   * architectural changes

without approval.

4. Work on only ONE page at a time.

5. Never work on multiple pages simultaneously.

6. Never modify pages that are not currently being worked on.

7. Maximum files modified per iteration:

   * 3 files unless explicitly approved.

8. Optimize for Tokens savings rather than heavy research approach since we have a limited amount of tokens. Avoid unncessary tokens expense.

---

## Responsive Rules

1. Only two display modes exist:

   * Desktop Mode
   * Mobile Mode

2. Tablet-specific layouts do not exist.

3. Desktop mode must scale naturally from:

   * Full HD
   * 2K
   * 4K
   * Ultrawide

4. Mobile mode must scale naturally across phones.

5. Responsive behavior should rely on fluid layouts rather than hardcoded resolutions.

---

## Theme Rules

1. Theme consistency must be preserved across all pages.

2. Dark mode and Light mode must both exist.

3. Theme switching must occur through a single toggle.

4. Exact color definitions will be provided later.

5. Fonts, spacing and design tokens must remain globally consistent.

6. Extract the same Theme styles, fonts, colours, background and everything else and make those the standards.

7. Thr Grid background on the home page is the main background, this is what should be set up for all the pages

---

## Project Philosophy

1. This is a lightweight GitHub hosted portfolio.

2. This is not a SaaS application.

3. This is not an enterprise dashboard.

4. Simplicity, maintainability and longevity are preferred over complexity.

5. The website should remain maintainable for 10+ years with minimal effort.

6. Updating profile.json should automatically update website content wherever possible.

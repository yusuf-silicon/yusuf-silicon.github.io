# Stage I — Hobbies Page

## Data Source
`profile.json → hobbies` — object with category keys (e.g., "3D Models", "2D Arts").
Each category: `{ description: string, Gallery: [{ name: path, description: string }] }`

## Design (matching stitch reference)
- **Page annotation**: `PAGE. 07 [DOCUMENT_CLASS: HOBBY_ARCHIVE]`
- **Title**: pulled from `profile.interests.overview` (personal interests)
- **Tab bar**: one tab per hobby category (dynamic — add a new category in JSON = new tab)
- **Card grid**: `auto-fill, minmax(280px, 1fr)` — responsive
- **Cards**: square aspect-ratio image, category badge, item title, description tooltip on hover
- **Background**: `blueprint-grid-lines` (consistent with all other pages)

## Files to Create/Modify
- `src/pages/hobbies.js` — new page module
- `src/styles/components.css` — append hobby page styles + mobile overrides
- `src/main.js` — import + mount registration

## Key Behaviors
- Clicking a tab filters the gallery to that category
- Images use `progressive-image` blur-up loading
- If a category has no gallery items, tab is hidden

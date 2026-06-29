# Stage H — Projects Page

## Data Source
`profile.json → projects` (vlsi[], iot[], software[])

## Sections

1. **Page Annotation** — `PAGE.06 [PROJECT_INDEX]` (consistent with other pages)
2. **Filter Bar** — category-based filter chips (ALL, VLSI, IoT) to filter visible projects
3. **Project Cards Grid** — 2-column grid on desktop, 1-column on mobile
4. **Sidebar** — aggregated tech stack + project count metrics

## Project Card Structure
Each card shows:
- ID badge (top-right corner, e.g., `ID: ${id}`)
- Category label
- Title (linked to github if available)
- Overview text
- Thumbnail image (clickable to open gallery)
- Highlights list
- Tech stack chips
- GitHub link button

## Key Behaviors
- Filter buttons toggle visibility by category (vlsi/iot/all)
- Click thumbnail opens a full-screen gallery lightbox
- GitHub button links to project repo

## Files to Create/Modify
- `src/pages/projects.js` — new page module
- `src/styles/components.css` — add project page styles (append to end)
- `src/main.js` — register the `projects` route (import + registerRoute)

## CSS Architecture
- `.proj-page`, `.proj-page-inner` — page wrappers
- `.proj-filter-bar` — filter button row
- `.proj-card` — project card
- `.proj-card-thumb` — thumbnail with overlay
- `.proj-card-highlights` — highlight list
- `.proj-tech-chips` — tech stack tag row
- `.proj-sidebar` — right sidebar (tech aggregate)
- `.proj-gallery-overlay` — lightbox overlay

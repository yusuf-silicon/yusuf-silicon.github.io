# docs/roo_additions.md

# ROO ADDITIONS — Clarifications & Decisions

This document captures clarifications and decisions made during development that supplement the core documentation.

---

## 1. Technology Stack

**Decision:** No restriction was imposed on the tech stack. The architect is free to recommend the optimal stack that balances dynamic functionality, ease of maintenance, and longevity.

*Referenced from: Architect's recommendation, user-approved.*

---

## 2. `src/` Directory

**Decision:** The `src/` directory may be created as needed. It serves as the structured location for all source code — components, styles, scripts, templates — keeping the project root clean and logically organized.

*Rationale: Separates source code from data, configuration, documentation, and archive content.*

*Referenced from: User clarification on 2026-06-26.*

---

## 3. Color Definitions

**Decision:** The color palette defined in `archive/stitch_ui_reference/CSS Design/DESIGN.md` is the accepted standard. It should be adopted and relied upon entirely for both light and dark modes.

*Referenced from: User confirmation on 2026-06-26.*

---

## 4. Grid Background

**Decision:** The grid background is a CSS background pattern — specifically a repeating 40x40px grid of 1px lines created using `linear-gradient`. This is the `blueprint-grid` class pattern seen in `archive/stitch_ui_reference/Page 1. Home/code.html` (lines 109–112). This pattern should be applied as the main background across all pages.

*Implementation detail:*
```css
.blueprint-grid {
    background-image:
        linear-gradient(to right, #e5eeff 1px, transparent 1px),
        linear-gradient(to bottom, #e5eeff 1px, transparent 1px);
    background-size: 40px 40px;
}
```

*Referenced from: User clarification on 2026-06-26.*

---

## 5. Dark Mode Colors

**Decision:** Dark mode will use a Navy palette (`#0F172A` background) as the starting point. The implementation must keep colors easy and dynamic to modify in the future — ideally via CSS custom properties (variables).

*Referenced from: User preference on 2026-06-26.*

---

## 6. Page Development Order

**Decision:** Pages will be developed in the following sequential order:

1. Home
2. Research
3. Publications
4. Academics
5. Experience
6. Projects
7. Hobbies
8. Contact

This is also the navigation order for the header's page selection buttons.

*Referenced from: User specification on 2026-06-26.*

---

## 7. Responsive Scaling (Desktop)

**Decision:** The layout must scale dynamically across Full HD (1080p), 2K (1440p), 4K (2160p), and Ultrawide resolutions without redefining the structure manually. This is achieved through fluid layouts (relative units, max-width containers, clamp()/viewport-relative sizing) rather than hardcoded pixel values.

Only two display modes exist:
- **Desktop Mode** (≥768px) — fluid scaling across all resolutions
- **Mobile Mode** (<768px) — restructured single-column layout

*Referenced from: docs/ai_rules.md (Responsive Rules) and user emphasis on 2026-06-26.*

---

## 8. Profile JSON as Source of Truth

**Decision:** `data/profile_data/profile.json` is the single source of truth. All page content should be consumed from this JSON file. Updating the JSON should automatically update the corresponding website content wherever possible.

*Referenced from: docs/project_context.md (Data Source section).*

---

## 9. Cross-Page Standards & Measurements

**Decision:** The following must be consistent across ALL pages:
- **Header** — identical nav bar with active page indicator
- **Grid background** — consistent pattern across pages (exact style per page type)
- **Fonts and theme** — tri-font system, CSS variable driven
- **Footer** — identical across all pages

**Measurement Philosophy:** Use `rem`, `%`, `clamp()`, `vw`/`vh` relative units throughout. Avoid hardcoded `px` values for fonts, card dimensions, spacing, and layout sizing. This ensures natural scaling across all resolutions (HD, 2K, 4K, Ultrawide).

*Referenced from: User specification on 2026-06-26.*

---

## 10. Page Header Annotations

**Decision:** Page annotations (underlined monospaced labels at the top of each page) follow this scheme:

| Page | Annotation |
|------|-----------|
| Home | *(no annotation needed)* |
| Research | `PAGE. 02_______________________________[DOCUMENT_CLASS: RESEARCH_MANIFESTO]` |
| Publications | `PAGE. 04_______________________________[DOCUMENT_CLASS: PUBLICATION_ARCHIVE]` |
| Academics | *(uses UID/PROG header instead)* |
| Experience | `PAGE. 05_______________________________[DOCUMENT_CLASS: EXPERIENCE_LOG]` |
| Projects | `PAGE. 03_______________________________[DOCUMENT_CLASS: PROJECT_CATALOG]` |
| Hobbies | `PAGE. 06_______________________________[DOCUMENT_CLASS: ACHIEVEMENT_RECORD]` |
| Contact | `PAGE. 07_______________________________[DOCUMENT_CLASS: CONTACT_DIRECTORY]` |

*Referenced from: User specification on 2026-06-26.*

---

## 11. Home Page Customizations

**Decision — Overrides to Stitch Reference:**
1. **System Block Diagram** — remove or replace with meaningful content (e.g., a dynamic tech stack visualization or research interests visual)
2. **End line text** — replace with: `SID: IN-240626 | REF: 226028 | ACTIVE`
3. **Bottom left / Footer text** — replace with: `© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH`

*Referenced from: User specification on 2026-06-26.*

---

## 12. Research Page Customizations

**Decision — Overrides to Stitch Reference:**
1. Replace `FIG. 01` top-left annotation with: `PAGE. 02_______________________________[DOCUMENT_CLASS: RESEARCH_MANIFESTO]`
2. **Remove** the "Future Directions Roadmap" section entirely

*Referenced from: User specification on 2026-06-26.*

---

## 13. Academics Page Customizations

**Decision — Overrides to Stitch Reference:**
1. Replace "Teaching Assistant" section with a **"Research & Thesis"** section (displaying `research.theses` data)
2. Replace UID and DEPT tags with: `UID: 2026-BT-2002` and `PROG: ELECTRONICS & COMMUNICATION ENGINEERING`

*Referenced from: User specification on 2026-06-26.*

---

## 14. Experience Page Customizations

**Decision — Overrides to Stitch Reference:**
1. **Timeline categories:** Industry, Industrial Intern, Assistantships, Conference Presentations, Community Outreach, Teaching
2. **Metrics block — replace with:**
   - FULL-TIME ROLES — 02
   - INTERNSHIPS — 03
   - RESEARCH ASSISTANTSHIPS — 01
   - INDUSTRY EXPERIENCE — 4.5Y
3. **Image:** Replace with a dynamic time-based image rotator using collected industry photos
4. **Quote/annotation:** Remove or replace with the image description

*Referenced from: User specification on 2026-06-26.*

---

## 15. Projects Page Customizations

**Decision — Overrides to Stitch Reference:**
1. **Dev Toolchain sidebar** — make dynamic, dependent on the currently selected/filtered project. E.g., selecting "Async FIFO" shows: SystemVerilog, Questa, UVM, Git
2. **System Status callout** — replace with `PROJECT_STATUS` block showing:
   - Repository: Active
   - Documentation: Complete
   - Verification: Complete
   - Latest Commit: [dynamic date from GitHub or JSON]
3. **Build Status** — add `BUILD_STATUS` section:
   - Documentation ✓
   - Simulation ✓
   - Synthesis ✓
   - Repository ✓
   *(All driven automatically from JSON + GitHub data)*
4. **Sidebar diagrams** — show ALL project diagrams in a column structure on the sidebar instead of just one
5. **Language lines of code** — show all languages and their LOC counts dynamically
6. **Bottom metrics** — add project-level metrics below the main content

*Referenced from: User specification on 2026-06-26.*

---

## 16. Hobby Page Customizations

**Decision:** The hobby page layout from the Stitch reference will be significantly reworked. Specific details to be determined during implementation. The creative accent colors (cyan, magenta, lime) may be retained or adjusted.

*Referenced from: User specification on 2026-06-26.*

---

## 17. Contact Page Customizations

**Decision — Overrides to Stitch Reference:**
1. **Remove** the encryption header box (the dashed-border block with the hex string)

*Referenced from: User specification on 2026-06-26.*
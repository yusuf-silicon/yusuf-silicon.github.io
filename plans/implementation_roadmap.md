# Implementation Roadmap — Yusuf Silicon Portfolio

## Build Tool
**Vite + Vanilla JavaScript** with CSS Custom Properties

## Measurement Philosophy
Use `rem`, `%`, `clamp()`, `vw`/`vh` relative units throughout. Avoid hardcoded `px` for fonts, card dimensions, spacing, and layout. Ensures natural scaling across HD (1080p), 2K (1440p), 4K (2160p), and Ultrawide.

---

## Common Patterns Observed Across All 8 Stitch Pages

### Persistent Shell
- **Header:** Logo (left), Navigation (center), Theme toggle (right). Active page: `border-b-2 border-primary` + `text-primary`.
- **Footer:** Copyright, links (CV Download, Contact, Source Code).
- **Layout container:** `px-margin-desktop` (64px → `clamp()` based), `max-w-7xl mx-auto`, 12-column grid.

### Grid Background Variations
| Page | Pattern | Details |
|------|---------|---------|
| Home | Blueprint lines (linear-gradient) | 40x40px |
| Research | Dot grid (radial-gradient) | 32x32px |
| Publications | Dot grid | 32x32px |
| Academics | Dot grid | 32x32px |
| Experience | Dot grid (low opacity) | 32x32px |
| Projects | Dot grid | 40x40px |
| Hobbies | Dot grid | 24x24px |
| Contact | Dot grid | 40x40px |

### Design Language
- **Tri-font:** IBM Plex Sans (headlines), Inter (body), JetBrains Mono (mono/labels)
- **Shapes:** Sharp 0px corners, hard shadows (`box-shadow: 4px 4px 0px #0b1c30`)
- **Section headers:** Mono-labeled annotations with border-left accent
- **Chips/tags:** Border + text for skills, categories, technologies

---

## Stage A: Project Scaffolding & Design System Foundation

**Files to create (≤3 per iteration):**
| Iteration | Files | Purpose |
|-----------|-------|---------|
| A.1 | `package.json`, `vite.config.js`, `index.html` | Vite init, font loading, entry point |
| A.2 | `src/styles/tokens.css`, `src/styles/base.css` | CSS custom properties (colors, typography, spacing), reset, grid patterns, utility classes |

**Design tokens (all as CSS variables):**
- Complete color palette (light + dark mode) from stitch reference
- Font families, sizes, weights, line heights
- Spacing scale (base: 8px, gutter: 24px, column-gap: 32px, margin-desktop: 64px, margin-mobile: 16px)
- Grid background classes (`.blueprint-grid-lines`, `.blueprint-grid-dots`)
- Hard shadow, selection colors, utility classes
- **All font sizes in `rem` units** for dynamic scaling

---

## Stage B: Global Layout Shell

**Files to create (≤3 per iteration):**
| Iteration | Files | Purpose |
|-----------|-------|---------|
| B.1 | `src/lib/dataLoader.js`, `src/main.js` | JSON fetch/cache, app init, SPA routing |
| B.2 | `src/components/header.js`, `src/styles/components.css` | Nav bar (JSON-driven links, active state, mobile hamburger) |
| B.3 | `src/components/footer.js`, `src/components/themeToggle.js` | Footer, dark/light toggle with localStorage |

**Header nav order:** Home → Research → Publications → Academics → Experience → Projects → Hobbies → Contact

---

## Stage C: Home Page

**Reference:** `archive/stitch_ui_reference/Page 1. Home/code.html`
**Annotations:** *(none — no page annotation)*
**Footer text:** `© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| [ID_CARD // USER_PROFILE] | `personal` (name, headline, description, tags) + profile image | Flex row: text + image |
| [01 // ANALYTICS_MODULE] | Dynamic counts (publications, projects, theses, certifications) | 2×2 metric cards in sidebar |
| [02 // COMMUNICATION_BUS] | `contact` object | Sidebar contact list + Resume button |
| [03 // PEER_REVIEWED_ARCHIVE] | `research.publications` (first 2) | Featured publication cards |
| [04 // HARDWARE_HARD_REPO] | `projects.vlsi` (first 2 featured) | 2-column project cards with thumbnails |

**Custom overrides:**
- ❌ Remove "System Block Diagram" section — replace with meaningful content (e.g., research interests visual or tech radar)
- ✅ Replace end-line text with: `SID: IN-240626 | REF: 226028 | ACTIVE`
- ✅ Footer text: `© 2026 // CORE: COMPUTER_ARCHITECTURE_&_RESEARCH`

**Files:** `src/pages/home.js`, update `index.html`

---

## Stage D: Research Page

**Reference:** `archive/stitch_ui_reference/Page 2. Research/code.html`
**Annotation:** `PAGE. 02_______________________________[DOCUMENT_CLASS: RESEARCH_MANIFESTO]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| [RESEARCH_AREAS] | `interests.overview` (name, description, includes[]) | Left sidebar list with icons |
| [SYSTEM_METRICS] | Dynamic counts (interests, theses, publications) | Left sidebar metrics table |
| [CURRENT_INVESTIGATIONS] | Research interest investigation cards | 2-column card grid (8 cols) |
| [EVOLUTION_TIMELINE] | `research.theses` (timeline entries) | Timeline with nodes + dates |

**Custom overrides:**
- ✅ Replace `FIG. 01` annotation with `PAGE. 02_______________________________[DOCUMENT_CLASS: RESEARCH_MANIFESTO]`
- ❌ **Remove** Future Directions Roadmap section entirely

**Files:** `src/pages/research.js`, `pages/research.html`

---

## Stage E: Publications Page

**Reference:** `archive/stitch_ui_reference/Page 3. Publication/code.html`
**Annotation:** `PAGE. 04_______________________________[DOCUMENT_CLASS: PUBLICATION_ARCHIVE]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| Page Header | Title + search filter | Search input |
| [SELECTED_WORKS] | `research.publications` (first 2 featured) | Left sidebar sticky cards |
| [METRICS_LOG] | Publication count, citations | Left sidebar |
| [FULL_BIBLIOGRAPHY] | `research.publications` grouped by year | Right column, expandable abstracts |

**Features:** Search/filter by text, year-grouped sections, expandable abstracts, [PDF] [DOI] buttons

**Files:** `src/pages/publications.js`, `pages/publications.html`

---

## Stage F: Academics Page

**Reference:** `archive/stitch_ui_reference/Page 4. Academics/code.html`
**Header tags:** `UID: 2026-BT-2002` | `PROG: ELECTRONICS & COMMUNICATION ENGINEERING`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| [01 // EDUCATION] | `education` array (sorted by year desc) | Timeline entry cards (GPA, advisor, dates) |
| [02 // RESEARCH & THESIS] | `research.theses` | Card grid — replaces Teaching Assistant |
| [AWARDS // HONORS] | `achievements` filtered by category | Right sidebar timeline with dot markers |
| [CERTIFICATIONS] | `certifications` | Right sidebar list |

**Custom overrides:**
- ✅ Replace "Teaching Assistant" with **"Research & Thesis"** section using `research.theses`
- ✅ Replace UID/DEPT with: `UID: 2026-BT-2002` and `PROG: ELECTRONICS & COMMUNICATION ENGINEERING`

**Files:** `src/pages/academics.js`, `pages/academics.html`

---

## Stage G: Experience Page

**Reference:** `archive/stitch_ui_reference/Page 5. Experience/code.html`
**Annotation:** `PAGE. 05_______________________________[DOCUMENT_CLASS: EXPERIENCE_LOG]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| Timeline entries | `experience.internship`, `communityOutreach` | Vertical timeline with numbered items |
| [LOG_NAVIGATOR] | Section jump links | Right sidebar card |
| [TECH_STACK] | Skills from experience data | Right sidebar chip cloud |
| [METRIC_SUMMARY] | Dynamic counts | 4-column metric grid |

**Custom overrides — Metrics:**
| Metric | Value |
|--------|-------|
| FULL-TIME ROLES | 02 |
| INTERNSHIPS | 03 |
| RESEARCH ASSISTANTSHIPS | 01 |
| INDUSTRY EXPERIENCE | 4.5Y |

- ✅ Image: dynamic time-based rotator with industry photos
- ❌ Remove quote or replace with image description

**Files:** `src/pages/experience.js`, `pages/experience.html`

---

## Stage H: Projects Page

**Reference:** `archive/stitch_ui_reference/Page 6. Projects/code.html`
**Annotation:** `PAGE. 03_______________________________[DOCUMENT_CLASS: PROJECT_CATALOG]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| Filter buttons | Categories (VLSI, IoT, Software) | Button group |
| Project cards | `projects.vlsi`, `.iot`, `.software` | Cards with ID, title, tech specs, thumbnail, GitHub link |
| [DEV_TOOLCHAIN] | **Dynamic** — dependent on selected project | Right sidebar chips |
| [PROJECT_STATUS] | From JSON + GitHub data | Right sidebar status block |
| [BUILD_STATUS] | Documentation, Simulation, Synthesis, Repository checkmarks | Right sidebar |
| Sidebar diagrams | ALL project diagrams in column structure | Right sidebar |
| LOC metrics | Language → Lines of Code (dynamic) | Bottom metrics section |

**Custom overrides:**
- ✅ Dev Toolchain: **dynamic** — changes based on selected/filtered project (e.g., Async FIFO → SystemVerilog, Questa, UVM, Git)
- ✅ Replace System Status with `PROJECT_STATUS`: Repository Active, Documentation Complete, Verification Complete, Latest Commit: [dynamic]
- ✅ Add `BUILD_STATUS`: Documentation ✓, Simulation ✓, Synthesis ✓, Repository ✓
- ✅ Show ALL project diagrams on sidebar in column structure (instead of one)
- ✅ Show all language LOC counts dynamically
- ✅ Add project-level metrics below main content

**Files:** `src/pages/projects.js`, `src/components/projectCard.js`, `pages/projects.html`

---

## Stage I: Hobbies Page

**Reference:** `archive/stitch_ui_reference/Page 7. Hobby/code.html`
**Annotation:** `PAGE. 06_______________________________[DOCUMENT_CLASS: ACHIEVEMENT_RECORD]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| [01 // Digital Fabrication] | `hobbies[0].Gallery` (3D Models) | Hero image + spec sheet |
| [02 // 2D Illustration] | `hobbies[1].Gallery` (2D Arts) | Image grid with status badges |

**Custom overrides:**
- ⚠️ Page "needs much work" — specific details to be determined during implementation. Accent colors may be retained/adjusted.

**Files:** `src/pages/hobbies.js`, `pages/hobbies.html`

---

## Stage J: Contact Page

**Reference:** `archive/stitch_ui_reference/Page 8. Contact/code.html`
**Annotation:** `PAGE. 07_______________________________[DOCUMENT_CLASS: CONTACT_DIRECTORY]`

**Sections:**
| Section | Content Source | Layout |
|---------|---------------|--------|
| [COMMUNICATION_PORTS] | `contact.email`, `personal.location`, `personal.citizenship` | Left sidebar cards |
| [NETWORK_NODES] | `contact.github`, `.linkedin`, `.google_scholar` | Left sidebar link list |
| [DATA_TRANSMISSION_PROTOCOL] | Contact form | Right column form |

**Custom overrides:**
- ❌ **Remove** the encryption header box (dashed-border hex string block)

**Files:** `src/pages/contact.js`, `pages/contact.html`

---

## Stage K: Polish & Review

**Checks:**
- [ ] Header nav active state correct on all 8 pages
- [ ] Theme toggle works consistently across all pages (dark ↔ light)
- [ ] Dark mode: all color variables mapped correctly
- [ ] Desktop fluid scaling: 1920×1080, 2560×1440, 3840×2160
- [ ] Mobile (<768px): single-column layout on 375×667, 414×896
- [ ] All images load from relative paths correctly
- [ ] Grid background consistent per page
- [ ] Typography matches design tokens site-wide
- [ ] No broken links or missing data in JSON consumption
- [ ] All `rem`/relative measurements scale correctly
- [ ] SPA routing works cleanly
- [ ] Performance: bundle size, image loading

---

## Execution Rules

1. **One full stage** per Stage 3 cycle (A-K above)
2. **One page** per Stage 4 cycle (C-J above)
3. **Max 3 files modified per iteration**
4. **Each iteration requires approval** before proceeding
5. **Never work on multiple pages simultaneously**
6. **Review + approval required before commit**


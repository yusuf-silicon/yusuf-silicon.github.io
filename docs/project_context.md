# docs/project_context.md

# PROJECT CONTEXT

Project Name:
Yusuf Silicon Portfolio

Current Status:
Undergraduate Portfolio

Long Term Goal:
The website should continue evolving through:

* Undergraduate Studies
* Masters Degree
* PhD
* Industry Experience

To Design 8 pages in total:

1. Home
2. Research
3. Publications
4. Academics
5. Experience
6. Projects
7. Hobbies
8. Contacts

without requiring redesign.

---

## Design Identity

Theme:

* Retro
* Academic
* Professional
* Technical
* Research Focused

The website should feel like:

* Research Archive
* Technical Dossier
* Engineering Documentation
* Academic Portfolio

---

## Dynamic Features

Examples include:

* Automated project counts
* GitHub repository activity
* Recent commits
* RTL line counts
* Dynamic project galleries
* Publication statistics
* Research metrics

Where possible these values should be generated automatically.

---

## Data Source

Primary Source Of Truth:

data/profile_data/profile.json

The profile json controls:

* research
* publications
* education
* experience
* achievements
* certifications
* projects
* Hobby
* contact information

Components should consume data from profile.json rather than hardcoded values.

---

## Stitch Reference

archive/stitch_ui_reference/

represents:

* typography
* spacing
* visual hierarchy
* layouts
* transitions
* design philosophy
* component structure

The objective is to recreate its behavior dynamically.

The objective is NOT to reuse its static implementation.

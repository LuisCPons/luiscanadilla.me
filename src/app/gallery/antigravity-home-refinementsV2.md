# Home Page Refinements — Three Changes

I need you to make exactly three changes to my Home page. Nothing else should be modified — the hero headline, description, availability line, CTA button, navbar, and footer all stay exactly as they are.

---

## 1. Add an Impact Numbers Strip below the CTA button

Add a horizontal row of 4 key metrics between the "Let's connect on LinkedIn →" button and the project cards. This strip should feel like a dashboard KPI bar — clean, static, trustworthy.

Layout:
- 4 metrics in a single horizontal row, evenly spaced.
- Each metric has two parts: a **large bold number** on top and a **small descriptive label** below it.
- Centered on the page, same max-width as the project cards below.
- On mobile, stack into a 2×2 grid if needed.

Style:
- Numbers: large font (bigger than the description text), bold weight. Use the same accent blue used in the "Read case study →" links and the LinkedIn button.
- Labels: small font, regular weight, muted grey (same color as the project descriptions).
- No borders, no cards, no background boxes around each metric. Just the numbers and labels floating cleanly.
- No animations, no counters, no JavaScript. Pure static HTML/CSS.

The 4 metrics (use these exactly):

| Number | Label |
|--------|-------|
| 834 | visa document sets automated in one intake |
| ~90% | reduction in weekly reconciliation time |
| 6 | team members using production agents daily |
| ~60% | faster document generation per visa set |

---

## 2. Show only 2 project cards on the Home page (not all 4)

Currently the Home page shows all 4 project cards. Change this to show **only the first 2**:

1. **Copilot Cowork Agent for Immigration Case Reconciliation** (with its tags and metric — keep exactly as they are now)
2. **Visa Set Builder: AI-Powered Document Generation via Copilot Studio** (with its tags and metric — keep exactly as they are now)

Remove the Onboarding SPA and PaddockPlan cards from the Home page. They remain unchanged on the /projects page — this only affects the Home page.

---

## 3. Add a "View all projects →" link below the 2 project cards

Immediately below the second project card (Visa Set Builder), add a centered link:

**View all projects →**

- Same styling as the "Read case study →" links (same blue color, same arrow, same font size).
- Centered horizontally on the page.
- Links to the /projects page (or whatever route the Projects index page uses).
- Add some vertical spacing above and below so it doesn't feel cramped against the last card or the footer.

---

## Summary of what stays unchanged

- The hero headline "Power Platform & Microsoft Copilot specialist" → no changes.
- The description paragraph → no changes.
- The "Open to…" availability line → no changes.
- The "Let's connect on LinkedIn →" CTA button → no changes.
- The navbar (Home, About, Projects, EN | ES, dark mode toggle) → no changes.
- The project card styling, tags, and metrics → no changes to how they look, only which ones appear on the Home page.
- The /projects page → no changes at all (still shows all 4 projects with tags and metrics).
- All case study pages → no changes.
- The About page → no changes.
- Footer → no changes.
- No animations of any kind. Everything static.

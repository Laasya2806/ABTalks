# ABTalks — PROMPTS.md

## AI-Assisted Development Log

This file records the AI-assisted development process used to build and refine **ABTalks**, a 60-Day Coding Challenge experience.

The project was developed iteratively during the hackathon. AI was used for product thinking, UI/content decisions, implementation, debugging, and verification. The application was manually tested in the browser after changes.

> **Note:** Where the original prompt wording was available in the development record, it is preserved below. Where an earlier conversation was summarized rather than captured verbatim, the entry is explicitly marked as a summary rather than presented as a fabricated quotation.

---

# 1. Product Direction — ABTalks Redesign

## Goal

Turn the ABTalks concept into a focused 60-day engineering journey rather than a generic coding-course dashboard.

The core product idea was:

**Consistency ≠ Growth**

Showing up every day matters, but simply maintaining a streak should not be presented as the same thing as deliberately pushing skills further.

The product was structured around:

**Build → Ship → Show**

- **Build:** complete a real engineering challenge.
- **Ship:** submit/version-control the work.
- **Show:** create visible proof of work through GitHub and LinkedIn.

The three available engineering tracks were retained:

- Web Development
- DSA & Problem Solving
- AI & Machine Learning

## Product/UX direction used

The initial product strategy emphasized:

- A strong landing-page explanation of the 60-day system.
- Today's action as the most important dashboard element.
- A visible Day 12 of 60 state.
- A consistency streak as a secondary progress signal.
- A separate Growth/Stretch signal.
- A Core vs Stretch difficulty choice.
- GitHub + LinkedIn as proof-of-work.
- A compact three-track experience.
- A mobile-friendly layout around the 390px/360px range.
- Avoiding fake authentication, unnecessary backend functionality, or features that could not realistically be completed during the hackathon.

The design direction intentionally favored a restrained dark interface, strong typography, green accent treatment, cards, and clear primary actions.

---

# 2. Landing Page / Product Positioning Prompt

### Prompt

> We are doing ONE focused product-positioning/content pass on the ABTalks redesign. IMPORTANT: Do NOT rebuild the application. Do NOT change unrelated functionality.
>
> The goal is to position ABTalks around a 60-day engineering journey based on Build → Ship → Show, daily engineering challenges, specialized tracks, consistency, and visible proof of work.
>
> Keep the existing application architecture and functionality. Improve the product messaging and presentation without introducing fake functionality.

### Result

The landing page communicates:

- **60 DAYS. 60 BUILDS. ONE STRONGER YOU.**
- ABTalks as a daily engineering system.
- The Build → Ship → Show model.
- Three specialized challenge tracks.
- A direct path into track selection.

The landing page was kept focused rather than adding unrelated marketing sections.

---

# 3. Challenge Track Structure

The application was organized around three specialized paths.

## Web Development

Focus:

`HTML → CSS → JavaScript → React → APIs → Full-stack`

## DSA & Problem Solving

Focus:

`Arrays → Strings → Recursion → Trees → Graphs → Algorithms`

## AI & Machine Learning

Focus:

`Python → ML → Deep Learning → LLMs → Deployment`

The goal was not to create three completely separate applications. The same product flow was reused while challenge content and progress remained track-specific.

---

# 4. Core vs Stretch — Product Mechanic

One of the main product ideas was to make the difference between **consistency** and **growth** an actual interaction instead of just marketing text.

### Design reasoning

A student can complete the normal version of the day's challenge as **Core**, or deliberately attempt a harder version as **Stretch**.

This avoids pretending that the application can automatically judge whether someone's code is "good enough" or whether they genuinely improved.

## Core

- Baseline challenge.
- Standard requirements.
- Maintains consistency.
- Reward: `+1 Consistency 🔥`.

## Stretch

- Advanced version of the same underlying project/problem.
- Additional engineering requirements.
- Represents deliberate skill growth.
- Reward: `+1 Consistency 🔥 +1 Growth Star ↗`.

This approach was intentionally kept mock-data/local-state based because a full AI grading system or backend would have been excessive for the hackathon timeframe.

---

# 5. Functional Bug Fix — Track-Aware Day 12 + Track-Isolated Progress

This was the most important functional debugging pass.

### Exact prompt used

> We found two functional bugs during final testing. Fix ONLY these bugs. Do NOT redesign the UI, change the visual styling, or alter unrelated functionality.
>
> BUG 1 — DAY CHALLENGE MUST BE TRACK-AWARE
>
> Current behavior:
>
> - /dashboard?track=web correctly shows Web Development.
> - /dashboard?track=dsa correctly shows DSA.
> - /dashboard?track=aiml correctly shows AI & Machine Learning.
> - BUT clicking "Continue Day 12" from DSA still opens the Web Development Day 12 challenge.
> - /day/12 is currently loading the Web Development challenge regardless of selected track.
>
> Required behavior:
>
> - /dashboard?track=web → Continue Day 12 → /day/12?track=web → Web Development Day 12 challenge
> - /dashboard?track=dsa → Continue Day 12 → /day/12?track=dsa → DSA Day 12 challenge
> - /dashboard?track=aiml → Continue Day 12 → /day/12?track=aiml → AI & Machine Learning Day 12 challenge
>
> Use the existing mock challenge data. Do not create new challenge content unless absolutely necessary.
>
> The DayChallengePage must read the track from the URL/search params and load the matching challenge for that track and day.
>
> BUG 2 — PROGRESS MUST BE TRACK-SPECIFIC
>
> Current behavior:
>
> - Completing/submitting the Web Development Day 12 challenge changes progress globally.
> - After Web Development is completed, DSA and AI/ML dashboards also show the same completed progress even though those tracks were never completed.
>
> Required behavior:
>
> - Progress/completion must be stored independently for each track.
> - Completing Web Development must ONLY update Web Development progress.
> - DSA and AI/ML must remain incomplete until their own challenges are submitted.
> - Completing DSA must ONLY update DSA.
> - Completing AI/ML must ONLY update AI/ML.
>
> The track-specific state should include whatever existing progress fields the UI already uses, such as:
>
> - completed days
> - consistency streak
> - stretch/growth count
> - today's completion/submission state
> - proof/submission data
>
> Do NOT remove the existing Reset State functionality yet. It must continue resetting the application's state cleanly.
>
> IMPORTANT:
>
> - Preserve the current UI and styling exactly.
> - Preserve the existing ABTalks branding and content.
> - Do not rebuild the application.
> - Do not change the three tracks.
> - Do not change the challenge content unnecessarily.
> - Do not introduce a backend/database.
> - Keep the existing local/mock state architecture unless a minimal change is required.
> - Make the smallest reliable code changes necessary.
>
> After implementing:
>
> 1. Run the production build.
> 2. Verify that all three track dashboard URLs load.
> 3. Verify Day 12 receives and uses the selected track.
> 4. Verify completing Web Development does NOT complete DSA or AI/ML.
> 5. Verify Reset State still works.
> 6. Report exactly which files were changed and what was fixed.

### Result

The application was changed to maintain independent track state.

The important behavior became:

- Web progress is stored under Web.
- DSA progress is stored under DSA.
- AI/ML progress is stored under AI/ML.
- Day 12 reads the selected track from URL parameters.
- Reset State resets all tracks.

The production build completed successfully.

---

# 6. Navigation UX — Track-Aware Navbar

### Prompt

> We found one final navigation UX issue. Fix ONLY this issue. Do NOT redesign the UI, change styling, or alter any challenge/progress functionality.
>
> The Dashboard and Day 12 navbar links should preserve the currently selected track.
>
> If no track is selected on the Overview page, do not silently default to Web. Instead, direct the user toward the track-selection section so they explicitly choose Web, DSA, or AI/ML.

### Result

The navbar became track-aware.

Examples:

- Web → `/dashboard?track=web`
- DSA → `/dashboard?track=dsa`
- AI/ML → `/dashboard?track=aiml`

The same principle was applied to Day 12.

On the Overview page, Dashboard/Day 12 navigation directs the user to track selection instead of silently choosing Web.

---

# 7. Dashboard + Day 12 Track Switcher

### User requirement / implementation prompt

The navigation was further improved after testing showed that forcing users to return to Overview every time they wanted to switch tracks was inconvenient.

The requested behavior was:

- Add a compact track selector directly to Dashboard.
- Add the same selector to Day 12.
- Allow switching between Web Dev, DSA, and AI/ML immediately.
- Preserve the current page while changing the selected track.

### Result

A reusable `TrackSwitcher` component was added.

Dashboard:

`Web Dev | DSA | AI / ML`

Day 12:

`Web Dev | DSA | AI / ML`

The selected track is reflected in the URL while preserving the current page.

This made the application easier to navigate without changing the overall visual design.

---

# 8. Core vs Stretch Content Fix

### User requirement

During testing, Core and Stretch were using essentially the same displayed description.

The requested change was not to create an entirely new application or separate project, but to make the two levels visibly meaningful.

### Implementation direction

For each track, the existing challenge data was expanded to contain:

- `coreContent`
- `stretchContent`

The UI dynamically displays the selected mode's:

- title
- description
- time estimate
- checklist

### Example

Core:

**Build a Responsive Profile Card**

Baseline responsive profile-card requirements.

Stretch:

**Build a Responsive Profile Card — Advanced**

Additional requirements such as a theme toggle, interactive card flip, and custom micro-animations.

The same underlying project remains recognizable, but Stretch clearly communicates why it is more difficult.

---

# 9. Submission & Scoring

The Core/Stretch selection was connected to the existing local progress system.

## Core submission

Awards:

`+1 Consistency 🔥`

## Stretch submission

Awards:

`+1 Consistency 🔥 +1 Growth Star ↗`

The existing Reset State behavior was preserved.

No backend or database was introduced.

---

# 10. Consistency Milestone Verification

### Verification prompt

> Verify that the Consistency Milestone banner is correctly based on track-specific progress. Do not redesign or change unrelated functionality.
>
> Each track should evaluate its own consistency data. Completing or progressing one track must not cause another track's milestone banner to appear.

### Result

No code change was necessary.

The existing condition correctly evaluates the selected track's own state.

The mock starting values intentionally differ between tracks, so the milestone can appear for one track while not appearing for another until that track reaches the required threshold.

This confirmed that the milestone logic respects the track-isolation architecture.

---

# 11. Responsive Testing

The application was manually tested at a narrow mobile-style viewport, including approximately **360px**.

The test focused on:

- Navbar visibility.
- Track switcher fit.
- Dashboard cards.
- Day 12 challenge content.
- Buttons and primary actions.
- Progress cards.
- Scrolling behavior.
- No obvious horizontal overflow.

The same application remained usable without creating a separate mobile implementation.

---

# 12. Reset State Testing

Reset State was deliberately preserved throughout the debugging process.

Testing confirmed that:

- Track-specific progress can be changed.
- Completing one track does not modify another.
- Reset State restores the tracks to their initial mock states.
- The application can be tested repeatedly from a clean state.

This was particularly important because the application uses local/mock state rather than a backend database.

---

# 13. Production Build Verification

After functional changes, the production build was run.

The build completed successfully with no build errors.

The application was also opened through the local Vite development server for manual browser testing.

---

# 14. Vercel Deployment

The application was deployed to Vercel during final testing.

Vercel detected the project as a Vite application with:

- Build command: `vite build`
- Output directory: `dist`

The production deployment completed successfully and the live Production URL was confirmed to load.

The Vercel deployment was then used as the live version for final testing.

---

# 15. Final Feature Verification

The final application was manually checked for:

### Product

- ABTalks branding
- 60-day challenge positioning
- Build → Ship → Show framing
- Three specialized tracks

### Track behavior

- Web Development dashboard
- DSA dashboard
- AI/ML dashboard
- Dashboard track switching
- Day 12 track switching
- Track-aware URLs

### Challenge behavior

- Web Day 12 challenge
- DSA Day 12 challenge
- AI/ML Day 12 challenge
- Core challenge content
- Stretch challenge content
- Different Core/Stretch descriptions
- Different Core/Stretch time estimates
- Different Core/Stretch checklist content

### Progress behavior

- Track-specific progress
- Track-specific streaks
- Track-specific Growth/Stretch counts
- Track-specific submission state
- Track-specific milestone behavior
- Core scoring
- Stretch scoring

### State management

- Reset State
- Clean reset of all tracks
- No backend/database dependency

### Responsive behavior

- Desktop layout
- Narrow/mobile-style layout around 360px

### Deployment

- Production build
- Vercel deployment
- Live application loading

---

# 16. Important Development Constraints

Throughout the final implementation passes, the following constraints were intentionally maintained:

1. Do not rebuild the application unnecessarily.
2. Preserve ABTalks branding.
3. Preserve the three existing tracks.
4. Do not introduce a backend/database just for the hackathon.
5. Reuse existing mock challenge data.
6. Preserve the local/mock state architecture.
7. Keep Reset State functional.
8. Make the smallest reliable changes for bugs.
9. Do not redesign the UI when fixing functional bugs.
10. Manually test changes in the browser.
11. Run a production build after significant functional changes.
12. Keep the application usable at narrow mobile widths.

---

# 17. Hackathon Submission Requirements

The participant Q&A specified three required submission artifacts:

1. **Public GitHub repository**
2. **Working live deployed URL**
3. **PROMPTS.md containing the AI prompts/conversations used during development**

The live URL is what judges use to evaluate the application; screenshots do not replace the live demo.

The AI usage log is important for authenticity verification, so this file is intentionally kept in the repository root.

---

# 18. Final Status

ABTalks is currently in the final verification/submission stage.

The implemented product includes:

**60 Days → 3 Tracks → Daily Challenge → Core/Stretch → Build → Ship → Show → Track-specific progress**

The major functional issues discovered during testing were fixed before final submission:

- Day 12 was made track-aware.
- Progress was isolated per track.
- Navbar navigation became track-aware.
- Dashboard and Day 12 received direct track switching.
- Core and Stretch content became meaningfully different.
- Reset State remained functional.
- The final application was tested at desktop and narrow mobile widths.
- The production build passed.
- The application was deployed successfully to Vercel.


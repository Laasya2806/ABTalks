# ABTalks

> **60 days. 60 builds. One stronger you.**

ABTalks is a 60-day engineering challenge platform designed to turn **consistency into visible proof of work** through daily coding challenges, track-specific progress, Core vs Stretch difficulty, and a Build → Ship → Show workflow.

## 🚀 Live Demo

**[Open ABTalks](https://abtalks-theta.vercel.app)**

## 💡 The Idea

Most coding platforms focus on solving individual problems. ABTalks focuses on the habit behind them: **showing up, building something, and creating evidence of progress.**

The product is built around:

**Build → Ship → Show**

- **Build** — complete a real engineering challenge.
- **Ship** — submit and version-control the work.
- **Show** — turn the work into visible proof through GitHub and LinkedIn.

The product also separates **Consistency** from **Growth**. Completing a Core challenge keeps the streak moving, while completing a Stretch challenge represents deliberate skill growth.

## 🎯 Tracks

ABTalks currently provides three engineering tracks:

### 🌐 Web Development
`HTML → CSS → JavaScript → React → APIs → Full-stack`

### 🧩 DSA & Problem Solving
`Arrays → Strings → Recursion → Trees → Graphs → Algorithms`

### 🤖 AI & Machine Learning
`Python → ML → Deep Learning → LLMs → Deployment`

Each track has its own challenge content and independent progress state.

## 🔥 Core vs Stretch

Every daily challenge can be approached at two levels.

| Mode | Purpose | Reward |
|---|---|---|
| **Core** | Complete the baseline challenge and maintain consistency | `+1 Consistency 🔥` |
| **Stretch** | Push the same challenge further with additional engineering requirements | `+1 Consistency 🔥 +1 Growth Star ↗` |

Stretch challenges have their own title, requirements, checklist, and time estimate so the difference in difficulty is clear.

## ✨ Key Features

- 60-day engineering challenge journey
- Three specialized learning tracks
- Track-specific dashboards
- Direct track switching from Dashboard and Day 12
- Track-aware Day 12 challenges
- Independent progress for Web, DSA, and AI/ML
- Core vs Stretch challenge modes
- Consistency streak tracking
- Growth/Stretch tracking
- Consistency milestone nudges
- Submission/proof-of-work flow
- Reset State for clean testing
- Responsive layout tested around 360px mobile width
- Dark, focused developer-oriented interface
- Local/mock state architecture suitable for the hackathon prototype

## 🧠 Track-Specific Progress

A key part of the implementation is that progress is **not global**.

For example:

- Completing Web Development Day 12 updates only Web Development.
- DSA keeps its own streak, completed days, Growth count, and submission state.
- AI/ML keeps its own independent state.
- Reset State restores all three tracks to their initial mock state.

This prevents completing one track from incorrectly making the others appear completed.

## 🧭 Navigation

The selected track is preserved through the URL:

- `/dashboard?track=web`
- `/dashboard?track=dsa`
- `/dashboard?track=aiml`

Day 12 follows the same pattern:

- `/day/12?track=web`
- `/day/12?track=dsa`
- `/day/12?track=aiml`

A compact track switcher is available directly inside the Dashboard and Day 12 experience, so users do not need to return to the Overview page every time they want to change tracks.

## 🛠️ Tech Stack

- **React 18**
- **Vite 5**
- **React Router DOM**
- **Lucide React**
- **JavaScript / JSX**
- **CSS**
- **Local/mock state**
- **Vercel** for deployment

No backend or database is required for the current prototype.

## 📁 Project Structure

```text
ABTalks/
├── src/
│   ├── components/
│   │   ├── ActivityStrip.jsx
│   │   ├── CoreStretchCard.jsx
│   │   ├── MissionCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── SuccessModal.jsx
│   │   └── TrackSwitcher.jsx
│   ├── context/
│   │   └── ChallengeContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── DayChallengePage.jsx
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── PROMPTS.md
├── package.json
├── vercel.json
└── vite.config.js
```

## 💻 Run Locally

```bash
git clone https://github.com/Laasya2806/ABTalks.git
cd ABTalks
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## 🧪 Testing & Verification

The final implementation was manually tested for:

- Web, DSA, and AI/ML dashboard navigation
- Track-aware Day 12 navigation
- Dashboard and Day 12 track switching
- Core vs Stretch content changes
- Track-isolated progress
- Track-specific milestone behavior
- Submission and scoring behavior
- Reset State
- Desktop layout
- Narrow mobile-style layout around 360px
- Production build
- Vercel deployment

## 🤖 AI-Assisted Development

AI was used throughout the iterative development process for product thinking, UI/content decisions, implementation, debugging, and verification.

The development prompts and important implementation decisions are documented in **[PROMPTS.md](./PROMPTS.md)**.

## 📸 Screenshots

Screenshots will be added here as part of the final project presentation and documentation.

## 🏁 Project Status

ABTalks is in the final hackathon submission stage.

The current product flow is:

**60 Days → 3 Tracks → Daily Challenge → Core/Stretch → Build → Ship → Show → Visible Proof**

---

Built as a hackathon project with a focus on **consistency, deliberate growth, and proof of work.**

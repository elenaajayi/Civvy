# CivicGram — Sprint-0 Backlog (2-Hour Build)

> **Objective:** Ship a tappable prototype that boots on Expo, shows a stub Onboarding + Issue Rings flow, and proves CI/CD — all in a single two-hour coding blast.

---

### Legend  
* **🔴 Must-Have** — absolutely required to demo  
* **🟠 Nice-to-Have** — attempt if core loop is stable  
* **🟡 Stretch** — polish only if spare minutes  

Status: `☐ To Do` | `🛠 In Progress` | `✅ Done`

---

## 1 Condensed Table

| # | Story ID | Epic | As a… | I want… | Acceptance Criteria | Pri | Status |
|---|----------|------|-------|---------|---------------------|-----|--------|
| 1 | **S0-01** | DevOps | dev | initialise Expo + RN TS project | `mobile/` boots on iOS & web sim | 🔴 | ☐ |
| 2 | **S0-02** | DevOps | dev | scaffold Node/Express API | `GET /` → `API live` | 🔴 | ☐ |
| 3 | **S0-03** | DevOps | dev | add CI workflow | GH Action builds Expo preview | 🔴 | ☐ |
| 4 | **S0-04** | Onboarding | user | see address form | Address + Continue loads next screen | 🔴 | ☐ |
| 5 | **S0-05** | Onboarding | dev | mock ZIP→district fn | static JSON returns code < 1 s | 🔴 | ☐ |
| 6 | **S0-06** | Survey | user | take 4-Q kick-off survey | Chips record answers, log payload | 🔴 | ☐ |
| 7 | **S0-07** | Feed | user | view Issue Rings | hard-coded cards swipe horizontally | 🔴 | ☐ |
| 8 | **S0-08** | Feed | user | play candidate reel | local mp4 auto captions visible | 🔴 | ☐ |
| 9 | **S0-09** | Feedback | user | tap 👍 🤔 🚩 | state toggles; 🚩 shakes | 🟠 | ☐ |
|10 | **S0-10** | Rewards | user | earn dummy XP + MetroPoints | counter ++ and badge toast | 🟠 | ☐ |
|11 | **S0-11** | Candidate | cand. | open placeholder Live page | stub screen with “Start Live” CTA | 🟠 | ☐ |
|12 | **S0-12** | Sharing | user | share to IG link | ShareSheet opens with prefill text | 🟠 | ☐ |
|13 | **S0-13** | Docs | dev | push README + screenshots | images render in PRD | 🟡 | ☐ |
|14 | **S0-14** | Arch & Quality | dev | enable strict TS, ESLint & Prettier | `npm run lint` green; pre-commit hook active | 🟠 | ☐ |
|15 | **S0-15** | Arch & Quality | dev | set up Jest & RN Testing Library | `npm test` green on sample test | 🟠 | ☐ |
|16 | **S0-16** | Arch & Quality | dev | create global Context store (XP, user) | Provider wraps app; type-safe actions | 🟠 | ☐ |

---

## 2 Detailed Stories by Epic

### 2.1 DevOps Foundation
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-01** | `npx create-expo-app` · add TS config · commit |
| **S0-02** | create `server/src/index.ts` Express boilerplate |
| **S0-03** | `.github/workflows/expo-preview.yml` with Expo token secret |

### 2.2 Onboarding Flow
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-04** | Build `OnboardingScreen.tsx` with Tailwind address form |
| **S0-05** | Mock `getDistrict(zip)` util returning static JSON |

### 2.3 Kick-off Survey
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-06** | Reusable `ChipSelect` component · store answers in state |

### 2.4 Issue Rings Feed
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-07** | `FlatList` horizontal cards · dummy images |
| **S0-08** | Import local mp4 · add `Video` component w/ auto captions |

### 2.5 Feedback & Rewards
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-09** | `useState` reactions · shake animation for 🚩 |
| **S0-10** | `useContext` XP store · toast badge modal |

### 2.6 Candidate Placeholder
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-11** | Create `LiveScreen.tsx` stub with “Start Live” button |

### 2.7 Sharing + Docs
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-12** | React-Native Share API with prefilled text |
| **S0-13** | Add screenshots to `docs/README_images` · update PRD |

### 2.8 Architecture & Quality
| Story ID | Task Breakdown |
|----------|----------------|
| **S0-14** | Add ESLint + Prettier configs; Husky pre-commit |
| **S0-15** | Install Jest + RN Testing Library; sample test |
| **S0-16** | Create global Context provider (XP, user) |

---

## 3 Sprint-0 Definition of Done
* Prototype runs on at least **one iOS simulator** *and* **web preview**.  
* Happy-path **Address → Issue Rings** navigates with no red screens.  
* GitHub Actions CI shows a green check on `main`.

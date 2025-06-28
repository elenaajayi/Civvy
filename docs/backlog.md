> **Objective:** Ship a tappable prototype that boots on Expo, shows a stub Onboarding + Issue Rings flow, and proves CI/CD—within two hours.

---

### Legend  
* **🔴 Must-Have** — demo blocker  
* **🟠 Nice-to-Have** — do if core loop stable  
* **🟡 Stretch** — only if time remains  
`☐ To Do` | `🛠 In Progress` | `✅ Done`

---

### 1 Condensed Table  

| # | Story ID | Epic | As a… | I want… | Acceptance Criteria | Pri | Status |
|---|----------|------|-------|---------|---------------------|-----|--------|
| 1 | **S0-01** | DevOps | dev | init Expo + RN TS project | boots on iOS & web sim | 🔴 | ☐ |
| 2 | **S0-02** | DevOps | dev | scaffold Node/Express API | `GET /` → `API live` | 🔴 | ☐ |
| 3 | **S0-03** | DevOps | dev | add CI workflow | GH Action builds Expo preview | 🔴 | ☐ |
| 4 | **S0-04** | Onboarding | user | see address form | Address + Continue loads next screen | 🔴 | ☐ |
| 5 | **S0-05** | Onboarding | dev | mock ZIP→district fn | static JSON returns code <1 s | 🔴 | ☐ |
| 6 | **S0-06** | Survey | user | take 4-Q kick-off survey | Chips record answers, log payload | 🔴 | ☐ |
| 7 | **S0-07** | Feed | user | view Issue Rings | hard-coded cards swipe horiz. | 🔴 | ☐ |
| 8 | **S0-08** | Feed | user | play candidate reel | local mp4 auto captions | 🔴 | ☐ |
| 9 | **S0-09** | Feedback | user | tap 👍 🤔 🚩 | state toggles; 🚩 shakes | 🟠 | ☐ |
|10 | **S0-10** | Rewards | user | earn dummy XP + Metro | counter ++ & badge toast | 🟠 | ☐ |
|11 | **S0-11** | Candidate | cand. | open placeholder Live | stub screen with CTA | 🟠 | ☐ |
|12 | **S0-12** | Sharing | user | share to IG link | ShareSheet prefilled | 🟠 | ☐ |
|13 | **S0-13** | Docs | dev | push README + shots | images render in PRD | 🟡 | ☐ |
|14 | **S0-14** | Arch & Quality | dev | strict TS, ESLint, Prettier | `npm run lint` green; hook active | 🟠 | ☐ |
|15 | **S0-15** | Arch & Quality | dev | Jest + RN Testing Library | sample test passes | 🟠 | ☐ |
|16 | **S0-16** | Arch & Quality | dev | global Context store (XP, user) | Provider wraps app | 🟠 | ☐ |

---

### 2 Definition of Done  
* Prototype runs on at least **one iOS simulator** *and* **web preview**.  
* Happy-path “Address → Issue Rings” navigates with no crashes.  
* CI workflow shows a green check on `main`.

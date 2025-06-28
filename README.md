# LIVE DEMO (BOLT):

https://bolt.new/~/sb1-dwwy4eut

---




# Civvy (voting) Prototype

A swipe-friendly, story-driven civic-tech prototype that helps New Yorkers discover, fact-check, and discuss local candidates & ballot issues—right in their browser or on a mobile device. Users can filter by issue, watch short candidate clips, react, and submit questions in-app.

---

## 🚀 Key Features

1. **Issue-based Discovery**  
   - Horizontal "Issue Rings" let you pick topics (Housing, Transit, Climate, Healthcare, Education).  
   - Dynamically filters candidate clips to only those who address that issue.

2. **Candidate Clips**  
   - 15–30 sec video previews (local demo assets) powered by `expo-av`.  
   - Each clip shows the candidate's name, issue badges, and reaction buttons (👍/👎).  
   - "Ask Candidate" button opens an in-app modal to submit questions directly.

3. **In-App Q&A**  
   - A modal form to type your question.  
   - Submits via `POST /questions` to the backend—questions are logged server-side.

4. **Tabbed Navigation**  
   - Bottom-tab navigator with **Home** and **Ask** screens.  
   - Clean, icon-driven UI using `@expo/vector-icons`.

5. **Mock Data Backend**  
   - Express server serves:
     - `GET /issues` → list of topics  
     - `GET /candidates?issue=…` → mock video data annotated with `issues: string[]`  
     - `POST /questions` → logs incoming questions  

---

## 🏗 Tech Stack

- **Frontend**  
  - React Native (Expo CLI) → Web + mobile-compatible  
  - React Navigation (bottom tabs)  
  - expo-av for video playback  
  - In-app Modal + TextInput for Q&A  
- **Backend**  
  - Node.js + Express  
  - Simple in-memory logging of questions  
- **Build & Demo**  
  - Expo for web (`expo start --web`)  
  - Local JS entrypoint (`App.js`)—no TypeScript at runtime  
  - Minimal TS config for dev tooling, but the bundle is pure JS  

---

## 🛠 Getting Started

### Clone & Install

```bash
git clone https://github.com/elenaajayi/voting.git
cd voting

# Install mobile app dependencies
npm install
npm install --prefix mobile

# Install server dependencies
npm install --prefix server

# Start the backend server (port 3000)
cd server && npm start

# In a new terminal, start the Expo app
cd ../mobile && npm start -- --web

# Open http://localhost:8082 in your browser
```

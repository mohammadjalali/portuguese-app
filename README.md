# 🇵🇹 Português para Principiantes

European Portuguese A1 course — NOVA IMS Spring 2026.

## Architecture

```
.github/workflows/deploy.yml   ← GitHub Actions: builds and deploys on every push to main
src/
  App.jsx                      ← All UI components (cards, quiz, grammar, navigation)
  data/courseData.js            ← All content: sessions, vocabulary, grammar rules
  index.jsx                    ← Entry point
index.html                     ← Root HTML (Vite convention, lives at project root)
vite.config.js                 ← Vite config; set base to your repo name for GitHub Pages
package.json
```

Built with React 19 and Vite 6. No UI libraries — all styling is inline CSS.

## Run locally

```bash
npm install
npm start        # http://localhost:5173
```


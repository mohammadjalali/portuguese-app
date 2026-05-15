# Português para Principiantes

**Interactive European Portuguese A1 Course — NOVA IMS, Spring 2026**

[![Deployed](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen?logo=github)](https://mohammadjalali.github.io/portuguese-app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## Live Demo

**[mohammadjalali.github.io/portuguese-app](https://mohammadjalali.github.io/portuguese-app/)**

---

## Features

- **3D Flip Flashcards** — Each card shows the word and IPA on the front; flip for an example sentence, English translation, and learner tip. Click the speaker icon to hear European Portuguese pronunciation.
- **Grammar Lessons** — Every session includes explanations, conjugation tables, worked examples with pronunciation guides, minimal-pair drills, and a Common Mistakes & Tips section.
- **Interactive Exercises** — Three exercise types per lesson:
  - Fill-in-the-blank (type the correct form)
  - Multiple-choice (4 options with explanations)
  - Sentence builder (click word tiles to fill gaps)
- **Quizzes** — End-of-session quizzes drawing from both vocabulary and grammar exercise banks.
- **European Portuguese TTS** — Pronunciation powered by Google Translate (pt-PT); falls back to the browser Web Speech API.
- **19 Sessions** covering the full A1 syllabus, each color-themed with category-filtered vocabulary.

---

## Sessions

| # | Topic | Grammar Focus |
|---|-------|---------------|
| 1 | Greetings & self-introductions | Alphabet, useful expressions |
| 2 | Personal information | Pronouns, SER, TER, chamar-se, numbers 0–50 |
| 3 | Name, nationality, origin | -ar verbs, interrogatives (onde, como, qual) |
| 4 | Profession, age, marital status | Preposition EM, indefinite articles, negation, numbers 50–100 |
| 5 | Family & simple descriptions | -er verbs, SER vs ESTAR, possessives |
| 6 | Describing people & hobbies | Prepositions of place, demonstratives, adjective agreement |
| 7 | Days, months & eating habits | Time prepositions |
| 8 | Food culture & eating habits | Time prepositions for meals/schedules |
| 9 | House, rooms & furniture | Prepositional phrases of place, SER/ESTAR/FICAR |
| 10 | Transport & directions | Movement prepositions (para, até, por) |
| 11 | Shopping, prices & quantities | Comparatives, numbers 100–1000, IR + infinitive |
| 12 | Weather & seasons | Irregular verbs DAR/FAZER/PÔR/TRAZER, near future |
| 13 | Clothing, styles & accessories | HÁ/DESDE, indirect object pronouns, connectors |
| 15 | Portuguese festivals & celebrations | Indefinite pronouns (alguém, ninguém, tudo, todos) |
| 16 | Health & healthcare | Formal imperative (você form) |
| 17 | Social events & digital messages | TÃO/TANTO, indefinite pronouns review |
| 18 | Portuguese culture & social norms | Imperative revision, synonyms & antonyms |
| 19 | Past events & travel | Pretérito Perfeito regular (-ar/-er/-ir), JÁ/AINDA/NUNCA |
| 21 | Living abroad & wellbeing | Pretérito Perfeito irregular (ser/ir/ter/fazer/vir/estar) |

Sessions 14, 20, and 22–25 are exam and presentation weeks with no new language content.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19, inline CSS (no UI library) |
| Build | Vite 6 |
| Audio | Google Translate TTS (pt-PT) + Web Speech API fallback |
| Deploy | GitHub Actions → GitHub Pages |

---

## Getting Started

```bash
npm install
npm start         # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

---

## Project Structure

```
src/
  App.jsx                    ← Root component: routing, HomePage, SessionPage, QuizSection
  components/
    GrammarBox.jsx           ← Renders all grammar section types + exercise toggle
    FillInTheBlank.jsx       ← Fill-in-the-blank interactive exercise
    MultipleChoice.jsx       ← Multiple-choice exercise with per-answer explanations
    SentenceBuilder.jsx      ← Click-to-place word tile exercise
  data/
    index.js                 ← Aggregates all sessions + courseInfo (single import point)
    courseInfo.js            ← Course metadata (title, institution, assessments)
    sessions/
      session1.json          ← Vocabulary + grammar for each session
      session2.json
      ...
  utils/
    speak.js                 ← speakPortuguese(text): Google Translate TTS with fallback
.github/workflows/deploy.yml ← CI/CD: build and deploy to GitHub Pages on push to main
vite.config.js               ← Base path set to /portuguese-app/ for GitHub Pages
```

---

## Adding a Session

Each session is a JSON file in `src/data/sessions/` and must be registered in `src/data/index.js`.

**Vocabulary item shape:**
```json
{
  "word": "o médico",
  "translation": "doctor",
  "pronunciation": "oh MEH-dee-koo",
  "ipa": "/u ˈmɛdiku/",
  "example": "O meu pai é médico.",
  "exampleTranslation": "My father is a doctor.",
  "category": "professions",
  "tip": "Feminine form: a médica."
}
```

**Grammar exercise types:** `multiple-choice`, `fill-in-blank`, `sentence-builder`.

See [`CLAUDE.md`](./CLAUDE.md) for the full style guide covering vocabulary conventions, IPA format, grammar section types, exercise schemas, and color/accent theming.

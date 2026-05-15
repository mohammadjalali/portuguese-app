# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Project Overview

A single-page European Portuguese A1-level course app for NOVA IMS (Spring 2026). Built with React 19 + Vite 6, deployed to GitHub Pages. Features vocabulary flashcards, comprehensive grammar sections with interactive exercises, pronunciation audio (Web Speech API), YouTube search integration, and quizzes.

## Commands

```bash
npm start         # Dev server at http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No test framework, linter, or formatter is configured.

## Architecture

### Navigation
Simple state-based routing. `App` holds `activeSession` state: `null` shows `HomePage`, otherwise shows `SessionPage`. No React Router.

### Data layer
```
src/data/
  index.js              ← Aggregates all sessions + courseInfo (single import point)
  courseInfo.js         ← Course metadata (title, institution, assessments)
  sessions/
    session1.json       ← Session data: vocab + rich grammar with exercises
    session2.json
    session3.json
    session4.json
    session5.json
    session6.json
    session7.json
    session8.json
    session9.json
    session10.json
```

Each vocabulary item has: `word`, `translation`, `pronunciation`, `ipa`, `example`, `exampleTranslation`, `category`, `tip`. (`youtubeQuery` is optional and only used in early sessions.)

Each grammar object has: `title`, `sections[]` (explanation, table, examples, tips, pronunciation), `exercises[]` (fill-in-blank, multiple-choice, sentence-builder).

### Components
```
src/App.jsx              ← Root: HomePage, SessionPage, QuizSection, VocabCard, etc.
src/components/
  GrammarBox.jsx         ← Renders all grammar section types + exercise wrapper
  FillInTheBlank.jsx     ← Interactive fill-in-the-blank exercise
  MultipleChoice.jsx     ← One-at-a-time multiple choice with explanations
  SentenceBuilder.jsx    ← Click word tiles to fill blanks (conjugations)
```

All styling is inline via `style={{}}` props. No CSS files, no UI library.

### Utilities
```
src/utils/
  speak.js              ← speakPortuguese(text): Google Translate TTS (pt-PT), falls back to Web Speech API
```

### Content status
19 of 25 planned sessions are implemented (Sessions 1–13, 15–19, 21). Sessions 14, 20, 22, 23, 24, 25 are skipped (midterm, oral presentations, and final exams — no new language content). `courseInfo.totalSessions` is 25.

### Syllabus — Authoritative Source for Session Topics
**Always** check the syllabus PDF before creating or updating session content:
- `portuguese/PORT Spring IMS2026.docx-3.pdf` — full course syllabus with weekly schedule
- The syllabus defines the exact topics and grammar points for each class session
- Session PDFs (`portuguese/Session * B S2026*.pdf`) contain exercises and vocabulary but the syllabus is the authoritative source for **what each session covers**
- Key rule: **Never invent session topics.** If a session PDF doesn't exist, derive the topic from the syllabus and clearly note it was not sourced from a PDF.
- Note: Session 8 PDF does not exist in `portuguese/` — derive its content from the syllabus only.

**Syllabus session mapping (all implemented sessions):**
| Session | Date | Topic | Grammar |
|---------|------|-------|---------|
| 1 | Feb 24 | Greetings, self-introductions | Alphabet, useful expressions |
| 2 | Feb 26 | Personal information | Pronouns, SER, TER, chamar-se, numbers 0–50 |
| 3 | Mar 3 | Name, nationality, origin | -ar verbs, interrogatives (onde, como, qual) |
| 4 | Mar 5 | Profession, age, marital status, address | Preposition EM, indefinite articles, negation, numbers 50–100 |
| 5 | Mar 10 | Family, simple descriptions | -er verbs, SER vs ESTAR, possessives |
| 6 | Mar 12 | Describing people/objects, hobbies | Prepositions of place, demonstratives, onde?, adjective agreement |
| 7 | Mar 17 | Days, months, birthdays, eating habits | Time prepositions |
| 8 | Mar 19 | Food culture & eating habits (deepening) | Time prepositions for meals/schedules |
| 9 | Mar 24 | House, rooms, furniture | Prepositional phrases of place, SER/ESTAR/FICAR |
| 10 | Mar 27 | Transport, directions | Movement prepositions (para, até, por) |
| 11 | Apr 7 | Shopping, prices, quantities | Comparative adjectives, numbers 100–1000, IR + infinitive |
| 12 | Apr 9 | Weather & seasons | Irregular verbs DAR/FAZER/PÔR/TRAZER, near future |
| 13 | Apr 21 | Clothing, styles, accessories | Temporal expressions HÁ/DESDE, indirect object pronouns, connectors |
| 15 | Apr 28 | Portuguese festivals & celebrations | Indefinite pronouns (alguém, ninguém, tudo, todos, nada, algo) |
| 16 | Apr 30 | Health, healthcare, lifestyle | Formal imperative (você form) |
| 17 | May 5 | Social events, invitations, digital messages | TÃO/TANTO, indefinite pronouns review |
| 18 | May 7 | Portuguese culture, social norms | Imperative revision, synonyms & antonyms |
| 19 | May 12 | Past events, travel, personal experiences | Pretérito Perfeito regular (-ar/-er/-ir), JÁ/AINDA/NUNCA |
| 21 | May 19 | Living abroad, adaptation, wellbeing | Pretérito Perfeito irregular (ser/ir/ter/fazer/vir/estar/poder/querer) |

### Deployment
GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. Vite base path is `/portuguese-app/`.

## Key Patterns

- Each session has a `color` and `accent` for its theme
- Vocabulary categories use colored `CategoryBadge` pills with filter buttons
- `VocabCard` uses CSS 3D flip transforms (front: word/IPA, back: example/tip)
- `speakPortuguese(text)` in `src/utils/speak.js` — uses Google Translate TTS (primary) with Web Speech API `pt-PT` as fallback
- Quiz questions mix vocabulary + grammar (grammar questions extracted from `grammar.exercises`)
- Grammar exercises are collapsible via a "Practice Exercises" toggle button

## Session JSON Style Guide

### Top-Level Structure
Every session JSON has: `id` (int), `title` (Portuguese, sentence case), `subtitle` (English, title case), `color` (hex), `accent` (hex), `icon` (emoji), `description` (one English sentence), `topics` (4–6 title-case tags), `vocabulary` (array), `grammar` (object).

### Vocabulary Item Fields
**Always present:** `word`, `translation`, `pronunciation`, `ipa`, `example`, `exampleTranslation`, `category`, `tip`
**Optional:** `youtubeQuery` (only in early sessions)

**Conventions:**
- Verbs listed in infinitive form; conjugation patterns in `tip`: `stem + o/as/a/amos/am: falo, falas...`
- Gendered pairs use slash: `"o/a médico/a"`, `"Obrigado / Obrigada"`
- Full sentences can be vocabulary items (e.g. `"Há um computador na sala."`)
- Categories are lowercase single words: `verbs`, `family`, `food`, `transport`, etc.

### Pronunciation Guide Format
- Syllables in CAPS separated by hyphens: `"oh-LAH"`, `"BOH-ah TAR-deh"`
- Stressed syllable in ALL CAPS: `"kah-TOR-zeh"`
- English-like approximations: `"sh"` for ch/xh, `"ny"` for nh, `"ly"` for lh
- Longer words: `"ah-pahr-tah-MEN-too"`, `"en-jen-YAY-roo"`

### IPA Format
- Enclosed in forward slashes: `"/oˈla/"`
- Stress marked with apostrophe before stressed syllable: `"/ɐˈtɛ/"`
- Multiple forms separated by double space: `"/obɾiˈɡadu/ / /obɾiˈɡadɐ/"`
- Nasal vowels with tilde: `/ɐ̃/, /ẽ/, /ĩ/, /õ/, /ũ/`

### Grammar Section Types
1. **`explanation`** — `heading` + `body` (1–4 paragraphs, conversational tone, uses numbered patterns like "(1)..., (2)...")
2. **`table`** — `heading` + `columns[]` + `rows[][]` (optional `caption`)
3. **`examples`** — `heading` + `items[]` each with `portuguese`, `translation`, `pronunciation`, `highlight[]` (3–5 items)
4. **`pronunciation`** — `heading` + `description` + `pairs[]` with `oral`/`nasal`/`note` (minimal pairs)
5. **`tips`** — heading is always `"Common Mistakes & Tips"` + `items[]` (4–8 full-sentence tips, often imperative: "Use...", "Don't forget...", "Remember...")

### Exercise Types
1. **`multiple-choice`** — `title` + `instructions` + `items[]` each with `question`, `options[4]`, `correct` (0-based index), `explanation`. Verb to conjugate in parentheses after question.
2. **`fill-in-blank`** — `title` + `instructions` + `items[]` each with `sentence` (blank as `__`), `answer`, `fullAnswer`, `hint`
3. **`sentence-builder`** — `title` + `instructions` + `items[]` each with `sentence` (blank as `___`), `blank` (correct answer), `wordBank[4]`, `hint`

**Exercise ordering:** multiple-choice → fill-in-blank → sentence-builder. Multiple exercises of same type allowed.

### Writing Style
- **Portuguese text:** proper diacritical marks (á, â, ã, ç, é, ê, ó, ô, ú), contractions (num, na, do, da, ao, à)
- **Dialogue:** em-dashes: `"— Obrigada! — De nada!"`
- **Examples:** use class member names (João, Ana, Miguel, Pedro, Patrícia, Mónica, Sofia, etc.)
- **Tips:** 1–2 sentences, often contrast correct vs. incorrect, include literal translations in parentheses, use ALL CAPS for emphasis: `NOT 'Sou vinte anos'`
- **Explanations:** conversational, encouraging, cross-reference English, use rhetorical questions
- **Explanations of rules:** restate correct answer, give full sentence, explain the rule (1–3 sentences)
- **European Portuguese specific:** note when a feature is EP-specific (e.g. final dark 'l', 'desh' for 'dez')

### Color/Accent Themes
Each session has a distinct dark `color` and lighter `accent`. Colors span the spectrum (green, blue, purple, orange). Sessions may share a base color but have different accents. Examples: `#2D6A4F`/`#52B788` (green), `#1B4965`/`#5FA8D3` (blue), `#6B2D8B`/`#C77DFF` (purple), `#8B3A0F`/`#F4A261` (orange).

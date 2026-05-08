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
```

Each vocabulary item has: `word`, `translation`, `pronunciation`, `ipa`, `example`, `exampleTranslation`, `category`, `youtubeQuery`, `tip`.

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

### Content status
Only 4 of 25 planned sessions are implemented. `courseInfo.totalSessions` is 25. The `language/A1/` directory contains PDF course materials (Sessions 1–5 + syllabus) that can inform content creation.

### Deployment
GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. Vite base path is `/portuguese-app/`.

## Key Patterns

- Each session has a `color` and `accent` for its theme
- Vocabulary categories use colored `CategoryBadge` pills with filter buttons
- `VocabCard` uses CSS 3D flip transforms (front: word/IPA, back: example/tip)
- `speakPortuguese(text)` uses `window.speechSynthesis` with `pt-PT` locale
- Quiz questions mix vocabulary + grammar (grammar questions extracted from `grammar.exercises`)
- Grammar exercises are collapsible via a "Practice Exercises" toggle button

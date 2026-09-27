# MediKiosk

"Complete your medical history before you meet your doctor."

MediKiosk is a frontend prototype of an AI-guided clinical history-taking
and medical-document digitization platform for hospital OPD kiosks.

This is a **frontend-only prototype**. All AI responses, voice transcription,
OCR, authentication and data submission are simulated with mock data —
there is no real backend, AI model, or ABDM integration.

## Tech stack

- React 18 (JavaScript, no TypeScript)
- React Router v6
- Plain CSS3 (CSS variables, Flexbox, Grid) — no Tailwind/Bootstrap/UI kits

## Getting started

```
npm install
npm start
```

Then open http://localhost:3000

## Production build

```
npm run build
```

## Project structure

```
src/
  components/   Reusable UI building blocks
  pages/        One file per route
  data/         Mock patients, questions, documents
  styles/       global.css (design tokens), components.css, pages.css
```

## Demo flow

Home → Language → Identify → Consent → Patient Dashboard → History Interview
→ Documents → Processing → Review → Summary → Complete
→ Doctor Login → Doctor Dashboard → Doctor Patient Review

## Safety note

MediKiosk never presents an autonomous diagnosis. All AI-generated content
is labeled as a draft requiring physician verification.

# PROJECT_CONTEXT.md — Mohammad Adnan Shakil Portfolio

## What This Project Is
A production-style developer portfolio built with React + Vite + Tailwind CSS to showcase full-stack engineering, backend architecture, and ML systems. Features a cyber-inspired animated UI, custom cursor, particle effects, F1-themed SVG animations, and detailed project deep-dives on Deltabox (AI F1 platform) and FakeOut AI (voice deepfake detection). Live at https://portfolio-p2jh.vercel.app/

## Current Status
- [x] Interactive hero with animated particles and custom cursor
- [x] Projects section with Deltabox (Suzuka Circuit SVG + telemetry animation) and FakeOut AI
- [x] Skills section organized by category (Frontend, Backend, ML/Data, Infrastructure)
- [x] Engineering Thinking section explaining Deltabox architecture decision (ProcessBuilder vs REST)
- [x] About section with current internship and education
- [x] Contact section with email and social links
- [x] Fully responsive with mobile hamburger menu
- [x] Deployed on Vercel
- [ ] TypeScript configured but all source files are .jsx (not .tsx)
- [ ] No backend — purely client-side

## Architecture Overview
- Frontend: React 19 (JSX), Vite 8, Tailwind CSS 3, TypeScript config (unused), Framer Motion 12
- Database: None
- Deployment: Vercel (static site)

## Key Files & Entry Points
- `index.html` — Entry HTML with meta tags, fonts, favicon
- `src/main.jsx` — React entry point
- `src/App.jsx` — Root component with all sections (Navbar, Hero, Projects, Skills, About, EngineeringThinking, Contact, Footer)
- `src/components/Hero.jsx` — Hero section with particle animation and stats
- `src/components/Projects.jsx` — Project cards with Deltabox/FakeOut AI deep-dives
- `src/components/EngineeringThinking.jsx` — Architecture decision explanations
- `src/hooks/useCustomCursor.js` — Custom cursor with lerp smoothing and hover detection
- `tailwind.config.js` — Tailwind config
- `vite.config.ts` — Vite config with sourcemaps and PostCSS

## Environment & Setup
- `npm install && npm run dev` — runs on default Vite port
- `npm run build` — builds to dist/
- No .env files needed (static site, no API keys)
- **Gotcha**: TypeScript is configured (tsconfig.json, tsconfig.app.json, tsconfig.node.json) but all components are .jsx — the `tsc -b` step in the build script will likely fail if any .ts files are added

## Where I Left Off
- Last thing: Updated portfolio content with current internship status (commit 05607e2)
- Next: Convert JSX components to TypeScript, add more projects, add backend integration
- Known: TypeScript config is unused (all .jsx files), no CI/CD beyond Vercel auto-deploy

## Git & Deployment
- Remote: unknown (no origin in git log)
- Branch: main
- Last commit: "Update portfolio content: reflect current internship status and project updates"

## Context for AI Assistants
- Custom cursor is implemented in useCustomCursor.js using requestAnimationFrame + lerp for smooth ring-follow — disabled on touch devices via media query
- Background uses CSS dot-grid pseudo-elements (two radial-gradient layers at 40px/60px spacing) + SVG noise filter overlay
- Google Fonts are loaded dynamically in App.jsx via useEffect (Syne for headings, JetBrains Mono for code) — this causes FOUT and should ideally be in index.html
- The Deltabox project card embeds Suzuka Circuit SVG with telemetry animation (moving dots + scan line) — this is an inline SVG component, not an image
- The EngineeringThinking section explicitly documents the ProcessBuilder vs REST microservice tradeoff — this is the highest-value architectural context
- All Tailwind v3 features used (not v4) with the standard PostCSS plugin approach
- The `.qodo/` directory at root is from the Qodo IDE extension — not part of the project

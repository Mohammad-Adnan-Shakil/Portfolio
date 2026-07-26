# Architecture

## Component Breakdown

### Hero Section
- **Role:** Landing page with particle network, typewriter text, animated stat counters, spotlight glow
- **Tech:** React + Framer Motion + Canvas API
- **Location:** src/components/Hero.jsx

### Projects Showcase
- **Role:** Featured project (Deltabox) with SVG circuit animation + 4 secondary project cards
- **Tech:** React + Framer Motion + SVG animation
- **Location:** src/components/Projects.jsx

### Engineering Thinking
- **Role:** Architecture diagram + terminal-style technical log with typewriter effect
- **Tech:** React + SVG + CSS animations
- **Location:** src/components/EngineeringThinking.jsx

### Custom Cursor
- **Role:** Dot + ring cursor with lerp tracking, hover states, touch device detection
- **Tech:** React hook with requestAnimationFrame
- **Location:** src/hooks/useCustomCursor.js

### Scroll Reveal
- **Role:** IntersectionObserver-based staggered entrance animations
- **Tech:** React hook
- **Location:** src/hooks/useScrollReveal.js

### Navigation
- **Role:** Fixed navbar with active section tracking, mobile hamburger menu, glass morphism
- **Tech:** React + Framer Motion
- **Location:** src/components/Navbar.jsx

## Key Architectural Decisions

### Decision 1: Pure Static Site over SSR/SSG
**What:** Client-side React SPA with Vite build, no server-side rendering
**Why:** Portfolio is content that doesn't change dynamically. Static deployment on Vercel is free, fast, and infinitely scalable.
**Tradeoff:** No SEO optimization beyond meta tags. No server-side data fetching.

### Decision 2: Custom Cursor over Browser Default
**What:** Two-element cursor (dot + ring) with lerp interpolation, hover state detection, touch device fallback
**Why:** Reinforces the cyber/tech brand identity. The dot-ring pattern with mix-blend-mode creates a distinctive visual signature.
**Tradeoff:** Potential accessibility issues. Must respect prefers-reduced-motion and touch device detection.

### Decision 3: Canvas Particles over CSS/Lottie
**What:** 60-particle network with mouse interaction physics implemented via Canvas 2D API
**Why:** Canvas provides full control over particle behavior (repulsion, connection lines, speed). More performant than DOM-based alternatives for 60+ animated elements.
**Tradeoff:** No declarative animation. More code than Lottie.

### Decision 4: TypeScript Config without TypeScript Source
**What:** tsconfig files configured (strict mode) but all source is .jsx with allowJs: true
**Why:** Scaffolded for future TypeScript migration. The tsc -b build step runs but does no type checking.
**Tradeoff:** False sense of type safety. Build may pass despite type errors.

## Data Flow
Single page application — no backend, no API calls. All data is static content in components. Smooth scroll navigation via react-scroll links to section IDs. IntersectionObserver triggers entrance animations on scroll.

## Known Limitations
- TypeScript config unused (all source files are .jsx)
- No backend or dynamic content
- Google Fonts may cause FOUT on slow connections
- Custom cursor disabled on touch devices

## Future Considerations
- Convert JSX to TypeScript
- Add backend integration for dynamic content (blog, analytics)
- Add more project entries with detailed case studies

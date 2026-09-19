# The Annotated Portfolio

> *“The finished work is only half the story. The interesting part is how I got there.”*

A personal portfolio built as a field journal crossed with a contemporary design exhibition. Instead of generic AI portfolio aesthetics (neon gradients, glowing cards, glassmorphism, floating skill spheres, or fake terminal windows), this website is built with strict typographic discipline, generous whitespace, asymmetric curatorial grids, and an interactive **“Show my thinking”** annotation layer.

---

## The Signature Interaction: "Show My Thinking"

In the header masthead, the **“Show my thinking”** toggle shifts the site between two modes:
1. **Editorial Mode (OFF):** A clean, restrained gallery exhibition suitable for evaluators seeking a polished overview.
2. **Field Journal Mode (ON):** Reveals curatorial marginalia beside projects, design decisions, and tradeoffs.

On wide viewports, notes render in dedicated margins with fine ruled connector lines. On mobile viewports, notes flow inline directly below each respective decision or exhibit. State is remembered via `localStorage` and adheres to `prefers-reduced-motion`.

---

## Visual Direction & Design Tokens

- **Palette:**
  - Background: Warm Ivory (`#F5F1E8`)
  - Ink Primary: Near-Black Ink (`#24231F` — 14.6:1 AAA contrast)
  - Ink Secondary / Labels: Muted Grey (`#5E5B54` / `#78746B`)
  - Curatorial Accent: Restrained Rust-Red (`#A43D2D` — 5.3:1 contrast)
  - Subtle Paper Texture: Ultra-lightweight SVG procedural noise overlay
- **Typography:**
  - Display / Headlines: *Cormorant Garamond* (Serif)
  - Body & Controls: *Manrope* (Sans-serif)
  - Exhibits & Marginalia: *IBM Plex Mono* (Monospace)
- **Grid & Layout:**
  - Asymmetric editorial proportions
  - Fluid type scale via `clamp()`
  - Reading constraint of 60–70 characters per line
  - WCAG 2.1 Level AA/AAA compliance with visible keyboard focus rings and skip-to-content link

---

## How to Run the Project

### Prerequisites
- Node.js LTS (v18 or higher) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates a zero-dependency static production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Personalizing Content for Your College Assignment

All content across the entire portfolio is centralized in a single configuration file:
👉 **[`src/data/portfolioData.ts`](file:///c:/Users/hp/Desktop/Portfolio/src/data/portfolioData.ts)**

### Step 1: Update Your Personal Details
Open `src/data/portfolioData.ts` and replace the placeholder fields:
- `name`: Your full name
- `monogram`: Your two-letter initials
- `discipline`: Your course, major, or area of focus
- `oneSentenceIntro`: A plainspoken one-sentence summary
- `email`: Your real email address
- `github` / `linkedin`: Your profile URLs
- `extendedBio`: Paragraphs for the "A little context" section
- `capabilities`: Concrete activities you perform (no arbitrary percentage bars)
- `learningInterests`: Topics you are currently researching
- `memorableDetail`: A grounded detail beyond your course title

### Step 2: Replace Sample Demonstration Exhibits
The site includes three demonstration exhibits:
1. **Exhibit 01 (Lexicon):** Typography & Information Architecture
2. **Exhibit 02 (Kinetic Field Guide):** Environmental Data Interface
3. **Exhibit 03 (Archive & Specimen):** Archival Cataloging System

To add your own projects:
1. Edit the `exhibits` array in `src/data/portfolioData.ts`.
2. Fill in:
   - Title, category, timeframe, short description, your contribution, and tools.
   - `exhibitAnnotation`: A key tradeoff or observation for the "Show my thinking" layer.
   - `caseStudy`: Complete documentation including Problem, Constraints, Approach, Key Design Decision, Outcome, and Reflection.
3. Once your real information is configured, set `isPlaceholderData: false` at the bottom of `src/data/portfolioData.ts` to hide the template setup banner.

---

## Deployment & Routing

The project uses hash-based client routing (`#/project/exhibit-01`) and relative asset paths (`base: './'`). This ensures:
- **Zero 404 Rewrite Issues:** Runs out of the box on GitHub Pages, Netlify, Vercel, or any standard static file server without special server rewrite configuration.
- **Direct Addressability:** Case study URLs can be directly bookmarked or shared.

### Deploying to GitHub Pages
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist/` directory to your `gh-pages` branch.

---

## Project Structure

```
Portfolio/
├── index.html                   # HTML5 entry with fonts, SEO & theme color
├── package.json                 # React, TypeScript, Vite & dependencies
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite bundler configuration (relative base './')
├── dist/                        # Optimized production build
├── public/
│   └── favicon.svg              # Typographic monogram SVG favicon
└── src/
    ├── main.tsx                 # Root React DOM mount
    ├── App.tsx                  # App layout, thinking mode state, hash routing
    ├── index.css                # CSS custom properties, typography & fluid scales
    ├── types/
    │   └── portfolio.ts         # TypeScript interfaces
    ├── data/
    │   └── portfolioData.ts     # SINGLE SOURCE OF TRUTH for all site copy
    └── components/
        ├── Header.tsx           # Masthead with thinking toggle switch
        ├── HeroSpread.tsx       # Magazine opening spread & typographic monogram
        ├── ExhibitSequence.tsx  # Editorial project sequence container
        ├── ExhibitItem.tsx      # Individual alternating exhibit layout
        ├── AnnotationBadge.tsx  # Field journal process note component
        ├── CaseStudyView.tsx    # Addressable case study page
        ├── AboutSection.tsx     # Bio, concrete capabilities, learning topics
        ├── ContactSection.tsx   # Copy email with toast, social verification
        ├── FooterColophon.tsx   # Typography colophon & palette chips
        └── diagrams/            # Pure local SVG/CSS vector previews
            ├── LexiconDiagram.tsx
            ├── KineticFieldDiagram.tsx
            └── SpecimenDiagram.tsx
```

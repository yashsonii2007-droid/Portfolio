import { ProfileData, Exhibit } from '../types/portfolio';

/**
 * ============================================================================
 * EDITABLE PORTFOLIO CONFIGURATION & DATA SOURCE
 * ============================================================================
 * This file is the single source of truth for all personal details, exhibits,
 * annotations, and case study documentation on your website.
 * 
 * To personalize this website for your college submission:
 * 1. Update the fields below marked with "[YOUR ...]" placeholders.
 * 2. Replace the demonstration exhibits in `exhibits` with your real projects.
 * 3. Set `isPlaceholderData: false` when your real content is in place.
 */

export const profileData: ProfileData = {
  // Replace with your real name
  name: "[YOUR NAME]",
  
  // Two-letter monogram or initials displayed in masthead & colophon
  monogram: "YN",

  // Your degree, specialization, or primary creative discipline
  discipline: "[YOUR COURSE / INTEREST]",

  // Single plainspoken sentence explaining who you are and what you care about
  oneSentenceIntro: "[ONE SENTENCE ABOUT YOU — e.g. A digital designer and frontend student focusing on deliberate typography, accessible user interfaces, and information clarity.]",

  // Opening spread headline (Curious by nature / Deliberate by design)
  editorialHeadline: {
    line1: "Curious by nature.",
    line2: "Deliberate by design.",
  },

  // Contact & Social Links
  email: "[YOUR EMAIL]",
  github: "[YOUR GITHUB LINK]",
  linkedin: "[YOUR LINKEDIN LINK]",

  // Editorial Bio ("A little context" section)
  extendedBio: [
    "I am currently studying [YOUR COURSE / DEGREE], exploring the convergence of structural typography, interaction systems, and resilient frontend code. My focus is on creating web interfaces that treat content with the dignity of print while leveraging the dynamic affordances of the browser.",
    "Rather than treating interface design as cosmetic decoration, I approach each layout as an editorial problem: how to establish clear visual hierarchy, guide reading attention, and make complex ideas immediately approachable without needless cognitive friction."
  ],

  // Concrete Capabilities (described through actual activities, no fake percentage bars!)
  capabilities: [
    {
      title: "Information Architecture & Layout",
      activity: "Designing modular editorial grids, hierarchy models, typographic scales, and fluid content systems."
    },
    {
      title: "Accessible Frontend Engineering",
      activity: "Building semantic, keyboard-navigable components compliant with WCAG 2.1 AA/AAA standards and responsive viewports."
    },
    {
      title: "Design Systems & Component Documentation",
      activity: "Defining repeatable design tokens, state variants, CSS custom property architectures, and interaction guidelines."
    },
    {
      title: "Prototyping & Usability Evaluation",
      activity: "Creating rapid functional prototypes in code to test user flows, observe points of confusion, and refine navigation."
    }
  ],

  // Current learning interests & active research topics
  learningInterests: [
    {
      topic: "Variable Fonts & Fluid Typographic Rhythm",
      note: "Investigating how optical sizing axes and CSS clamp() can improve long-form reading on ultra-wide and compact screens alike."
    },
    {
      topic: "Accessible State Management in Headless UI",
      note: "Studying ARIA live regions, focus trapping conventions, and keyboard navigation patterns for complex web documents."
    },
    {
      topic: "Low-Bandwidth, High-Fidelity SVG Interfaces",
      note: "Exploring procedural vector graphics to replace heavy raster imagery without sacrificing graphic richness."
    }
  ],

  // Memorable personal detail (grounded, authentic, non-inflated)
  memorableDetail: "Beyond the code editor: I collect vintage field observation guides, practice analog linocut printmaking, and keep a handwritten notebook of curious interface details encountered in daily life.",

  // Flag to display subtle editorial setup hints until personalized
  isPlaceholderData: true,
};

export const exhibits: Exhibit[] = [
  {
    id: "exhibit-01",
    number: "01",
    title: "Lexicon",
    category: "Typography & Information Architecture",
    timeframe: "Semester Project (Sample Entry)",
    shortDescription: "An editorial reading interface engineered for dense reference documentation, featuring fluid proportional type scales, high-contrast hierarchical markers, and accessible marginalia.",
    contribution: "Information architecture, fluid type system, interface prototyping",
    tools: ["Vanilla CSS", "React", "TypeScript", "WCAG Contrast Analysis"],
    diagramType: "lexicon",
    exhibitAnnotation: {
      id: "lexicon-note-1",
      category: "observation",
      tag: "OBSERVATION // 01",
      title: "Scale Harmony Across Breakpoints",
      note: "We tested five modular scales. A classic 1.200 (minor third) preserved vertical rhythm far better across mobile viewports than 1.250 (major third), which caused headline wraps that broke reading continuity."
    },
    caseStudy: {
      summary: "A rigorous exploration of how digital technical documentation can adopt the clarity and typographic hierarchy of high-end editorial book design without sacrificing responsive ergonomics.",
      problem: "Technical documentation often suffers from two extremes: either sprawling generic card layouts that bury hierarchy, or cramped monospace directories that strain reader stamina over sustained sessions.",
      constraints: [
        "Zero external CSS frameworks; must use pure CSS custom properties for instant load.",
        "Strict compliance with WCAG 2.1 Level AAA contrast for primary reading text (14:1+).",
        "Target optimal line-length between 60 to 70 characters per line across all viewport widths."
      ],
      approach: "We began by analyzing classical book typography—specifically Jan Tschichold's canon of proportions and field manual page compositions. Translating this to responsive web viewports led to an asymmetric grid where navigational metadata sits quietly in an index column, leaving the reading column unencumbered.",
      keyDecision: {
        title: "Eliminating Multi-Level Dropdowns for Persistent Index Rail",
        context: "Initial wireframes featured nested dropdown navigation to conserve horizontal space.",
        tradeoff: "Dropdowns reduced initial screen clutter, but user task walkthroughs proved that participants lost track of their location within the documentation taxonomy after two levels of depth.",
        resolution: "Replaced the hidden dropdowns with a slim, persistent secondary index rail that highlights active scroll position using IntersectionObserver, reducing cognitive re-orientation time."
      },
      outcome: {
        status: "Demonstration Project",
        qualitativeResult: "In comparative usability walkthroughs with four peer participants, readers located specific syntax definitions without navigating back to a top-level directory. Line length stayed within 62–68 characters across test screens.",
        isDemonstrationNote: true
      },
      reflection: "Designing for density is fundamentally an exercise in discipline. White space and typographic contrast do far more work to organize information than colored background containers or decorative dividers.",
      annotations: [
        {
          id: "cs-lex-1",
          category: "tradeoff",
          tag: "TRADE-OFF // NOTE",
          title: "System Font vs Custom Webfonts",
          note: "We limited custom webfonts to exactly three carefully chosen weights to guarantee under-200ms first paint on mobile 4G networks."
        },
        {
          id: "cs-lex-2",
          category: "decision",
          tag: "REVISION // NOTE",
          title: "Anchor Links with Direct Clipboard Copy",
          note: "Added discrete section anchor links that copy direct deep-links without jumping the viewport, supporting seamless academic citations."
        }
      ]
    }
  },
  {
    id: "exhibit-02",
    number: "02",
    title: "Kinetic Field Guide",
    category: "Environmental Data Interface",
    timeframe: "Studio Experiment (Sample Entry)",
    shortDescription: "A responsive observation console presenting environmental acoustic monitoring data, microclimate telemetry, and field notes with zero latency and native vector rendering.",
    contribution: "Interaction modeling, SVG vector data visualization, state coordination",
    tools: ["SVG Architecture", "TypeScript", "CSS Grid", "Web Audio API"],
    diagramType: "kinetic",
    exhibitAnnotation: {
      id: "kinetic-note-1",
      category: "tradeoff",
      tag: "TRADE-OFF // NOTE",
      title: "Pure SVG vs WebGL Canvas",
      note: "Chose pure SVG vector paths over WebGL. While WebGL renders more raw points, SVG maintained pin-sharp lines on high-DPI displays, supported native CSS styling, and cut overall bundle weight by 88%."
    },
    caseStudy: {
      summary: "An interactive dashboard concept inspired by botanical field surveys, translating complex temporal sensor telemetry into intuitive, legible graphical contours.",
      problem: "Traditional telemetry dashboards are crowded with neon dial gauges, glowing graphs, and visual noise that make identifying quiet environmental anomalies exhausting for field researchers.",
      constraints: [
        "Lightweight payload to allow operation over intermittent mobile hotspot connections.",
        "Monochrome-first palette with rust-red accent reserved strictly for threshold anomalies.",
        "Maintain accessible tabular fallbacks for all visual vector charts."
      ],
      approach: "Designed a multi-pane layout structured like an unfolded naturalist notebook. Raw numeric telemetry is paired immediately with human-readable textual observations, grounding abstract metrics in tangible physical reality.",
      keyDecision: {
        title: "Dual Representation: Topographic Contour vs Data Table",
        context: "Researchers need both high-level pattern recognition and exact numerical verification.",
        tradeoff: "A purely visual chart hides specific values, while a pure table obscures temporal waves.",
        resolution: "Created an integrated dual-mode panel that synchronizes hover states between the SVG contour lines and an adjacent tabular log, allowing instant verification without toggling modes."
      },
      outcome: {
        status: "Demonstration Project",
        qualitativeResult: "The lightweight vector-based layout achieved a 99/100 Lighthouse performance rating with zero layout shifts. Vector contours remained tack-sharp across 4K displays and compact phone viewports.",
        isDemonstrationNote: true
      },
      reflection: "Data visualization is most effective when it resists the urge to show everything at once. Restraint in color and motion allows the actual signal to speak with authority.",
      annotations: [
        {
          id: "cs-kin-1",
          category: "iteration",
          tag: "ITERATION // NOTE",
          title: "Smoothing Waveform Interpolation",
          note: "Early tests used linear polygonal lines that felt harsh. Quadratic Bezier smoothing reduced visual tension without compromising data integrity."
        }
      ]
    }
  },
  {
    id: "exhibit-03",
    number: "03",
    title: "Archive & Specimen",
    category: "Digital Taxonomy & Archival Browser",
    timeframe: "Research Workshop (Sample Entry)",
    shortDescription: "An archival cataloging system built around multi-attribute filtering, physical specimen indexing metadata, and instant cross-referencing without jarring modal windows.",
    contribution: "Taxonomy schema, keyboard navigation pattern, component architecture",
    tools: ["React", "TypeScript", "ARIA Live", "Local Storage"],
    diagramType: "specimen",
    exhibitAnnotation: {
      id: "specimen-note-1",
      category: "decision",
      tag: "REVISION // 03",
      title: "Replacing Modal Dialogs with Split Pane",
      note: "User walkthroughs showed researchers lost their sense of catalog context when details opened in modal windows. Replacing modals with a contiguous split pane improved comparison speed significantly."
    },
    caseStudy: {
      summary: "A digital specimen catalog that honors the systematic precision of archival museum collections while delivering fast, frictionless digital exploration.",
      problem: "Online archival repositories frequently hide crucial provenance metadata behind convoluted tab systems, making comparative study between adjacent specimens tedious.",
      constraints: [
        "Keyboard-first navigation model (tab, arrow keys, and shortcuts for quick catalog browsing).",
        "Preserve persistent URL state so any filtered view or specimen can be shared with an exact URL hash.",
        "Zero artificial loading skeletons or simulated delay."
      ],
      approach: "We drew inspiration from classic card catalog drawers and physical museum drawers. Each digital entry receives a distinct curatorial accession number, physical dimension specs, and material provenance displayed in a clean tabular grid.",
      keyDecision: {
        title: "Context-Preserving Split-Pane Inspector",
        context: "Users frequently need to cross-check traits across multiple specimens simultaneously.",
        tradeoff: "A full-page detail view provides more space, but breaks the browsing rhythm.",
        resolution: "Implemented a non-destructive sliding inspection pane that docks alongside the primary catalog grid, maintaining active focus and scroll position in the master index."
      },
      outcome: {
        status: "Demonstration Project",
        qualitativeResult: "Full keyboard accessibility verified through manual tab-order audits. Testers completed specimen verification tasks smoothly without requiring pointer interaction.",
        isDemonstrationNote: true
      },
      reflection: "Respecting user focus and spatial orientation creates a sense of digital calmness. When the interface behaves predictably, users can immerse themselves in the material.",
      annotations: [
        {
          id: "cs-spec-1",
          category: "lesson",
          tag: "LESSON // NOTE",
          title: "Explicit Filter Counters",
          note: "Adding explicit active filter count badges prevented users from wondering why a specific query returned zero results."
        }
      ]
    }
  }
];

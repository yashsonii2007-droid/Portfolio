import { ProfileData, Exhibit } from '../types/portfolio';

/**
 * ============================================================================
 * YASH SONI — THE ANNOTATED PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * Central source of truth for Yash Soni's identity, connected disciplines,
 * selected project explorations, process annotations, and contact channels.
 * 
 * TO PERSONALIZE FOR FINAL SUBMISSION:
 * 1. Review or update the placeholders below (Education, Contact links, Learning).
 * 2. Replace the 3 sample concept exhibits with your own real coursework projects.
 * 3. Set `isPlaceholderData: false` when your real content is in place.
 */

export const profileData: ProfileData = {
  name: "Yash Soni",
  monogram: "YS",

  // 5 connected disciplines
  specializations: [
    "AI/ML Engineer",
    "Web Designer",
    "UI/UX Designer",
    "Web Developer",
    "Data Scientist"
  ],

  // Core positioning statement
  corePositioning: "I connect intelligence, design, and development.",

  // Short introduction
  shortIntro: "I’m Yash Soni—exploring the intersection of AI, data, and digital experiences. My focus spans machine learning, web development, and thoughtful interface design.",

  // Primary editorial headline for hero spread
  editorialHeadline: {
    line1: "Intelligence, built.",
    line2: "Experiences, designed.",
  },

  // About section lead copy
  aboutLead: "My interests sit where technical problem-solving meets visual clarity. I’m exploring how machine learning and data can inform useful products, and how design and development can make those products easier to understand and use.",

  // Three connected capability areas
  capabilityPillars: [
    {
      pillar: "Intelligence",
      disciplines: "AI/ML Engineering & Data Science",
      description: "Investigating model behavior, evaluation rigor, uncertainty estimation, and interpretable outputs rather than opaque probability scores.",
      focusAreas: [
        "Model behavior & evaluation criteria",
        "Feature attribution & explainable AI",
        "Data hygiene, distributions & assumption testing"
      ]
    },
    {
      pillar: "Experience",
      disciplines: "UI/UX Design & Web Design",
      description: "Crafting structured, accessible interfaces where deliberate hierarchy, typographic scales, and cognitive restraint guide user attention.",
      focusAreas: [
        "Information hierarchy & reading ergonomics",
        "Progressive disclosure & workflow simplification",
        "Accessible contrast (WCAG AAA) & fluid typography"
      ]
    },
    {
      pillar: "Implementation",
      disciplines: "Web Development",
      description: "Translating design intent into resilient, performant frontend code with zero unnecessary dependencies, clean state, and native accessibility.",
      focusAreas: [
        "Component structure & predictable state flows",
        "Keyboard traversal, ARIA roles & screen-reader parity",
        "Fluid responsiveness & lightweight vector rendering"
      ]
    }
  ],

  // Editable Placeholders: What I'm learning now
  learningNow: [
    {
      title: "Model Interpretability Interfaces",
      description: "[Editable: Studying SHAP/LIME visualization patterns and how to communicate confidence intervals to non-technical users.]"
    },
    {
      title: "Design Tokens & Fluid CSS Architecture",
      description: "[Editable: Exploring CSS clamp() math and proportional modular scales for seamless cross-viewport rhythm.]"
    },
    {
      title: "Accessible Headless Components",
      description: "[Editable: Deepening understanding of ARIA live regions and keyboard focus management in single-page apps.]"
    }
  ],

  // Editable Placeholder: Personal interest outside technology
  personalInterest: "[Personal Interest Placeholder — e.g. Outside technology, I am drawn to architectural sketching, analog photography, and studying how physical museum exhibits curate historical narratives.]",

  // Editable Placeholder: Education details
  educationDetails: "[Education Placeholder — e.g. Undergraduate Student in Computer Science / Artificial Intelligence, coursework spanning Machine Learning, Algorithms, Human-Computer Interaction, and Modern Web Systems.]",

  // Contact Channels (Leave empty or update with your verified URLs; links only activate when filled)
  email: "", // e.g. "yashsoni@example.com" — when set, "Copy email" and mailto activate
  github: "", // e.g. "https://github.com/yashsoni" — when set, GitHub button activates
  linkedin: "", // e.g. "https://linkedin.com/in/yashsoni" — when set, LinkedIn button activates
  resumeUrl: "", // e.g. "/resume.pdf" — when set, Résumé button activates

  // Student setup mode banner flag
  isPlaceholderData: true,
};

/**
 * ============================================================================
 * SELECTED WORK EXHIBITS (SAMPLE CONCEPTS)
 * ============================================================================
 * These 3 exhibits are authored as honest, illustrative sample concepts.
 * They demonstrate editorial sequencing, vector schematics, and case-study depth.
 * Display "Sample concept — replace with your project" on each one.
 */
export const exhibits: Exhibit[] = [
  {
    id: "signal",
    number: "01",
    title: "Signal",
    discipline: "AI/ML & Data Science",
    conceptBadge: "Sample concept — replace with your project",
    briefProblem: "Exploring how machine learning model predictions and confidence distributions can be explained through a readable, transparent interface rather than opaque probability scores.",
    contribution: "Model interpretability framing, uncertainty visualization, explainable UI prototyping [Sample Contribution — Replace with yours]",
    tools: ["Python", "Feature Attribution", "SVG Vectors", "React", "TypeScript"],
    diagramType: "signal",
    exhibitAnnotation: {
      id: "signal-note-1",
      category: "observation",
      discipline: "ai-ml",
      tag: "AI/ML PROCESS NOTE // 01",
      title: "Communicating Uncertainty Over False Certainty",
      note: "Example process note: A prediction needs context; the interface should communicate uncertainty and confidence intervals rather than imply false certainty.",
      isExampleNote: true,
    },
    caseStudy: {
      summary: "An explainable artificial intelligence interface concept designed to translate statistical inference into intuitive, accountable visual explanations for human reviewers.",
      problem: "Complex machine learning classifiers commonly present predictions as solitary decimal percentages (e.g. '87.4% Match'). This opaque format conceals prediction variance, ignores borderline classifications, and invites blind trust or unwarranted skepticism.",
      constraints: [
        "Interface must remain comprehensible to domain specialists without formal machine learning training.",
        "Must highlight primary driving features without overwhelming reviewers with raw multi-dimensional weight matrices.",
        "Visual indicators must adhere to high-contrast monochrome and rust-red accents, avoiding generic green/red color reliance."
      ],
      approach: "We structured the inspection surface into two synchronized tiers: an upper prediction band showing the confidence interval distribution curve, and a lower feature-attribution waterfall detailing the top positive and negative factors influencing the output.",
      keyDecision: {
        title: "Displaying Confidence Interval Bands Instead of Point Estimates",
        context: "Early wireframes presented only the top-level classification label and a single bar indicator.",
        tradeoff: "A single bar is easier to parse in two seconds, but completely obscures model uncertainty on borderline test inputs.",
        resolution: "Replaced the single bar with a 95% confidence distribution curve and a rust-red threshold marker, allowing human reviewers to immediately gauge classification ambiguity."
      },
      outcome: {
        status: "Demonstration Concept",
        qualitativeResult: "In structured walkthroughs with three student reviewers, participants correctly identified ambiguous predictions 50% faster than with conventional raw scores. (Illustrative sample observation — replace with your project evaluation).",
        isDemonstrationNote: true,
      },
      reflection: "Model interpretability is fundamentally an interface design challenge as much as an algorithmic one. Transparent presentation of uncertainty builds resilient human-machine trust.",
      annotations: [
        {
          id: "cs-signal-1",
          category: "tradeoff",
          discipline: "data-science",
          tag: "DATA SCIENCE NOTE",
          title: "Feature Independence Assumptions",
          note: "Example process note: Displaying top contributing features individually simplifies communication, but risks masking multi-collinear feature interactions. A footnote clarifies correlated inputs.",
          isExampleNote: true,
        },
        {
          id: "cs-signal-2",
          category: "decision",
          discipline: "web-design",
          tag: "INTERFACE NOTE",
          title: "Calibrated Monochrome Palette",
          note: "Example process note: Kept data visualization elements strictly within ink `#24231F` and ivory `#FAF7F2`, reserving the rust-red accent `#A43D2D` exclusively for outlier anomalies.",
          isExampleNote: true,
        }
      ]
    }
  },
  {
    id: "form-and-flow",
    number: "02",
    title: "Form & Flow",
    discipline: "UI/UX & Web Design",
    conceptBadge: "Sample concept — replace with your project",
    briefProblem: "A UI/UX concept exploring a simpler, stress-free student-facing digital enrollment and academic progression experience through deliberate typography, cognitive load reduction, and linear progression.",
    contribution: "User journey mapping, typographic scale, component design system [Sample Contribution — Replace with yours]",
    tools: ["Figma", "Vanilla CSS", "Component Tokens", "WCAG 2.1 AAA"],
    diagramType: "form-flow",
    exhibitAnnotation: {
      id: "form-note-1",
      category: "decision",
      discipline: "ui-ux",
      tag: "UI/UX PROCESS NOTE // 02",
      title: "Progressive Disclosure Over Form Density",
      note: "Example process note: Breaking dense academic prerequisites into single-focus stages reduced cognitive anxiety and prevented navigation dead ends.",
      isExampleNote: true,
    },
    caseStudy: {
      summary: "A human-centered student enrollment interface that replaces overwhelming multi-column registration portals with a calm, progressive editorial experience.",
      problem: "Traditional academic course selection systems crowd schedules, degree prerequisites, tuition holds, and elective requirements onto a single sprawling grid, creating intense cognitive friction and missed graduation milestones.",
      constraints: [
        "Must operate flawlessly on small mobile viewports (375px) where students frequently perform quick schedule checks.",
        "Zero reliance on nested modal popups that disorient users or break the browser back-button flow.",
        "Strict compliance with WCAG AAA contrast to support prolonged reading sessions in low-light study environments."
      ],
      approach: "We adopted an editorial magazine pacing: students navigate their academic trajectory in three clearly delineated chapters (Foundation Requirements, Major Electives, Schedule Balance). Each selection updates a persistent, non-intrusive progress rail.",
      keyDecision: {
        title: "Step-wise Progressive Disclosure vs All-in-One Form",
        context: "Stakeholders originally favored displaying all 12 academic fields simultaneously to reduce total page clicks.",
        tradeoff: "Fewer clicks meant every student confronted dense warning messages and prerequisites they were not yet eligible for.",
        resolution: "Implemented a focused, step-wise disclosure model with an accessible keyboard timeline, reducing visual clutter while retaining instant jump navigation to any completed section."
      },
      outcome: {
        status: "Demonstration Concept",
        qualitativeResult: "Simulated task testing revealed zero misaligned prerequisite submissions among peer participants. (Illustrative sample observation — replace with your project evaluation).",
        isDemonstrationNote: true,
      },
      reflection: "Good interface design is often about what you choose to remove. Quiet typographic hierarchy does more to comfort an anxious student than any number of colorful badges.",
      annotations: [
        {
          id: "cs-flow-1",
          category: "observation",
          discipline: "web-design",
          tag: "TYPOGRAPHY NOTE",
          title: "Modular Typographic Scale 1.200",
          note: "Example process note: Used a minor third ratio to ensure chapter headings, field labels, and helper notes establish clear visual priority without jarring size jumps.",
          isExampleNote: true,
        },
        {
          id: "cs-flow-2",
          category: "lesson",
          discipline: "ui-ux",
          tag: "ACCESSIBILITY NOTE",
          title: "Touch Target Ergonomics",
          note: "Example process note: Every interactive checkbox, step indicator, and action button enforces a minimum 44×44px hit area to ensure comfortable one-handed mobile use.",
          isExampleNote: true,
        }
      ]
    }
  },
  {
    id: "common-ground",
    number: "03",
    title: "Common Ground",
    discipline: "Web Development",
    conceptBadge: "Sample concept — replace with your project",
    briefProblem: "A web development architecture concept for discovering and organising student campus events with zero external framework dependencies, lightweight DOM updates, and offline-first state synchronization.",
    contribution: "Frontend architecture, state synchronization, keyboard navigation matrix [Sample Contribution — Replace with yours]",
    tools: ["React", "TypeScript", "Local Storage", "CSS Grid", "Keyboard Navigation"],
    diagramType: "common-ground",
    exhibitAnnotation: {
      id: "ground-note-1",
      category: "tradeoff",
      discipline: "web-dev",
      tag: "WEB DEV PROCESS NOTE // 03",
      title: "Virtual Timelines & Native Keyboard Matrix",
      note: "Example process note: Prioritised semantic keyboard traversal and native grid alignment over bulky third-party calendar plugins.",
      isExampleNote: true,
    },
    caseStudy: {
      summary: "A high-performance student event directory and scheduling application engineered with pure CSS Grid, deterministic URL-hash state, and zero third-party bundle bloat.",
      problem: "Campus community websites often rely on bloated third-party calendar libraries (400KB+ JS) that load sluggishly on spotty campus Wi-Fi, trap keyboard focus, and fail basic screen reader audits.",
      constraints: [
        "Total JavaScript bundle budget strictly under 50KB gzip for instantaneous first paint.",
        "Zero external UI component dependencies; all layout and state management built from first principles.",
        "Full keyboard accessibility: arrow keys navigate the event timeline; Escape key safely returns focus to the date filter."
      ],
      approach: "We architected an asymmetric calendar timeline based on native CSS Grid tracks and an accessible two-dimensional keyboard roving tabindex. State is synced bidirectionally with URL hash parameters for effortless student sharing.",
      keyDecision: {
        title: "Zero-Dependency Virtual Grid vs External Calendar Library",
        context: "Prebuilt calendar libraries provide quick drag-and-drop out of the box, but introduce severe DOM overhead.",
        tradeoff: "Building a custom grid required writing explicit keyboard roving tabindex handlers and ARIA grid role semantics.",
        resolution: "Built a bespoke lightweight calendar matrix in native CSS Grid and TypeScript. Total script weight was reduced by 91% while achieving 100% WCAG keyboard compliance."
      },
      outcome: {
        status: "Demonstration Concept",
        qualitativeResult: "Audit achieved 100/100 Lighthouse performance and accessibility scores, rendering schedule updates in under 4 milliseconds. (Illustrative sample observation — replace with your project evaluation).",
        isDemonstrationNote: true,
      },
      reflection: "Investing the effort to build with platform primitives pays compounding dividends in speed, longevity, and accessibility.",
      annotations: [
        {
          id: "cs-ground-1",
          category: "iteration",
          discipline: "web-dev",
          tag: "PERFORMANCE NOTE",
          title: "URL-Hash State Serialization",
          note: "Example process note: Encoding active filters and selected date ranges into standard URL hashes enables instant bookmarking without server-side session dependencies.",
          isExampleNote: true,
        },
        {
          id: "cs-ground-2",
          category: "decision",
          discipline: "web-dev",
          tag: "ACCESSIBILITY NOTE",
          title: "Roving Tabindex Keyboard Navigation",
          note: "Example process note: Users traverse chronological event cards with Left/Right and Up/Down arrow keys, preventing repetitive tab presses across busy schedule days.",
          isExampleNote: true,
        }
      ]
    }
  }
];

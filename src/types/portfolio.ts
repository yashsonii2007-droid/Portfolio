export type DisciplineArea = 'ai-ml' | 'data-science' | 'ui-ux' | 'web-design' | 'web-dev';

export type AnnotationCategory = 
  | 'observation' 
  | 'tradeoff' 
  | 'decision' 
  | 'iteration' 
  | 'lesson';

export interface Annotation {
  id: string;
  category: AnnotationCategory;
  discipline: DisciplineArea;
  tag: string; // e.g., "AI/ML PROCESS NOTE // 01"
  title: string;
  note: string;
  isExampleNote?: boolean;
}

export interface CapabilityArea {
  pillar: string; // e.g. "Intelligence", "Experience", "Implementation"
  disciplines: string; // e.g. "AI/ML Engineering & Data Science"
  description: string;
  focusAreas: string[];
}

export interface LearningItem {
  title: string;
  description: string;
}

export interface CaseStudyDecision {
  title: string;
  context: string;
  tradeoff: string;
  resolution: string;
}

export interface CaseStudyOutcome {
  status: string;
  qualitativeResult: string;
  isDemonstrationNote: boolean;
}

export interface CaseStudyData {
  summary: string;
  problem: string;
  constraints: string[];
  approach: string;
  keyDecision: CaseStudyDecision;
  outcome: CaseStudyOutcome;
  reflection: string;
  annotations: Annotation[];
}

export interface Exhibit {
  id: string;
  number: string; // "01", "02", "03"
  title: string;
  discipline: string; // e.g., "AI/ML & Data Science"
  conceptBadge: string; // "Sample concept — replace with your project"
  briefProblem: string;
  contribution: string; // editable placeholder
  tools: string[];
  diagramType: 'signal' | 'form-flow' | 'common-ground';
  exhibitAnnotation: Annotation;
  caseStudy: CaseStudyData;
}

export interface ProfileData {
  name: string;
  monogram: string;
  specializations: string[];
  corePositioning: string;
  shortIntro: string;
  editorialHeadline: {
    line1: string;
    line2: string;
  };
  aboutLead: string;
  capabilityPillars: CapabilityArea[];
  
  // Customizable placeholders
  learningNow: LearningItem[];
  personalInterest: string;
  educationDetails: string;

  // Contact Configuration
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;

  // Flag indicating setup mode for college submission
  isPlaceholderData: boolean;
}

export type AnnotationCategory = 
  | 'observation' 
  | 'tradeoff' 
  | 'decision' 
  | 'iteration' 
  | 'lesson';

export interface Annotation {
  id: string;
  category: AnnotationCategory;
  tag: string; // e.g., "OBSERVATION // 01", "TRADE-OFF // NOTE"
  title: string;
  note: string;
}

export interface CapabilityItem {
  title: string;
  activity: string;
}

export interface LearningInterest {
  topic: string;
  note: string;
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
  number: string; // e.g. "01"
  title: string;
  category: string;
  timeframe: string;
  shortDescription: string;
  contribution: string;
  tools: string[];
  diagramType: 'lexicon' | 'kinetic' | 'specimen';
  exhibitAnnotation: Annotation;
  caseStudy: CaseStudyData;
}

export interface ProfileData {
  name: string;
  monogram: string;
  discipline: string;
  oneSentenceIntro: string;
  editorialHeadline: {
    line1: string;
    line2: string;
  };
  email: string;
  github: string;
  linkedin: string;
  extendedBio: string[];
  capabilities: CapabilityItem[];
  learningInterests: LearningInterest[];
  memorableDetail: string;
  isPlaceholderData: boolean;
}

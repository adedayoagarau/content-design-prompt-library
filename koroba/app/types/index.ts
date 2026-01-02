export type ContentType =
  | "linkedin"
  | "twitter"
  | "blog"
  | "marketing"
  | "microcopy"
  | "flow"
  | "email"
  | "product-description"
  | "documentation"
  | "website";

export type AnalysisParameter =
  | "voice-tone"
  | "accessibility"
  | "structure"
  | "psychology"
  | "platform"
  | "business"
  | "temperature"
  | "readability"
  | "engagement"
  | "trust"
  | "conversion"
  | "brand-consistency"
  | "seo";

export type InputMethod = "text" | "document" | "url";

export type TemperatureLevel = "ice-cold" | "cold" | "cool" | "warm" | "hot" | "blazing";

export interface AnalysisRequest {
  content?: string;
  contentType: ContentType;
  parameters: AnalysisParameter[];
  voiceGuidelines?: string;
  inputMethod: InputMethod;
  websiteUrl?: string;
  documentContent?: string;
}

export interface ParameterScore {
  parameter: AnalysisParameter;
  score: number;
  feedback: string;
  issues: Issue[];
  strengths: string[];
  metrics?: MetricDetails;
}

export interface Issue {
  text: string;
  reason: string;
  suggestion: string;
  startIndex?: number;
  endIndex?: number;
  severity?: "low" | "medium" | "high";
}

export interface MetricDetails {
  // Temperature metrics
  temperature?: {
    level: TemperatureLevel;
    score: number; // 0-100
    urgencySignals: number;
    emotionalIntensity: number;
    actionDensity: number;
    trendingScore: number;
  };

  // Readability metrics
  readability?: {
    fleschKincaidGrade: number;
    avgSentenceLength: number;
    avgSyllablesPerWord: number;
    jargonDensity: number;
    activeVoicePercent: number;
    readingTimeMinutes: number;
  };

  // Engagement metrics
  engagement?: {
    hookStrength: number;
    curiosityGaps: number;
    storyElements: string[];
    shareabilityScore: number;
    discussionTriggers: number;
  };

  // Trust metrics
  trust?: {
    socialProofDensity: number;
    dataStatisticsUsage: number;
    expertiseSignals: number;
    transparencyMarkers: number;
    authorityIndicators: number;
  };

  // Conversion metrics
  conversion?: {
    ctaClarity: number;
    valuePropositionStrength: number;
    frictionPoints: string[];
    benefitFeatureRatio: number;
    urgencyBalance: number;
  };

  // Brand consistency metrics
  brandConsistency?: {
    voiceDeviation: number;
    terminologyAdherence: number;
    formattingConsistency: number;
    toneSpectrum: string;
    competitiveDifferentiation: number;
  };

  // SEO metrics
  seo?: {
    keywordDensity: number;
    metaDescriptionQuality: number;
    headerHierarchy: number;
    semanticRichness: number;
    primaryKeywords: string[];
  };
}

export interface AnalysisResult {
  overallScore: number;
  parameterScores: ParameterScore[];
  suggestedRewrite?: string;
  summary: string;
  contentMetadata?: {
    wordCount: number;
    characterCount: number;
    paragraphCount: number;
    sentenceCount: number;
    estimatedReadingTime: number;
  };
}

export const PARAMETER_LABELS: Record<AnalysisParameter, string> = {
  "voice-tone": "Voice & Tone",
  "accessibility": "Accessibility",
  "structure": "Structure & Format",
  "psychology": "Psychological Impact",
  "platform": "Platform Optimization",
  "business": "Business Clarity",
  "temperature": "Content Temperature",
  "readability": "Readability & Complexity",
  "engagement": "Engagement Potential",
  "trust": "Trust & Credibility",
  "conversion": "Conversion Optimization",
  "brand-consistency": "Brand Consistency",
  "seo": "SEO & Discoverability"
};

export const PARAMETER_DESCRIPTIONS: Record<AnalysisParameter, string> = {
  "voice-tone": "Brand alignment, formality, and emotional resonance",
  "accessibility": "WCAG 3.0 compliance, plain language, cognitive load",
  "structure": "Hook effectiveness, flow, scanability, CTA placement",
  "psychology": "Social proof, loss aversion, emotional engagement",
  "platform": "Platform-specific best practices and optimization",
  "business": "Value proposition, specificity, credibility signals",
  "temperature": "Urgency, excitement level, hot vs. cold content",
  "readability": "Reading grade level, sentence complexity, jargon",
  "engagement": "Shareability, curiosity, discussion potential",
  "trust": "Credibility markers, expertise signals, transparency",
  "conversion": "CTA effectiveness, friction reduction, persuasion",
  "brand-consistency": "Voice adherence, terminology, differentiation",
  "seo": "Keyword optimization, semantic richness, discoverability"
};

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  "linkedin": "LinkedIn Post",
  "twitter": "Twitter/X Post",
  "blog": "Blog Post",
  "marketing": "Marketing Copy",
  "microcopy": "Microcopy (UI)",
  "flow": "User Flow",
  "email": "Email",
  "product-description": "Product Description",
  "documentation": "Documentation",
  "website": "Website / Landing Page"
};

export const TEMPERATURE_LABELS: Record<TemperatureLevel, { label: string; color: string; description: string }> = {
  "ice-cold": {
    label: "Ice Cold",
    color: "#1e3a8a",
    description: "Extremely calm, analytical, timeless, data-driven"
  },
  "cold": {
    label: "Cold",
    color: "#3b82f6",
    description: "Informative, educational, measured tone"
  },
  "cool": {
    label: "Cool",
    color: "#06b6d4",
    description: "Balanced, professional with subtle warmth"
  },
  "warm": {
    label: "Warm",
    color: "#f59e0b",
    description: "Engaging, friendly, moderately emotional"
  },
  "hot": {
    label: "Hot",
    color: "#f97316",
    description: "Urgent, exciting, action-oriented"
  },
  "blazing": {
    label: "Blazing",
    color: "#dc2626",
    description: "Extremely urgent, FOMO-driven, time-sensitive"
  }
};

// Helper to get temperature level from score
export function getTemperatureLevel(score: number): TemperatureLevel {
  if (score >= 85) return "blazing";
  if (score >= 70) return "hot";
  if (score >= 55) return "warm";
  if (score >= 40) return "cool";
  if (score >= 25) return "cold";
  return "ice-cold";
}

export type ContentType =
  | "linkedin"
  | "twitter"
  | "blog"
  | "marketing"
  | "microcopy"
  | "flow"
  | "email"
  | "product-description"
  | "documentation";

export type AnalysisParameter =
  | "voice-tone"
  | "accessibility"
  | "structure"
  | "psychology"
  | "platform"
  | "business";

export interface AnalysisRequest {
  content: string;
  contentType: ContentType;
  parameters: AnalysisParameter[];
  voiceGuidelines?: string;
}

export interface ParameterScore {
  parameter: AnalysisParameter;
  score: number;
  feedback: string;
  issues: Issue[];
  strengths: string[];
}

export interface Issue {
  text: string;
  reason: string;
  suggestion: string;
  startIndex?: number;
  endIndex?: number;
}

export interface AnalysisResult {
  overallScore: number;
  parameterScores: ParameterScore[];
  suggestedRewrite?: string;
  summary: string;
}

export const PARAMETER_LABELS: Record<AnalysisParameter, string> = {
  "voice-tone": "Voice & Tone",
  "accessibility": "Accessibility",
  "structure": "Structure & Format",
  "psychology": "Psychological Impact",
  "platform": "Platform Optimization",
  "business": "Business Clarity"
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
  "documentation": "Documentation"
};

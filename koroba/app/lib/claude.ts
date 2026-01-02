import Anthropic from "@anthropic-ai/sdk";
import {
  AnalysisParameter,
  ContentType,
  ParameterScore,
  AnalysisResult,
} from "../types";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// Map our 282 prompts to analysis parameters
const PARAMETER_PROMPTS: Record<AnalysisParameter, string> = {
  "voice-tone": `Analyze the voice and tone of this content. Evaluate:
- Brand alignment and consistency
- Formality level appropriateness
- Authenticity and human connection
- Emotional resonance
- Professional vs conversational balance

Provide a score (0-100) and detailed feedback on voice/tone alignment.`,

  "accessibility": `Analyze the accessibility of this content using WCAG 3.0 principles. Evaluate:
- Plain language and readability (Flesch-Kincaid level)
- Clear, concise messaging
- Inclusive language
- Proper structure for screen readers
- Cognitive load management

Provide a score (0-100) and specific accessibility improvements.`,

  "structure": `Analyze the structure and format of this content. Evaluate:
- Hook effectiveness (first 3 seconds/sentences)
- Information flow and scanability
- Paragraph length and whitespace
- Bullet points and formatting
- Call-to-action clarity and placement

Provide a score (0-100) and structural recommendations.`,

  "psychology": `Analyze the psychological principles in this content. Evaluate:
- Social proof and credibility markers
- Loss aversion and urgency triggers
- Cognitive load management (Miller's Law: 7±2 chunks)
- Reciprocity and value-first approach
- Storytelling and emotional engagement

Provide a score (0-100) and psychological impact analysis.`,

  "platform": `Analyze platform-specific optimization for this content. Evaluate:
- Platform best practices adherence
- Character/word count optimization
- Hashtag and mention usage
- Media recommendation (images, videos)
- Engagement optimization tactics

Provide a score (0-100) and platform-specific recommendations.`,

  "business": `Analyze the business clarity of this content. Evaluate:
- Clear value proposition
- Specificity and concrete details
- Credibility and trust signals
- Benefits over features focus
- Measurable outcomes mentioned

Provide a score (0-100) and business messaging improvements.`,
};

export async function analyzeContent(
  content: string,
  contentType: ContentType,
  parameters: AnalysisParameter[],
  voiceGuidelines?: string
): Promise<AnalysisResult> {
  const parameterScores: ParameterScore[] = [];

  // Analyze each parameter
  for (const parameter of parameters) {
    const prompt = PARAMETER_PROMPTS[parameter];

    const systemPrompt = `You are an expert content analyst specializing in ${parameter.replace("-", " ")}.
${voiceGuidelines ? `\nBrand Voice Guidelines:\n${voiceGuidelines}\n` : ""}
Analyze the content and provide:
1. A numerical score (0-100)
2. Specific issues with text snippets and reasons
3. Strengths in the content
4. Actionable feedback

Return your analysis in this JSON format:
{
  "score": <number>,
  "feedback": "<detailed feedback>",
  "issues": [
    {
      "text": "<problematic text>",
      "reason": "<why it's an issue>",
      "suggestion": "<how to improve>"
    }
  ],
  "strengths": ["<strength 1>", "<strength 2>"]
}`;

    const userPrompt = `Content Type: ${contentType}

Content to analyze:
"""
${content}
"""

${prompt}`;

    try {
      const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        temperature: 0.3,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: userPrompt,
          },
        ],
      });

      const result = response.content[0];
      if (result.type === "text") {
        // Extract JSON from response
        const jsonMatch = result.text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const analysis = JSON.parse(jsonMatch[0]);
          parameterScores.push({
            parameter,
            score: analysis.score,
            feedback: analysis.feedback,
            issues: analysis.issues || [],
            strengths: analysis.strengths || [],
          });
        }
      }
    } catch (error) {
      console.error(`Error analyzing ${parameter}:`, error);
      parameterScores.push({
        parameter,
        score: 50,
        feedback: "Analysis failed. Please try again.",
        issues: [],
        strengths: [],
      });
    }
  }

  // Calculate overall score
  const overallScore =
    parameterScores.reduce((sum, p) => sum + p.score, 0) /
    parameterScores.length;

  // Generate suggested rewrite if score is below 70
  let suggestedRewrite: string | undefined;
  if (overallScore < 70) {
    const rewritePrompt = `Based on the following analysis, rewrite this ${contentType} content to improve all identified issues:

Original Content:
"""
${content}
"""

Issues Identified:
${parameterScores
  .flatMap((p) => p.issues)
  .map((i) => `- ${i.text}: ${i.reason} → ${i.suggestion}`)
  .join("\n")}

Provide ONLY the rewritten content, no explanations.`;

    try {
      const rewriteResponse = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2048,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: rewritePrompt,
          },
        ],
      });

      const rewriteResult = rewriteResponse.content[0];
      if (rewriteResult.type === "text") {
        suggestedRewrite = rewriteResult.text.trim();
      }
    } catch (error) {
      console.error("Error generating rewrite:", error);
    }
  }

  // Generate summary
  const summary = `Overall alignment: ${overallScore.toFixed(0)}%. ${
    overallScore >= 80
      ? "Excellent content alignment!"
      : overallScore >= 60
      ? "Good foundation with room for improvement."
      : "Significant improvements needed."
  }`;

  return {
    overallScore,
    parameterScores,
    suggestedRewrite,
    summary,
  };
}

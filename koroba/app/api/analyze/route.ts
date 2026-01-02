import { NextRequest, NextResponse } from "next/server";
import { analyzeContent } from "@/app/lib/claude";
import { AnalysisRequest } from "@/app/types";

export async function POST(request: NextRequest) {
  try {
    const body: AnalysisRequest = await request.json();

    const { content, contentType, parameters, voiceGuidelines } = body;

    if (!content || !contentType || !parameters || parameters.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await analyzeContent(
      content,
      contentType,
      parameters,
      voiceGuidelines
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 }
    );
  }
}

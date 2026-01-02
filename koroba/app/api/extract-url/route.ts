import { NextRequest, NextResponse } from "next/server";
import { extractFromUrl } from "@/app/lib/contentExtractor";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const content = await extractFromUrl(url);

    return NextResponse.json({ content });
  } catch (error) {
    console.error("URL extraction error:", error);
    return NextResponse.json(
      { error: "Failed to extract content from URL" },
      { status: 500 }
    );
  }
}

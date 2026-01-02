"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import {
  ContentType,
  AnalysisParameter,
  AnalysisResult,
  PARAMETER_LABELS,
  CONTENT_TYPE_LABELS,
} from "./types";
import AnalysisResults from "./components/AnalysisResults";

export default function Home() {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState<ContentType>("linkedin");
  const [selectedParameters, setSelectedParameters] = useState<AnalysisParameter[]>([
    "voice-tone",
    "accessibility",
    "structure",
    "psychology",
    "platform",
    "business",
  ]);
  const [voiceGuidelines, setVoiceGuidelines] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const allParameters: AnalysisParameter[] = [
    "voice-tone",
    "accessibility",
    "structure",
    "psychology",
    "platform",
    "business",
  ];

  const contentTypes: ContentType[] = [
    "linkedin",
    "twitter",
    "blog",
    "marketing",
    "microcopy",
    "flow",
    "email",
    "product-description",
    "documentation",
  ];

  const toggleParameter = (param: AnalysisParameter) => {
    setSelectedParameters((prev) =>
      prev.includes(param) ? prev.filter((p) => p !== param) : [...prev, param]
    );
  };

  const handleAnalyze = async () => {
    if (!content.trim() || selectedParameters.length === 0) {
      alert("Please enter content and select at least one analysis parameter.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          contentType,
          parameters: selectedParameters,
          voiceGuidelines: voiceGuidelines || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Analysis failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Analysis error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Koroba
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered content alignment analysis with visual feedback across voice, accessibility,
            structure, psychology, platform optimization, and business clarity.
          </p>
        </motion.div>

        {!result ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Content Type Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content Type
              </label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value as ContentType)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {contentTypes.map((type) => (
                  <option key={type} value={type}>
                    {CONTENT_TYPE_LABELS[type]}
                  </option>
                ))}
              </select>
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your content here for analysis..."
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                {content.length} characters
              </p>
            </div>

            {/* Voice Guidelines (Optional) */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Brand Voice Guidelines (Optional)
              </label>
              <textarea
                value={voiceGuidelines}
                onChange={(e) => setVoiceGuidelines(e.target.value)}
                placeholder="Describe your brand voice (e.g., 'Professional but approachable, technical but clear')..."
                className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Analysis Parameters */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Analysis Parameters ({selectedParameters.length} selected)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allParameters.map((param) => (
                  <button
                    key={param}
                    onClick={() => toggleParameter(param)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedParameters.includes(param)
                        ? "bg-purple-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-2">
                      {selectedParameters.includes(param) ? "✓" : "○"}
                    </span>
                    {PARAMETER_LABELS[param]}
                  </button>
                ))}
              </div>
            </div>

            {/* Analyze Button */}
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !content.trim() || selectedParameters.length === 0}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Analyzing your content...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Analyze Content
                </>
              )}
            </button>
          </motion.div>
        ) : (
          <div>
            <button
              onClick={() => setResult(null)}
              className="mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← New Analysis
            </button>
            <AnalysisResults result={result} originalContent={content} />
          </div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 text-gray-600"
        >
          <p>
            Built with{" "}
            <a
              href="https://github.com/adedayoagarau/content-design-prompt-library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              282 Content Design Prompts
            </a>
          </p>
          <p className="mt-2">
            Powered by Claude AI | Created by{" "}
            <a
              href="https://linkedin.com/in/adedayoagarau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Adedayo Agarau
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

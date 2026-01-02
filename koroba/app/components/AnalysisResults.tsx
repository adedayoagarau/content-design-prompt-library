"use client";

import { motion } from "framer-motion";
import ScoreGauge from "./ScoreGauge";
import ParameterSlider from "./ParameterSlider";
import { AnalysisResult } from "../types";
import { Download, Copy, Check } from "lucide-react";
import { useState } from "react";

interface AnalysisResultsProps {
  result: AnalysisResult;
  originalContent: string;
}

export default function AnalysisResults({ result, originalContent }: AnalysisResultsProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"analysis" | "rewrite">("analysis");

  const handleCopyRewrite = async () => {
    if (result.suggestedRewrite) {
      await navigator.clipboard.writeText(result.suggestedRewrite);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExport = () => {
    const exportData = {
      originalContent,
      analysis: result,
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `koroba-analysis-${Date.now()}.json`;
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Header with overall score */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Content Analysis Complete</h2>
            <p className="text-purple-100">{result.summary}</p>
          </div>
          <ScoreGauge score={result.overallScore} label="Overall Score" size="lg" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("analysis")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            activeTab === "analysis"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Analysis
        </button>
        {result.suggestedRewrite && (
          <button
            onClick={() => setActiveTab("rewrite")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === "rewrite"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Suggested Rewrite
          </button>
        )}
        <button
          onClick={handleExport}
          className="ml-auto px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <Download size={18} />
          Export
        </button>
      </div>

      {/* Content */}
      {activeTab === "analysis" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {result.parameterScores.map((parameterScore, index) => (
            <ParameterSlider
              key={parameterScore.parameter}
              parameterScore={parameterScore}
              index={index}
            />
          ))}
        </div>
      )}

      {activeTab === "rewrite" && result.suggestedRewrite && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Original */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              Original Content
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-wrap">{originalContent}</p>
            </div>
          </div>

          {/* Rewrite */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Suggested Rewrite</h3>
              <button
                onClick={handleCopyRewrite}
                className="px-3 py-1.5 text-sm bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-gray-700 whitespace-pre-wrap">{result.suggestedRewrite}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

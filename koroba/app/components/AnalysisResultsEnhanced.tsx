"use client";

import { motion } from "framer-motion";
import ScoreGauge from "./ScoreGauge";
import ParameterSlider from "./ParameterSlider";
import TemperatureThermometer from "./TemperatureThermometer";
import MetricsCard from "./MetricsCard";
import { AnalysisResult } from "../types";
import { Download, Copy, Check, FileText, Clock, Hash, AlignLeft, Sparkles } from "lucide-react";
import { useState } from "react";

interface AnalysisResultsProps {
  result: AnalysisResult;
  originalContent: string;
}

export default function AnalysisResultsEnhanced({ result, originalContent }: AnalysisResultsProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"analysis" | "metrics" | "rewrite">("analysis");

  const temperatureParam = result.parameterScores.find(p => p.parameter === "temperature");
  const hasAdvancedMetrics = result.parameterScores.some(p => p.metrics);

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
      className="w-full max-w-7xl mx-auto"
    >
      {/* Header with overall score */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl p-8 mb-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-3">Content Analysis Complete</h2>
            <p className="text-purple-100 text-lg mb-4">{result.summary}</p>

            {/* Content Metadata */}
            {result.contentMetadata && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <FileText size={14} />
                    <span>Words</span>
                  </div>
                  <p className="text-2xl font-bold">{result.contentMetadata.wordCount}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <AlignLeft size={14} />
                    <span>Sentences</span>
                  </div>
                  <p className="text-2xl font-bold">{result.contentMetadata.sentenceCount}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <Hash size={14} />
                    <span>Paragraphs</span>
                  </div>
                  <p className="text-2xl font-bold">{result.contentMetadata.paragraphCount}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-white/80 text-xs mb-1">
                    <Clock size={14} />
                    <span>Read Time</span>
                  </div>
                  <p className="text-2xl font-bold">{result.contentMetadata.estimatedReadingTime} min</p>
                </div>
              </div>
            )}
          </div>
          <div className="ml-8">
            <ScoreGauge score={result.overallScore} label="Overall Score" size="lg" />
          </div>
        </div>
      </div>

      {/* Temperature Display (if analyzed) */}
      {temperatureParam && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Content Temperature Analysis</h3>
          <div className="flex justify-center">
            <TemperatureThermometer score={temperatureParam.score} size="lg" />
          </div>
          <div className="mt-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-700">{temperatureParam.feedback}</p>
          </div>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("analysis")}
          className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md ${
            activeTab === "analysis"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white"
          }`}
        >
          Parameter Analysis ({result.parameterScores.length})
        </button>
        {hasAdvancedMetrics && (
          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md ${
              activeTab === "metrics"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white"
            }`}
          >
            Detailed Metrics
          </button>
        )}
        {result.suggestedRewrite && (
          <button
            onClick={() => setActiveTab("rewrite")}
            className={`px-6 py-3 rounded-lg font-medium transition-all shadow-md ${
              activeTab === "rewrite"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white"
            }`}
          >
            Suggested Rewrite
          </button>
        )}
        <button
          onClick={handleExport}
          className="ml-auto px-6 py-3 rounded-lg font-medium bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white transition-all shadow-md flex items-center gap-2"
        >
          <Download size={18} />
          Export JSON
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

      {activeTab === "metrics" && hasAdvancedMetrics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {result.parameterScores
            .filter(p => p.metrics)
            .map((parameterScore, index) => (
              <MetricsCard
                key={parameterScore.parameter}
                metrics={parameterScore.metrics!}
                index={index}
              />
            ))}
        </div>
      )}

      {activeTab === "rewrite" && result.suggestedRewrite && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Original */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-lg">
              <FileText size={20} className="text-gray-600" />
              Original Content
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{originalContent}</p>
            </div>
          </div>

          {/* Rewrite */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-lg">
                <Sparkles size={20} className="text-green-600" />
                Suggested Rewrite
              </h3>
              <button
                onClick={handleCopyRewrite}
                className="px-3 py-1.5 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-md flex items-center gap-2"
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
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 max-h-96 overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{result.suggestedRewrite}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, FileText, Link as LinkIcon, Type, Upload, X, Info } from "lucide-react";
import {
  ContentType,
  AnalysisParameter,
  AnalysisResult,
  PARAMETER_LABELS,
  PARAMETER_DESCRIPTIONS,
  CONTENT_TYPE_LABELS,
  InputMethod,
} from "./types";
import AnalysisResultsEnhanced from "./components/AnalysisResultsEnhanced";

export default function Home() {
  const [inputMethod, setInputMethod] = useState<InputMethod>("text");
  const [content, setContent] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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
  const [showParameterInfo, setShowParameterInfo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allParameters: AnalysisParameter[] = [
    "voice-tone",
    "accessibility",
    "structure",
    "psychology",
    "platform",
    "business",
    "temperature",
    "readability",
    "engagement",
    "trust",
    "conversion",
    "brand-consistency",
    "seo",
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
    "website",
  ];

  const toggleParameter = (param: AnalysisParameter) => {
    setSelectedParameters((prev) =>
      prev.includes(param) ? prev.filter((p) => p !== param) : [...prev, param]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);

    // Extract text from file
    const text = await file.text();
    setContent(text);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setContent("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAnalyze = async () => {
    let contentToAnalyze = "";

    if (inputMethod === "text" && !content.trim()) {
      alert("Please enter content to analyze.");
      return;
    }

    if (inputMethod === "url" && !websiteUrl.trim()) {
      alert("Please enter a website URL.");
      return;
    }

    if (inputMethod === "document" && !uploadedFile) {
      alert("Please upload a document.");
      return;
    }

    if (selectedParameters.length === 0) {
      alert("Please select at least one analysis parameter.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      // Handle URL extraction
      if (inputMethod === "url") {
        const urlResponse = await fetch(`/api/extract-url`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: websiteUrl }),
        });

        if (!urlResponse.ok) throw new Error("Failed to extract URL content");
        const { content: extractedContent } = await urlResponse.json();
        contentToAnalyze = extractedContent;
      } else {
        contentToAnalyze = content;
      }

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: contentToAnalyze,
          contentType,
          parameters: selectedParameters,
          voiceGuidelines: voiceGuidelines || undefined,
          inputMethod,
          websiteUrl: inputMethod === "url" ? websiteUrl : undefined,
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Koroba
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive content analysis across <span className="font-semibold">13 critical parameters</span>.
            Get visual feedback, actionable insights, and AI-powered recommendations.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
            <span className="px-3 py-1 bg-purple-100 rounded-full">🎭 Voice & Tone</span>
            <span className="px-3 py-1 bg-pink-100 rounded-full">🌡️ Temperature</span>
            <span className="px-3 py-1 bg-blue-100 rounded-full">📊 13 Metrics</span>
            <span className="px-3 py-1 bg-green-100 rounded-full">♿ WCAG 3.0</span>
          </div>
        </motion.div>

        {!result ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Content Type Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Content Type
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value as ContentType)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                >
                  {contentTypes.map((type) => (
                    <option key={type} value={type}>
                      {CONTENT_TYPE_LABELS[type]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input Method Tabs */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Input Method
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setInputMethod("text")}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      inputMethod === "text"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Type size={20} />
                    Paste Text
                  </button>
                  <button
                    onClick={() => setInputMethod("document")}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      inputMethod === "document"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <FileText size={20} />
                    Upload Document
                  </button>
                  <button
                    onClick={() => setInputMethod("url")}
                    className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      inputMethod === "url"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <LinkIcon size={20} />
                    Website URL
                  </button>
                </div>
              </div>

              {/* Content Input */}
              <AnimatePresence mode="wait">
                {inputMethod === "text" && (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6"
                  >
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
                  </motion.div>
                )}

                {inputMethod === "document" && (
                  <motion.div
                    key="document"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Document
                    </label>
                    {!uploadedFile ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-colors"
                      >
                        <Upload size={48} className="text-gray-400 mb-2" />
                        <p className="text-gray-600 font-medium">Click to upload document</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Supports TXT, PDF, DOCX
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".txt,.pdf,.docx,.doc"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText size={32} className="text-purple-500" />
                          <div>
                            <p className="font-medium text-gray-800">{uploadedFile.name}</p>
                            <p className="text-sm text-gray-500">
                              {(uploadedFile.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={removeFile}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <X size={20} className="text-gray-600" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {inputMethod === "url" && (
                  <motion.div
                    key="url"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Enter the URL of the webpage you want to analyze
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Voice Guidelines (Optional) */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brand Voice Guidelines <span className="text-gray-500 font-normal">(Optional)</span>
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
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Analysis Parameters ({selectedParameters.length}/13 selected)
                  </label>
                  <button
                    onClick={() => setShowParameterInfo(!showParameterInfo)}
                    className="text-purple-600 hover:text-purple-700 text-sm flex items-center gap-1"
                  >
                    <Info size={16} />
                    {showParameterInfo ? "Hide" : "Show"} descriptions
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {allParameters.map((param) => (
                    <button
                      key={param}
                      onClick={() => toggleParameter(param)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
                        selectedParameters.includes(param)
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span>
                          {selectedParameters.includes(param) ? "✓ " : "○ "}
                          {PARAMETER_LABELS[param]}
                        </span>
                      </div>
                      {showParameterInfo && (
                        <p className="text-xs mt-1 opacity-90">
                          {PARAMETER_DESCRIPTIONS[param]}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
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
            </div>
          </motion.div>
        ) : (
          <div>
            <button
              onClick={() => setResult(null)}
              className="mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white transition-colors shadow-md"
            >
              ← New Analysis
            </button>
            <AnalysisResultsEnhanced
              result={result}
              originalContent={inputMethod === "url" ? websiteUrl : content}
            />
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
            Created by{" "}
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

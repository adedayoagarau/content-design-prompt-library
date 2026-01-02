"use client";

import { motion } from "framer-motion";
import { MetricDetails } from "../types";
import { TrendingUp, BookOpen, Users, Shield, Target, Award, Search } from "lucide-react";

interface MetricsCardProps {
  metrics: MetricDetails;
  index: number;
}

export default function MetricsCard({ metrics, index }: MetricsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
    >
      {/* Readability Metrics */}
      {metrics.readability && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-blue-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">Readability & Complexity</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-blue-700 font-medium mb-1">Grade Level</p>
              <p className="text-2xl font-bold text-blue-900">{metrics.readability.fleschKincaidGrade}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-blue-700 font-medium mb-1">Reading Time</p>
              <p className="text-2xl font-bold text-blue-900">{metrics.readability.readingTimeMinutes} min</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-blue-700 font-medium mb-1">Avg Sentence</p>
              <p className="text-2xl font-bold text-blue-900">{metrics.readability.avgSentenceLength} words</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-blue-700 font-medium mb-1">Active Voice</p>
              <p className="text-2xl font-bold text-blue-900">{metrics.readability.activeVoicePercent}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Engagement Metrics */}
      {metrics.engagement && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-green-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">Engagement Potential</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Hook Strength</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.engagement.hookStrength}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.engagement.hookStrength}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Shareability</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.engagement.shareabilityScore}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.engagement.shareabilityScore}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
            {metrics.engagement.storyElements.length > 0 && (
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs text-green-700 font-medium mb-2">Story Elements</p>
                <div className="flex flex-wrap gap-2">
                  {metrics.engagement.storyElements.map((element, i) => (
                    <span key={i} className="px-2 py-1 bg-white text-xs text-green-800 rounded-full border border-green-200">
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Trust Metrics */}
      {metrics.trust && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-purple-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">Trust & Credibility</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-700 mb-1">Social Proof</p>
              <p className="text-xl font-bold text-purple-900">{metrics.trust.socialProofDensity}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-700 mb-1">Data Usage</p>
              <p className="text-xl font-bold text-purple-900">{metrics.trust.dataStatisticsUsage}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-700 mb-1">Expertise</p>
              <p className="text-xl font-bold text-purple-900">{metrics.trust.expertiseSignals}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-700 mb-1">Authority</p>
              <p className="text-xl font-bold text-purple-900">{metrics.trust.authorityIndicators}</p>
            </div>
          </div>
        </div>
      )}

      {/* Conversion Metrics */}
      {metrics.conversion && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="text-orange-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">Conversion Optimization</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">CTA Clarity</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.conversion.ctaClarity}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.conversion.ctaClarity}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Value Proposition</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.conversion.valuePropositionStrength}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${metrics.conversion.valuePropositionStrength}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            {metrics.conversion.frictionPoints.length > 0 && (
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-xs text-red-700 font-medium mb-2">⚠️ Friction Points</p>
                <ul className="space-y-1">
                  {metrics.conversion.frictionPoints.map((point, i) => (
                    <li key={i} className="text-xs text-red-800">• {point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Brand Consistency Metrics */}
      {metrics.brandConsistency && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-pink-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">Brand Consistency</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
              <span className="text-sm text-gray-700">Terminology Adherence</span>
              <span className="font-semibold text-pink-900">{metrics.brandConsistency.terminologyAdherence}%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
              <span className="text-sm text-gray-700">Formatting Consistency</span>
              <span className="font-semibold text-pink-900">{metrics.brandConsistency.formattingConsistency}%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
              <span className="text-sm text-gray-700">Competitive Differentiation</span>
              <span className="font-semibold text-pink-900">{metrics.brandConsistency.competitiveDifferentiation}%</span>
            </div>
          </div>
        </div>
      )}

      {/* SEO Metrics */}
      {metrics.seo && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Search className="text-indigo-500" size={24} />
            <h3 className="font-semibold text-gray-900 text-lg">SEO & Discoverability</h3>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <p className="text-xs text-indigo-700 mb-1">Keyword Density</p>
                <p className="text-xl font-bold text-indigo-900">{metrics.seo.keywordDensity}%</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <p className="text-xs text-indigo-700 mb-1">Semantic Rich</p>
                <p className="text-xl font-bold text-indigo-900">{metrics.seo.semanticRichness}/100</p>
              </div>
            </div>
            {metrics.seo.primaryKeywords.length > 0 && (
              <div className="bg-indigo-50 p-3 rounded-lg">
                <p className="text-xs text-indigo-700 font-medium mb-2">Primary Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {metrics.seo.primaryKeywords.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-sm text-indigo-800 rounded-full border border-indigo-200 font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

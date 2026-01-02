"use client";

import { motion } from "framer-motion";
import { cn, getScoreColor } from "../lib/utils";
import { ParameterScore, PARAMETER_LABELS } from "../types";

interface ParameterSliderProps {
  parameterScore: ParameterScore;
  index: number;
}

export default function ParameterSlider({ parameterScore, index }: ParameterSliderProps) {
  const { parameter, score, feedback, issues, strengths } = parameterScore;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{PARAMETER_LABELS[parameter]}</h3>
        <span className={cn("text-2xl font-bold", getScoreColor(score))}>
          {Math.round(score)}
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
        <motion.div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>

      {/* Feedback */}
      <p className="text-sm text-gray-600 mb-3">{feedback}</p>

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-green-700 mb-1">Strengths:</p>
          <ul className="space-y-1">
            {strengths.map((strength, i) => (
              <li key={i} className="text-xs text-green-600 flex items-start">
                <span className="mr-1">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Issues */}
      {issues.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-red-700 mb-1">Issues:</p>
          <ul className="space-y-2">
            {issues.map((issue, i) => (
              <li key={i} className="text-xs bg-red-50 p-2 rounded">
                <p className="font-medium text-red-800">"{issue.text}"</p>
                <p className="text-red-600 mt-1">
                  <strong>Why:</strong> {issue.reason}
                </p>
                <p className="text-green-700 mt-1">
                  <strong>Fix:</strong> {issue.suggestion}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

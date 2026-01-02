"use client";

import { motion } from "framer-motion";
import { TemperatureLevel, TEMPERATURE_LABELS, getTemperatureLevel } from "../types";
import { Flame, Snowflake } from "lucide-react";

interface TemperatureThermometerProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function TemperatureThermometer({ score, size = "md" }: TemperatureThermometerProps) {
  const level = getTemperatureLevel(score);
  const tempData = TEMPERATURE_LABELS[level];

  const heights = {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
  };

  const widths = {
    sm: "w-16",
    md: "w-20",
    lg: "w-24",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`relative ${heights[size]} ${widths[size]} bg-gradient-to-b from-gray-200 to-gray-300 rounded-full border-4 border-gray-400 overflow-hidden`}>
        {/* Temperature levels markers */}
        <div className="absolute inset-0 flex flex-col justify-between py-2">
          {["Blazing", "Hot", "Warm", "Cool", "Cold", "Ice"].map((label, i) => (
            <div key={i} className="relative">
              <div className="absolute right-full mr-1 text-xs text-gray-500 whitespace-nowrap">
                {label}
              </div>
              <div className="h-px bg-gray-400 opacity-30" />
            </div>
          ))}
        </div>

        {/* Animated fill */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-b-full"
          style={{
            background: `linear-gradient(to top, ${tempData.color}, ${tempData.color}aa)`,
          }}
          initial={{ height: 0 }}
          animate={{ height: `${score}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Bulb at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div
            className="w-12 h-12 rounded-full border-4 border-gray-400"
            style={{ backgroundColor: tempData.color }}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="text-center">
        <div className="flex items-center gap-2 justify-center mb-1">
          {level === "blazing" || level === "hot" ? (
            <Flame className="text-red-500" size={20} />
          ) : level === "ice-cold" || level === "cold" ? (
            <Snowflake className="text-blue-500" size={20} />
          ) : null}
          <span className="text-2xl font-bold" style={{ color: tempData.color }}>
            {tempData.label}
          </span>
        </div>
        <p className="text-sm text-gray-600 max-w-xs">{tempData.description}</p>
        <p className="text-xs text-gray-500 mt-1">Score: {score}/100</p>
      </div>
    </div>
  );
}

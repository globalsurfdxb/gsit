"use client";

import { useState, useEffect, useRef } from "react";
import { useCountUp } from "@/app/hooks/useCountUp";

interface StatItem {
  value: string;
  label: string;
  description: string;
  startTime: number | null;
}

interface DigitProps {
  digit: string;
  cascadeDelay: number; // ms delay before this digit starts flipping
}

function AnimatedDigit({ digit, cascadeDelay }: DigitProps) {
  const [current, setCurrent] = useState(digit);
  const [next, setNext] = useState(digit);
  const [animating, setAnimating] = useState(false);
  const startTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (digit === current) return;

    if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
    if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);

    // Wait cascadeDelay before this digit begins its own flip
    startTimeoutRef.current = setTimeout(() => {
      setNext(digit);
      setAnimating(true);

      endTimeoutRef.current = setTimeout(() => {
        setCurrent(digit);
        setAnimating(false);
      }, 180);
    }, cascadeDelay);

    return () => {
      if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
      if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);
    };
  }, [digit, cascadeDelay]);

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "bottom",
        lineHeight: "inherit",
        width: "0.67em",
        textAlign: "center",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <span
        style={{
          display: "block",
          width: "100%",
          fontVariantNumeric: "tabular-nums",
          transform: animating ? "translateY(-100%)" : "translateY(0%)",
          opacity: animating ? 0 : 1,
          transition: animating
            ? "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s ease"
            : "none",
        }}
      >
        {current}
      </span>

      <span
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          fontVariantNumeric: "tabular-nums",
          transform: animating ? "translateY(0%)" : "translateY(100%)",
          opacity: animating ? 1 : 0,
          transition: animating
            ? "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s ease 0.05s"
            : "none",
        }}
      >
        {next}
      </span>
    </span>
  );
}

function RollingNumber({ value, cascadeStep = 60 }: { value: string; cascadeStep?: number }) {
  const chars = value.split("");

  // Find indices of digit characters, then compute their position from the right
  const digitIndices = chars
    .map((c, i) => (/\d/.test(c) ? i : -1))
    .filter((i) => i !== -1);
  const totalDigits = digitIndices.length;

  return (
    <span style={{ display: "inline-flex", alignItems: "baseline" }}>
      {chars.map((char, i) => {
        if (!/\d/.test(char)) {
          return <span key={i}>{char}</span>;
        }
        // position from right: rightmost digit = 0, then 1, 2, ...
        const posFromRight = totalDigits - 1 - digitIndices.indexOf(i);
        const cascadeDelay = posFromRight * cascadeStep;

        return <AnimatedDigit key={i} digit={char} cascadeDelay={cascadeDelay} />;
      })}
    </span>
  );
}

export default function CounterCard({ value, label, description, startTime }: StatItem) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const { count, startFrom } = useCountUp(numeric, 1500, startTime);

  const displayValue = String(startTime !== null ? count : startFrom);

  return (
    <div className="flex flex-col gap-4 p-4 md:py-[31.5px] xl:p-6">
      <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3">
        <span
          className="inline-block tabular-nums"
          style={{ overflow: "hidden", minWidth: `${String(numeric).length + suffix.length}ch` }}
        >
          <RollingNumber value={displayValue + suffix} />
        </span>
      </p>
      <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
        {description}
      </p>
    </div>
  );
}
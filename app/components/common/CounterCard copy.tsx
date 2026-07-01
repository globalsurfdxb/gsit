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
  cascadeDelay: number;
  flipDuration?: number; // ms — how long the flip animation itself takes
}

function AnimatedDigit({ digit, cascadeDelay, flipDuration = 380 }: DigitProps) {
  const [current, setCurrent] = useState(digit);
  const [next, setNext] = useState(digit);
  const [animating, setAnimating] = useState(false);
  const startTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (digit === current) return;

    if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
    if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);

    startTimeoutRef.current = setTimeout(() => {
      setNext(digit);
      setAnimating(true);

      endTimeoutRef.current = setTimeout(() => {
        setCurrent(digit);
        setAnimating(false);
      }, flipDuration);
    }, cascadeDelay);

    return () => {
      if (startTimeoutRef.current) clearTimeout(startTimeoutRef.current);
      if (endTimeoutRef.current) clearTimeout(endTimeoutRef.current);
    };
  }, [digit, cascadeDelay, flipDuration]);

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "bottom",
        lineHeight: "inherit",
        width: "1ch",
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
            ? `transform ${flipDuration}ms cubic-bezier(0.65, 0, 0.35, 1), opacity ${flipDuration * 0.6}ms ease-in`
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
            ? `transform ${flipDuration}ms cubic-bezier(0.65, 0, 0.35, 1), opacity ${flipDuration * 0.6}ms ease-out ${flipDuration * 0.15}ms`
            : "none",
        }}
      >
        {next}
      </span>
    </span>
  );
}

function RollingNumber({
  value,
  cascadeStep = 90,
  flipDuration = 380,
}: {
  value: string;
  cascadeStep?: number;
  flipDuration?: number;
}) {
  const chars = value.split("");

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
        const posFromRight = totalDigits - 1 - digitIndices.indexOf(i);
        const cascadeDelay = posFromRight * cascadeStep;

        return (
          <AnimatedDigit
            key={i}
            digit={char}
            cascadeDelay={cascadeDelay}
            flipDuration={flipDuration}
          />
        );
      })}
    </span>
  );
}

export default function CounterCard({ value, label, description, startTime }: StatItem) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const { count, startFrom } = useCountUp(numeric, 900, startTime);

  const displayValue = String(startTime !== null ? count : startFrom);

  return (
    <div className="flex flex-col gap-4 p-4 md:py-[31.5px] xl:p-6">
      <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3">
        <span
          className="inline-block tabular-nums"
          style={{ overflow: "hidden", minWidth: `${String(numeric).length + suffix.length}ch` }}
        >
          <RollingNumber value={displayValue + suffix} cascadeStep={60} flipDuration={520} />
        </span>
      </p>
      <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
        {description}
      </p>
    </div>
  );
}
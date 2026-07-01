"use client";

import { useState, useEffect, useRef } from "react";
import { useCountUp } from "@/app/hooks/useCountUp";

interface StatItem {
  value: string;
  label: string;
  description: string;
  startTime: number | null;
}

const FADE_OUT_DURATION = 1000; // ms — how long "11" takes to disappear
const FADE_IN_DURATION = 1000;  // ms — how long "13" takes to appear

function AnimateOnChange({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const prevValueRef = useRef(value);
  const isFirstRenderRef = useRef(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Skip the very first render — no animation on initial mount
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      prevValueRef.current = value;
      setDisplayValue(value);
      return;
    }

    if (value === prevValueRef.current) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Phase 1: fade OUT the currently displayed (old) value
    setPhase("out");

    timeoutRef.current = setTimeout(() => {
      // Swap text only after it's fully faded out, then fade IN the new value
      prevValueRef.current = value;
      setDisplayValue(value);
      setPhase("in");
    }, FADE_OUT_DURATION);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value]);

  const animation =
    phase === "out"
      ? `counter-fade-out ${FADE_OUT_DURATION}ms ease-in forwards`
      : phase === "in"
      ? `counter-fade-in ${FADE_IN_DURATION}ms ease-out forwards`
      : "none";

  return (
    <span
      className="inline-block tabular-nums"
      style={{ animation }}
    >
      {displayValue}
      <style jsx>{`
        @keyframes counter-fade-out {
          0% {
            opacity: 1; 
          }
          100% {
            opacity: 0; 
          }
        }
        @keyframes counter-fade-in {
          0% {
            opacity: 0; 
          }
          100% {
            opacity: 1; 
          }
        }
      `}</style>
    </span>
  );
}

export default function CounterCard({ value, label, description, startTime }: StatItem) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const { count, startFrom } = useCountUp(numeric, 200, startTime);

  const displayValue = String(startTime !== null ? count : startFrom);

  return (
    <div className="flex flex-col gap-4 p-4 pe-3 md:pe-4 md:py-[31.5px] xl:p-6">
      <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3">
        <span
          className="inline-block tabular-nums "
          style={{ minWidth: `${String(numeric).length + suffix.length - 1}ch` }}
        >
          <AnimateOnChange value={displayValue + suffix} />
        </span>
        <span className=" text-[12px] md:text-24  font-medium leading-[1.46]">{label}</span>
      </p>
      <p className="text-paragraphlte text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627]">
        {description}
      </p>
    </div>
  );
}
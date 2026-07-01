"use client";

import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  startTime: number | null = null,
): { count: number; changing: boolean; startFrom: number } {
  const startFrom = Math.max(0, target - 1);
  const [count, setCount] = useState(startFrom);
  const [changing, setChanging] = useState(false);
  const rafRef = useRef<number | null>(null);
  const prevCount = useRef(startFrom);

  useEffect(() => {
    if (startTime === null) return;

    prevCount.current = startFrom;
    setCount(startFrom);

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = progress >= 1 ? target : Math.floor(startFrom + eased * (target - startFrom));

      if (next !== prevCount.current) {
        setChanging(true);
        setTimeout(() => setChanging(false), 80);
        prevCount.current = next;
      }

      setCount(next);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [startTime, target, duration, startFrom]);

  return { count, changing, startFrom };

}
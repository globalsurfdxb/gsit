"use client";

import { useRef, useEffect, useState } from "react";
import { statsData } from "../data";

interface StatItem {
  value: string;
  label: string;
  description: string;
}

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ value, label, description }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  // extract numeric part and suffix (e.g. "1500+" → 1500, "+")
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useCountUp(numeric, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4 p-6">
      <p className="text-primary font-bold text-[32px] md:text-[48px] leading-[1.3]">
        {started ? count : 0}
        {suffix}{" "}
        <span className="text-24 font-medium">{label}</span>
      </p>
      <p className="text-paragraphlte text-18">{description}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white rounded-2xl">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 py-8">
          {statsData.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
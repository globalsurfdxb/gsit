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
    <div ref={ref} className="flex flex-col gap-4 p-4 md:py-[31.5px] xl:p-6">
      <p className="text-primary font-bold text-[26px] md:text-[36px] xl:text-[48px] leading-[1.308] md:leading-[1.3] flex flex-nowrap items-baseline gap-1 md:gap-3 ">
        {/* reserves final digit width — label never shifts */}
        <span
          className="inline-block tabular-nums"
          // style={{ minWidth: `${String(numeric).length}ch` }}
        >
          {started ? count : 0}{suffix}
        </span>
        <span className="text-[12px] md:text-[18px] xl:!text-[24px]  leading-[1.9589] font-medium whitespace-nowrap">{label}</span>
      </p>
      <p className="text-paragraphlte text-[14px] md:text-[16px]  leading-[1.29] md:leading-[1.6255] lg:leading-[1.625] xl:leading-[1.625] 3xl:leading-[1.627] ">{description}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white rounded-2xl">
      <div className="container">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-6 py-4 md:py-6.5 xl:py-8">
          {statsData.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
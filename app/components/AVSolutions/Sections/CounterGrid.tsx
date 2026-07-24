"use client";

import { useRef, useEffect, useState } from "react";
// import CounterCard from "@/app/components/common/CounterCard";
import Profile from "@/app/components/common/Profile";
import { statsData } from "../data";
export default function CounterGrid() { 
  const ref = useRef<HTMLDivElement>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame((ts) => setStartTime(ts));
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 xl:flex justify-between gap-0 xl:gap-6 py-4 md:py-6.5 xl:py-4.5">
      {statsData.map((stat, i) => (
        // <CounterCard key={i} {...stat} startTime={startTime} />
         <Profile
                                key={i}
                                {...stat}
                              />
      ))}
    </div>
  );
}
"use client";
import { useRef, useEffect, useState } from "react"; 
import Profile from "@/app/components/common/Profile"; 
 

    export interface datakey {
      value: string;
    label: string;
    description: string;
    }
    
    interface BannerProps {
      data: datakey[];  
    }
    export default function CounterHome({ data }: BannerProps ) {  
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
     <section className="bg-white rounded-2xl">
      <div className="container">
    <div ref={ref} className="grid grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-6 py-4 md:py-6.5 xl:py-8">
      {data.map((stat, i) => (
        // <CounterCard key={i} {...stat} startTime={startTime} />
        <Profile
          key={i}
          {...stat}
        />
      ))}
    </div>
        </div>
    </section>
  );
}
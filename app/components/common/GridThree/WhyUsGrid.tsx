"use client";

import { useState } from "react";

export interface WhyUsItem {
  title: string;
  description: string;
}

interface WhyUsGridProps {
  data: WhyUsItem[];
}

export default function WhyUsGrid({ data }: WhyUsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7.5 mt-4 lg:mt-7">
      {data.map((item, i) => {
        const active = activeIndex === i;
        return (
          <div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            className={`rounded-2xl p-6 border transition-colors duration-500 min-h-[225px] 2xl:min-h-[325px] flex flex-col justify-between ${
              active
                ? "bg-[linear-gradient(135deg,_#1A2E6E_0%,_#1A3FA0_100%)] border-primary"
                : "bg-white border-[#d3d3d3]"
            }`}
          >
            <h3
              className={`text-32px   font-medium mb-4   transition-colors duration-500 ${
                active ? "text-white" : "text-primary"
              }`}
            >
              {item.title}
            </h3>

           <div> <div
              className={`border-t transition-colors duration-500 mb-4 ${
                active ? "border-white" : "border-[#d3d3d3]"
              }`}
            />

            <p
              className={`text-18 tracking-[-3%]  transition-colors duration-500 ${
                active ? "text-white" : "text-paragraph"
              }`}
            >
              {item.description}
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
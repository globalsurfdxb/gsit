// components/MetricsGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { metricsData } from "../data";

interface MetricCardProps {
  icon: string;
  value: string;
  title: string;
  description: string;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function MetricCard({ icon, value, title, description, active, onHover, onLeave }: MetricCardProps) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
      className={`flex flex-col justify-between gap-18  lg:gap-18 3xl:gap-[149px] p-5 md:p-6 rounded-2xl transition-all duration-500 cursor-pointer mt-50 3xl:mt-[52px]
        ${active
          ? "bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]"
          : "bg-[linear-gradient(211.76deg,#FFFFFF_-6.05%,#C9DEFD_100%)]"
        }`}
    >
      {/* icon */}
      <div
        className={`w-[42px] h-[42px] border lg:w-[58px] lg:h-[58px] rounded-[8px]  flex items-center justify-center transition-colors duration-500
          ${active ? "bg-white/10  border-[#F8F8F880]" : "bg-white border-transparent"}`}
      >
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className={`w-[24px] h-[24px] md:w-[32px] md:h-[32px] transition-all duration-500 ${active ? "brightness-0 invert" : ""}`}
        />
      </div>

      {/* content */}
      <div className="flex flex-col  ">
        <p className={`text-[56px] md:text-[64px] 3xl:text-[86px] font-[600] tracking-[-2%] leading-none transition-colors duration-500
          ${active ? "text-white" : "text-primary"}`}>
          {value}
        </p>
        <h3 className={`mt-6 lg:mt-[32px] mb-5 lg:mb-[18px] text-24 font-[500]  leading-[1.459] tracking-[-3%] transition-colors duration-500
          ${active ? "text-white" : "text-primary"}`}>
          {title}
        </h3>
        <p className={`text-18 transition-colors duration-500
          ${active ? "text-white" : " text-[#5875A0]"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function MetricsGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // second card active by default

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[30px]">
      {metricsData.map((item, i) => (
        <MetricCard
          key={i}
          {...item}
          active={activeIndex === i}
          onHover={() => setActiveIndex(i)}
          onLeave={() => setActiveIndex(1)}
        />
      ))}
    </div>
  );
}
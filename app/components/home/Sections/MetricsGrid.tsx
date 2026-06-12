"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { metricsData } from "../data"; 
import LucideIcon from "@/app/components/common/LucideIcon";
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
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
      className="relative flex flex-col justify-between gap-18 lg:gap-18 3xl:gap-[149px] p-5 md:p-6 rounded-2xl cursor-pointer mt-52 overflow-hidden"
    >
      {/* base light bg */}
      <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(211.76deg,#FFFFFF_-6.05%,#C9DEFD_100%)]" />

      {/* dark bg — fades in/out */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* icon */}
      <motion.div
        animate={{
          backgroundColor: active ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,1)",
          borderColor: active ? "rgba(248,248,248,0.5)" : "transparent",
        }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-[42px] h-[42px] border lg:w-[58px] lg:h-[58px] rounded-[8px] flex items-center justify-center"
      >
        <motion.div
          animate={{ filter: active ? "brightness(0) invert(1)" : "brightness(1) invert(0)" }}
          transition={{ duration: 0.5 }}
        >
         
          <LucideIcon name={icon} strokeWidth={1} className="text-primary w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
        </motion.div>
      </motion.div>

      {/* content */}
      <div className="relative z-10 flex flex-col">
        <motion.p
          animate={{ color: active ? "#ffffff" : "#114A9F" }}
          transition={{ duration: 0.5 }}
          className="text-[56px] md:text-[64px] 3xl:text-[86px] font-[600] tracking-[-2%] leading-none"
        >
          {value}
        </motion.p>

        <motion.h3
          animate={{ color: active ? "#ffffff" : "#114A9F" }}
          transition={{ duration: 0.5 }}
          className="mt-6 lg:mt-[32px] mb-5 lg:mb-[18px] text-24 font-[500] leading-[1.459] tracking-[-3%]"
        >
          {title}
        </motion.h3>

        <motion.p
          animate={{ color: active ? "#ffffff" : "#5875A0" }}
          transition={{ duration: 0.5 }}
          className="text-18"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function MetricsGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

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
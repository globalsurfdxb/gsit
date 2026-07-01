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
      className="relative flex flex-col justify-between gap-12.5 lg:gap-[105px] xl:gap-[60px] 3xl:gap-[149px] p-3 md:p-4 lg:p-6 rounded-2xl  mt-0 xl:mt-52 overflow-hidden"
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
         
        }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex  relative z-10 w-[42px] h-[42px] border lg:w-[58px] lg:h-[58px] rounded-[8px]   items-center justify-center`}
        style={{ borderColor: active ? "rgba(248,248,248,0.5)" : "white"}}
      >
        <motion.div
          animate={{ filter: active ? "brightness(0) invert(1)" : "brightness(1) invert(0)" }}
          transition={{ duration: 0.5 }}
        >
         
          <LucideIcon name={icon} strokeWidth={1} className="text-primary w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
        </motion.div>
      </motion.div>

      {/* content */}
      <div className="relative z-10 flex flex-col">
        <motion.p
          animate={{ color: active ? "#ffffff" : "#114A9F" }}
          transition={{ duration: 0.5 }}
          className="text-[32px] md:text-[42px] lg:text-[56px] 3xl:text-[86px] font-[600] tracking-[-2%] leading-none"
        >
          {value}
        </motion.p>

        <motion.h3
          animate={{ color: active ? "#ffffff" : "#114A9F" }}
          transition={{ duration: 0.5 }}
          className="mt-[39px] md:mt-[32px] mb-[12px] md:mb-[18px] text-[16px] !leading-[1.25]  md:!leading-[1.75]   lg:!leading-[1.459] md:text-24 xl:text-24 2xl:text-24 font-[500]   tracking-[-3%]"
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
  const [lastHovered, setLastHovered] = useState<number>(1);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-6 xl:gap-[30px] mt-2 lg:mt-6 xl:mt-0 ">
      {metricsData.map((item, i) => (
        <MetricCard
          key={i}
          {...item}
          active={activeIndex === i}
          onHover={() => {
            setActiveIndex(i);
            setLastHovered(i);
          }}
          onLeave={() => setActiveIndex(lastHovered)}
        />
      ))}
    </div>
  );
}
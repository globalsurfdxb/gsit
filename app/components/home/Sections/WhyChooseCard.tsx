"use client";

import { motion } from "framer-motion";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

interface WhyChooseCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function WhyChooseCard({ icon, title, description }: WhyChooseCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      className="relative group flex flex-col gap-4.5 bg-bgF5F9FC rounded-2xl p-4 lg:p-6  "
    >
      {/* SVG animated border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          rx="16"
          ry="16"
          stroke="#d2dff8ff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
          }}
        />
      </svg>

      {/* icon lifts up slightly */}
      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -4 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IconBox 
                icon={<LucideIcon name={icon} strokeWidth={1} className="text-primary w-[24px] h-[24px] md:w-[32px] md:h-[32px] group-hover:brightness-0 group-hover:invert transition-all duration-300" />}  
                bgClass="bg-[#E8EDF6] group-hover:bg-primary rounded-[5px] md:rounded-[8px] lg:rounded-[5px]  mb-[14px] lg:mb-[34px] transition-all duration-300"
              />
      </motion.div>

      <motion.h3
        variants={{
          rest: { color: "#114A9F" },
          hover: { color: "#0a3070" },
        }}
        transition={{ duration: 0.3 }}
        className="text-27-medium "
      >
        {title}
      </motion.h3>

      <p className="text-paragraph text-18  md:max-w-[29ch] lg:max-w-[24ch]">
        {description}
      </p>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";
import { ArrowRight } from "lucide-react";

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
      className="min-h-[270px] 2xl:min-h-[294px] bg-white cursor-pointer relative group flex flex-col justify-between gap-4 border border-[#D3D3D3] hover:border-[#D3D3D356] transition-all duration-500 rounded-[19px] p-4 lg:p-6  "
    >
      {/* SVG animated border — starts top-left, grows equally right and down/left, completes the full rectangle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-[16px] hidden group-hover:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* top-left → right along top → down right side → PAST bottom-right */}
        <motion.path
          d="M5,0 H95 Q100,0 100,5 V95 Q100,100 95,100 L97,100"
          stroke="#114A9F"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          variants={{
            rest: { pathLength: 0, opacity: 1 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* top-left → down left side → along bottom → PAST bottom-right */}
        <motion.path
          d="M5,0 Q0,0 0,5 V95 Q0,100 5,100 L97,100"
          stroke="#114A9F"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          variants={{
            rest: { pathLength: 0, opacity: 1 },
            hover: { pathLength: 1, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>

      {/* icon lifts up slightly */}
     <div className="flex justify-between">
       <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -4 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IconBox 
                icon={<LucideIcon name={icon} strokeWidth={1} className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] group-hover:brightness-0 group-hover:invert transition-all duration-300" />}  
                bgClass="bg-[#EEF5FF] group-hover:bg-primary rounded-[5px] md:rounded-[8px] lg:rounded-[5px]  mb-[14px] lg:mb-[34px]  transition-all duration-300"
              />
      </motion.div>
       <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -4 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IconBox 
                icon={<ArrowRight strokeWidth={1}  className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px]     transition-all duration-300" />}  
                bgClass="    rounded-[5px] md:rounded-[8px] lg:rounded-[5px]  mb-[14px] lg:mb-[34px]  transition-all duration-300"
              />
      </motion.div>
     </div>

     <div>
       <motion.h3
        variants={{
          rest: { color: "#114A9F" },
          hover: { color: "#0a3070" },
        }}
        transition={{ duration: 0.3 }}
        className="text-24 font-medium mb-4"
      >
        {title}
      </motion.h3>

      <p className="text-paragraphlte text-18 ">
        {description}
      </p>
     </div>
    </motion.div>
  );
}
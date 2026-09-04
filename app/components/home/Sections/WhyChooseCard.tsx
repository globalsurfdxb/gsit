"use client";

import { motion } from "framer-motion";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";
import { ArrowRight } from "lucide-react";

interface WhyChooseCardProps {
  icon: string;
  title: string;
  description: string;
  forceActive?: boolean; // true when this is the swiper's active slide on mobile — simulates :hover
}

export default function WhyChooseCard({ icon, title, description, forceActive = false }: WhyChooseCardProps) {
  return (
    <motion.div
      initial="rest"
      animate={forceActive ? "hover" : "rest"}
      whileHover="hover"
      whileTap="hover"
      className={`hoverborder bgA7CAFF min-h-[270px] 2xl:min-h-[294px] bg-white cursor-pointer relative group flex flex-col justify-between gap-4 border transition-all duration-500 rounded-[19px] p-4 lg:p-6
        ${forceActive ? "is-active bg-[#EEF5FF] border-[#D3D3D356]" : "border-[#D3D3D3] hover:bg-[#EEF5FF] hover:border-[#D3D3D356]"}
      `}
    >
      {/* icon lifts up slightly */}
      <div className="flex justify-between">
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <IconBox
            icon={
              <LucideIcon
                name={icon}
                strokeWidth={1}
                className={`text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] transition-all duration-300 ${
                  forceActive ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
            }
            bgClass={`rounded-[5px] md:rounded-[8px] lg:rounded-[5px] mb-[14px] lg:mb-[34px] transition-all duration-300 ${
              forceActive ? "bg-primary" : "bg-[#EEF5FF] group-hover:bg-primary"
            }`}
          />
        </motion.div>
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <IconBox
            icon={
              <ArrowRight
                strokeWidth={1}
                className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] transition-all duration-300"
              />
            }
            bgClass="rounded-[5px] md:rounded-[8px] lg:rounded-[5px] mb-[14px] lg:mb-[34px] transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* title + description block — title sits naturally, description reveals below on hover/active */}
      <div>
        <motion.h3
          transition={{ duration: 0.3 }}
          className="text-24 font-medium text-primary"
        >
          {title}
        </motion.h3>

        <motion.div
          className="overflow-hidden"
          variants={{
            rest: { height: 0, opacity: 0 },
            hover: { height: "auto", opacity: 1 },
          }}
          transition={{
            height: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
          }}
        >
          <motion.p
            className="text-primary text-18 pt-4"
            variants={{ rest: { y: -8 }, hover: { y: 0 } }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
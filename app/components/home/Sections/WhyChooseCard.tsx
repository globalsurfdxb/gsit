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
      className="hoverborder bgA7CAFF min-h-[270px] 2xl:min-h-[294px] bg-white cursor-pointer relative group flex flex-col justify-between gap-4 hover:bg-[#EEF5FF] border border-[#D3D3D3] hover:border-[#D3D3D356] transition-all duration-500 rounded-[19px] p-4 lg:p-6  "
    >
    
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
            icon={
              <LucideIcon
                name={icon}
                strokeWidth={1}
                className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            }
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
            icon={
              <ArrowRight
                strokeWidth={1}
                className="text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px]     transition-all duration-300"
              />
            }
            bgClass="    rounded-[5px] md:rounded-[8px] lg:rounded-[5px]  mb-[14px] lg:mb-[34px]  transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* title + description block — title sits naturally, description reveals below on hover */}
      <div>
        <motion.h3
          // variants={{
          //   rest: { color: "#114A9F" },
          //   hover: { color: "#0a3070" },
          // }}
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
            variants={{
              rest: { y: -8 },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
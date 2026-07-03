"use client";

import { useState } from "react";
import LucideIcon from "@/app/components/common/LucideIcon";
import IconBox from "@/app/components/common/IconBox";
import Link from "next/link";

export interface ServiceItem {
  icon: string;
  title: string;
  description?: string;
  href: string;
}

interface ServicesGridProps {
  data: ServiceItem[];
}

export default function ServicesGrid({ data }: ServicesGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 pt-52">
      {data.map((item, i) => {
        const active = activeIndex === i;
        return (
          <Link
            key={i}
            href={item.href}
            onMouseEnter={() => setActiveIndex(i)}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`group border flex flex-col gap-8 justify-between rounded-2xl p-5 lg:p-6 min-h-[240px] lg:min-h-[250px] 3xl:min-h-[270px] transition-colors duration-500 ${
              active
                ? "bg-primary  border-primary"
                : "bg-white   border-[#d3d3d3]"
            }`}
          >
            <div>
              <h3
                className={`text-24  tracking-[-3.5%] transition-colors duration-500 mb-4 ${
                  active ? "text-white" : "text-primary"
                }`}
              >
                {item.title}
              </h3>

              {item.description && (
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                 
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-18 text-[#E3E3E3] max-w-[32ch] transition-all duration-700 ease-[cubic-bezier(0.65,3,4.5,2)] ${
                        active
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-6"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between ">
              <IconBox
                icon={
                  <LucideIcon
                    name={item.icon}
                    strokeWidth={1}
                    className={`w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] transition-colors duration-500 ${
                      active ? "text-white" : "text-primary"
                    }`}
                  />
                }
                bgClass={
                  active
                    ? "bg-transparent"
                    : "bg-transparent rounded-[0px] "
                }
              />

              <span
                className={`flex items-center justify-center w-[42px] h-[42px] 2xl:w-[58px] 2xl:h-[58px]  rounded-xl transition-colors duration-500 bg-[#EEF5FF]`}
              >
                <LucideIcon
                  name="ArrowRight"
                  strokeWidth={1}
                  className="w-5 h-5 text-primary transition-colors duration-500"
                />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
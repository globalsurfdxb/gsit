"use client";

import { useState } from "react";
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";
import { ArrowUpRight } from "lucide-react";

export interface WhyUsItem {
  title: string;
  description: string;
  url?: string;
}

interface WhyUsGridProps {
  data: WhyUsItem[];
  minheight?:string;
}

export default function WhyUsGrid({ data,minheight ="min-h-[225px] 2xl:min-h-[325px]" }: WhyUsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7.5 mt-52">
      {data.map((item, i) => {
        const active = activeIndex === i;
        const hasUrl = Boolean(item.url && item.url.trim() !== "");

        const cardContent = (
          <div
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            className={`group rounded-2xl p-4 lg:p-6 border h-full transition-colors duration-500 ${minheight} flex flex-col justify-between ${
              hasUrl
                ? "cursor-pointer bg-[linear-gradient(135deg,_#1A2E6E_0%,_#1A3FA0_100%)] border-primary"
                : "bg-white border-[#d3d3d3]"
            }`}
          >
            <div className="flex">
              <h3
                className={`text-32 font-medium mb-4 transition-colors duration-500 ${
                  hasUrl ? "text-white" : "text-primary"
                }`}
              >
                {item.title}
              </h3>
              {hasUrl && (
                <div className="ms-auto top-5 right-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
                  <IconBox
                    icon={
                      <ArrowUpRight
                        strokeWidth={1}
                        className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary group-active:rotate-45 group-hover:rotate-45 transition-transform duration-300"
                      />
                    }
                    imgsize="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                    bgClass="bg-white rounded-[8px] lg:rounded-[12px]"
                  />
                </div>
              )}
            </div>

            <div>
              <div
                className={`border-t transition-colors duration-500 mb-4 ${
                  hasUrl ? "border-white" : "border-[#d3d3d3]"
                }`}
              />

              <p
                className={`text-18 tracking-[-3%] 2xl:!leading-[1.704] transition-colors duration-500  ${
                  hasUrl ? "text-white" : "text-paragraph"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        );

        return hasUrl ? (
          <Link href={item.url as string} key={i}>
            {cardContent}
          </Link>
        ) : (
          <div key={i}>{cardContent}</div>
        );
      })}
    </div>
  );
}
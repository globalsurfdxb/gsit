"use client";

import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";
import { ArrowUpRight } from "lucide-react";
import LucideIcon from "@/app/components/common/LucideIcon";

interface IndustryItem {
  icon: string;
  title: string;
  description: string;
  href?: string; // optional link target for "link" variant
}

interface GridFourProps {
  industriesData: IndustryItem[];
  classheight?: string;
  gridclass?: string;
  myclass?: string;
  variant?: "default" | "link";  
}

export default function Impactgrid({
  industriesData,
  classheight,
  myclass = "my-4",
  gridclass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  variant = "default",
}: GridFourProps) {
  const isLink = variant === "link";

  return (
    <div className={`grid overflow-hidden gap-4 lg:gap-6 ${gridclass}`}>
      {industriesData.map((item, i) => {
        const Wrapper = isLink && item.href ? Link : "div";
        const wrapperProps = isLink && item.href ? { href: item.href } : {};

        return (
          <Wrapper
            key={i}
            {...(wrapperProps as any)}
            className={`${classheight}  justify-between rounded-2xl flex flex-col group relative p-4 2xl:p-5 3xl:p-6 overflow-hidden transition-colors duration-300 ${
              isLink
                ? "bg-transparent cursor-pointer hover:bg-[#F5F9FC]"
                : "bg-[#F5F9FC]"
            }`}
          >
            {/* arrow icon — only for link variant, fades/slides in on hover */}
            {isLink && (
              <div className="absolute  top-7 right-5  lg:right-6     opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 
              group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-x-0 group-active:translate-y-0">
              <IconBox
                  icon={
                    <LucideIcon
                      name={'ArrowUpRight'}
                      strokeWidth={1}
                      className="w-5 h-5  lg:w-[24px] lg:h-[24px]  text-white"
                    />
                  }
                  bgClass="!w-7.5 !h-7.5 lg:!w-[42px] lg:!h-[42px] bg-primary rounded-[4px] "
                />
              </div>
            )}

            {/* icon — scales on hover */}
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 w-fit">
              {item.icon && (
                <IconBox
                  icon={
                    <LucideIcon
                      name={item.icon}
                      strokeWidth={1}
                      className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                    />
                  }
                  bgClass="bg-[#EEF5FF] rounded-[8px] lg:rounded-[12px]"
                />
              )}
            </div>

            <div>
              {/* title — slides up slightly */}
              <h3
                className={`relative z-10 text-primary ${myclass} text-24 tracking-[-3%] font-medium transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1`}
              >
                {item.title}
              </h3>

              {/* description — fades in stronger */}
              <p className="relative z-10 text-paragraph text-18 transition-all duration-300 group-hover:text-paragraph group-active:text-paragraph">
                {item.description}
              </p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
"use client";

import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";
import Link from "next/link";
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  url?: string;
}

interface ProcessStepsProps {
  data: ProcessStep[];
  gridclass?: string;
  boxheight?: string;
}

export default function Grid({
  data,
  gridclass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ",
  boxheight,
}: ProcessStepsProps) {
  return (
    <section className="pt-52">
      <div className="">
        <div
          className={`grid ${gridclass}  gap-12 md:gap-13 2xl:gap-x-7.5 2xl:gap-y-52`}
        >
          {data.map((step, i) => {
            const hasUrl = Boolean(step.url && step.url.trim() !== "");
            const Wrapper = hasUrl ? Link : "div";
            const wrapperProps = hasUrl ? { href: step.url as string } : {};

            const content = (
              <div className={`relative ${boxheight} h-full`}>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      hasUrl ? "group-hover:text-primary" : ""
                    } transition-all duration-300 block text-[40px] md:text-[50px] lg:text-[62px] leading-[1] font-bold text-[#DAE7F0] select-none`}
                  >
                    {step.number}
                  </span>
                  {hasUrl && (
                    <IconBox
                      icon={
                        <LucideIcon
                          name="ArrowRight"
                          strokeWidth={1}
                          className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary group-hover:brightness-0 group-hover:invert-100 group-hover:-rotate-45 transition-transform duration-300"
                        />
                      }
                      bgClass="transition-all duration-500 bg-[#F5F9FC] border-[#EBF2FD] rounded-[4.43px] flex items-center justify-center   text-primary group-hover:text-white bg-[#F5F9FC] group-hover:bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]  "
                    />
                  )}
                </div>

                <div className={`flex flex-col justify-start lg:pt-10 xl:pt-0  h-full mt-[15px] lg:mt-6 `}>
                  <h3
                    className={`text-primary text-24 tracking-[-3%] font-medium mb-4 lg:mb-5 ${
                      hasUrl ? "group-hover:text-primary" : ""
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[#A9A9A9] text-18 transition-all duration-300 ${
                      hasUrl ? "group-hover:text-primary" : ""
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );

            return (
              <div key={i} className="relative group">
                <Wrapper
                  {...(wrapperProps as any)}
                  className={hasUrl ? "group-hover:text-primary" : ""}
                >
                  {content}
                </Wrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
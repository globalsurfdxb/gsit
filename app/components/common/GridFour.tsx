 
"use client";

import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";
import { ArrowUpRight } from "lucide-react";
import LucideIcon from "@/app/components/common/LucideIcon";

interface IndustryItem {
  icon: string;
  title: string;
  description: string;
}

interface IndustryCTAProps {
  title: string;
  description: string;
  href: string;
}

interface GridFourProps {
  industriesData: IndustryItem[];
  industryCTA: IndustryCTAProps;
  gap?:boolean;
}

export default function GridFour({ industriesData, industryCTA,gap }: GridFourProps) {
  return (  

    <div className={`grid  lg:mt-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden ${gap ? 'mt-6 gap-4 lg:gap-7.5  ' :' mt-5 border-t border-l border-[#cccccc] rounded-2xl  divide-x divide-y divide-[#cccccc]'}`}>
      {industriesData.map((item, i) => (
        <div
          key={i}
          className={`min-h-[196px] lg:min-h-[257px] 3xl:min-h-[229px] group relative flex flex-col p-4 lg:p-6 overflow-hidden transition-colors duration-300 ${gap ? 'border border-[#D3D3D3] rounded-2xl':''} `}  >
         
          {/* icon — scales on hover */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 w-fit">
            <IconBox
              icon={
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                />
              }
              bgClass="bg-[#E8EDF6] rounded-[8px] lg:rounded-[12px]"
            />
          </div>

          {/* title — slides up slightly */}
          <h3 className="relative z-10 text-primary mt-[23px] mb-[12px] text-24 tracking-[-3%] font-bold  transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1">
            {item.title}
          </h3>

          {/* description — fades in stronger */}
          <p className="relative z-10 lg:max-w-[28ch] text-paragraphlte text-18 tracking-[-3%] transition-all duration-300 group-hover:text-paragraph group-active:text-paragraph">
            {item.description}
          </p>

        </div>
      ))}

      {/* CTA card */}
      <Link
        href={industryCTA.href}
        className={`group relative flex flex-col justify-end p-4 lg:p-6 bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] overflow-hidden ${gap?'rounded-2xl':''} `}
      >
        {/* subtle shimmer overlay on hover/touch */}
        <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 `} />

        {/* icon box */}
        <div className="ms-auto lg:absolute top-5 right-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
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

        {/* content lifts up on hover/touch */}
        <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1">
          <h3 className="text-[#E0E8F3] mt-[23px] mb-[12px] text-24 tracking-[-3%] font-bold ">
            {industryCTA.title}
          </h3>
          <p className="text-[#DEDEDE] text-18">{industryCTA.description}</p>
        </div>

        {/* bottom accent line */}
        <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full group-active:w-full bg-white/30 transition-all duration-500 ease-in-out" />
      </Link>
    </div>
  );
}
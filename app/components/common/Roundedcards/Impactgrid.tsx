 
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
  classheight?:string;
  gridclass?:string;
  myclass?:string;
}

export default function Impactgrid({ industriesData, classheight, myclass="my-4", gridclass='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'  }: GridFourProps) {
  return (  

    <div className={`grid    overflow-hidden  gap-4 lg:gap-6 ${gridclass}`}>
      {industriesData.map((item, i) => (
        <div
          key={i}
          className={`${classheight} justify-between rounded-2xl flex flex-col  group relative flex flex-col p-4 2xl:p-5 3xl:p-6 overflow-hidden transition-colors duration-300 bg-[#F5F9FC] `}  >
         
          {/* icon — scales on hover */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 w-fit">
            {item.icon &&(<IconBox 
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

          {/* title — slides up slightly  */}
          <h3 className={`relative z-10 text-primary  ${myclass}  text-24 tracking-[-3%] font-medium  transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1`}>
            {item.title}
          </h3>

          {/* description — fades in stronger */}
          <p className="relative z-10 text-paragraph text-18  transition-all duration-300 group-hover:text-paragraph group-active:text-paragraph">
            {item.description}
          </p>
</div>

        </div>
      ))}

      
    </div>
  );
}
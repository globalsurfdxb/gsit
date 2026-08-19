"use client";

import IconBox from "@/app/components/common/IconBox"; 
import LucideIcon from "@/app/components/common/LucideIcon"; 
 
export interface itemtype { 
  type: string;
  image?: string;
  icon?: string;
  title: string;
  description?: string;
  href?: string;
}
 
export interface ITArchitectureData {
    tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
    items:  itemtype[];
} 
 
export default function Graybox({ item }: { item: itemtype }) { 
  return ( 
    <div className="rounded-2xl p-4 md:p-6 bg-[#F6F6F6] flex flex-col justify-between min-h-[280px] lg:min-h-[353px]">
      <div>
        {item.icon &&(
        <IconBox
          icon={
            item.icon ? (
              <LucideIcon
                name={item.icon}
                strokeWidth={1}
                className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
              />
            ) : null
          }
          bgClass="bg-white rounded-[8px]"
        />
        )}
        <h3 className="text-32 mt-4 lg:mt-6 text-primary tracking-[-3%] whitespace-pre-line">
          {item.title}
        </h3>
      </div>

      <div>
        {item.description && (
          <p className="text-18 text-paragraph/50 mt-3">{item.description}</p>
        )}
      </div>
    </div>
  );
}
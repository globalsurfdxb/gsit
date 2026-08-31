"use client";

import IconBox from "@/app/components/common/IconBox"; 
import LucideIcon from "@/app/components/common/LucideIcon"; 
 
export interface itemtype { 
  type: string;
  image?: string;
  icon?: string;
  titleLine1?: string;
  titleLine2?: string;
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
 
export default function Graytextbox({ item }: { item: itemtype }) { 
  return ( 
    <div className="rounded-2xl p-4 md:p-6 bg-[linear-gradient(180deg,#F2F2F9_0%,#F3F6FF_100%)] flex flex-col justify-between min-h-[250px] md:min-h-[280px] xl:min-h-[353px]">
      <div> 
        <h3 className="text-42  tracking-[-3%]">
        <span className="block text-paragraph ">{item.titleLine1}</span>
        <span className="block text-[#9a9a9a] ">{item.titleLine2}</span>
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
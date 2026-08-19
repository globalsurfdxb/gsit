"use client" 
import { useState } from "react";
import ServiceCard from "./ServiceCard"; 

export interface ButtonItem {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  href: string;
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description?: string;
  subhead?:string;
   
  servicesData: ButtonItem[];  
}

interface BoxwithArrowProps {
  SectionHeaderData: FeatureItem; 
  redtheme?: boolean;
  arrow?:boolean;
  gridcount?:number;
  bg?: string;
  iconbg?: string;
}
export default function BoxwithArrow({ SectionHeaderData, redtheme = false ,arrow ,gridcount=3, bg, iconbg}: BoxwithArrowProps) {  

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
     <div className={` grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-${gridcount} ${redtheme ? '  2xl:gap-10.5': 'gap-4'} ${bg ? '    2xl:gap-6': '2xl:gap-y-10.5 2xl:gap-x-6'}   pt-4 lg:pt-52 `}>
      {SectionHeaderData.servicesData.map((service, i) => (
        <ServiceCard
          key={i}
          {...service}
          featured={hoveredIndex === i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(0)}
          redtheme={redtheme}
          arrow={arrow}
          gridcount={gridcount}
          bg={bg}
          iconbg={iconbg}
        />
      ))}
    </div>
     
  );
}
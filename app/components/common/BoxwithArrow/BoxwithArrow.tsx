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
  description: string;
   
  servicesData: ButtonItem[];  
}

interface BoxwithArrowProps {
  SectionHeaderData: FeatureItem; 
}
export default function BoxwithArrow({ SectionHeaderData }: BoxwithArrowProps) {  

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[40px]  3xl:gap-y-[48px] gap-x-6 pt-4 lg:pt-52">
      {SectionHeaderData.servicesData.map((service, i) => (
        <ServiceCard
          key={i}
          {...service}
          featured={hoveredIndex === i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(0)}
        />
      ))}
    </div>
     
  );
}
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
  hidearrow?: boolean;
}
export default function BoxwithArrow({ SectionHeaderData, hidearrow = false }: BoxwithArrowProps) {  

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
     <div className={` ${hidearrow ? "gap-y-4  3xl:gap-y-10.5 ":"gap-y-4  3xl:gap-y-6"}  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-x-6 pt-4 lg:pt-52 `}>
      {SectionHeaderData.servicesData.map((service, i) => (
        <ServiceCard
          key={i}
          {...service}
          featured={hoveredIndex === i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(0)}
          hidearrow={hidearrow}
        />
      ))}
    </div>
     
  );
}
"use client" 
import { useState } from "react";
import BoxwithArrow from "@/app/components/common/BoxwithArrow/BoxwithArrow";
import SectionHeader from "@/app/components/common/SectionHeader"; 

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

interface WhatWeDoProps {
  SectionHeaderData: FeatureItem; 
}
export default function WhatWeDo({ SectionHeaderData }: WhatWeDoProps) {  

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={SectionHeaderData}   headingClass="text-heading max-w-[16ch] md:max-w-full lg:max-w-[16ch]" descriptionClass="lg:max-w-[27ch]"/>
<BoxwithArrow SectionHeaderData={SectionHeaderData} />
      </div>
    </section>
  );
}
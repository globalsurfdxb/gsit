"use client"  
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
  subhead?: string;
  servicesData: ButtonItem[];
}

interface WhatWeOfferProps {
  data: FeatureItem;
  subtitle?: boolean;
  subtitleClass?: string;
  headingClass?: string;
  descriptionClass?: string;
  redtheme?:boolean;
  arrow?:boolean;
  gridcount?:number;
}

export default function IconCardGrid({ data, subtitle, subtitleClass, headingClass, descriptionClass, redtheme,arrow,gridcount }: WhatWeOfferProps) {  
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={data}  subtitle={subtitle}   subtitleClass={subtitleClass}  headingClass={headingClass} descriptionClass={descriptionClass}/>
         <BoxwithArrow SectionHeaderData={data} redtheme={redtheme} arrow={arrow} gridcount={gridcount}/>
         
      </div>
    </section>
  );
}
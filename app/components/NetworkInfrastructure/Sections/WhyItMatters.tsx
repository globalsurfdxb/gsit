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
  SectionHeaderData: FeatureItem; 
}
export default function WhyItMatters({ SectionHeaderData }: WhatWeOfferProps) {  
 
  return (
    <section className="bg-white rounded-2xl py-82"> 
      <div className="container ">
         <SectionHeader data={SectionHeaderData} subtitle={true} subtitleClass="max-w-[120ch]"  headingClass="text-heading headred " descriptionClass="lg:max-w-[54ch]"/>
         
            <BoxwithArrow SectionHeaderData={SectionHeaderData} hidearrow={true} />
         
      </div>
    </section>
  );
}
"use client"
import BoxwithArrow from "@/app/components/common/BoxwithArrow/BoxwithArrow";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

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
  subtitleClass?: string;
  redtheme?: boolean;
  arrow?: boolean;
  gridcount?: number;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
}

export default function IconCardGrid({
  data,
  subtitleClass,
  variant,
  redtheme,
  arrow,
  gridcount,
}: WhatWeOfferProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
          <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
          highlightColorClass={redtheme ? "text-[#E5484D]" : "text-primary"}
        /> 
        <BoxwithArrow
          SectionHeaderData={data}
          redtheme={redtheme}
          arrow={arrow}
          gridcount={gridcount}
        />
      </div>
    </section>
  );
}
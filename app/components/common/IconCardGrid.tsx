"use client"
import BoxwithArrow from "@/app/components/common/BoxwithArrow/BoxwithArrow";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
 
import Cta from "@/app/components/common/Cta";

export interface ButtonItem {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  href: string;
}
export interface ctaItem {
  title: string; description: string; button: string; background: string; classtitle: string; classdesc: string;
}
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  servicesData: ButtonItem[];
  footerdata?:string;
  cta?:ctaItem;
}

interface WhatWeOfferProps {
  data: FeatureItem;
  subtitleClass?: string;
  redtheme?: boolean;
  arrow?: boolean;
  gridcount?: number;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  bg?: string;
  iconbg?: string;
}

export default function IconCardGrid({
  data,
  subtitleClass,
  variant,
  redtheme,
  arrow,
  gridcount,
  bg,
  iconbg,
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
          bg={bg}
          iconbg={iconbg}
        />
            {data.footerdata && (
              <div><p className="text-paragaph text-18 pt-4 lg:pt-6 border-t border-[#d3d3d3] mt-52">{data.footerdata}</p></div>
            )}

            {data.cta && (  <Cta items={data.cta} classcta="mt-52"/>
                            )}
      </div>
    </section>
  );
}
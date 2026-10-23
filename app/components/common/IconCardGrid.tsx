"use client";
import BoxwithArrow from "@/app/components/common/BoxwithArrow/BoxwithArrow";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

import Cta from "@/app/components/common/Cta";
import Image from "next/image";

export interface ButtonItem {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
  href: string;
}
export interface ctaItem {
  title: string;
  description: string;
  button: string;
  background: string;
}
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  servicesData: ButtonItem[];
  footerdata?: string;
  cta?: ctaItem;
  ecosystemBadges?: ecosystemBadgesProps;
}
interface ecosystemBadgesProps {
  title: string;
  platforms: { name: string; icon: string }[];
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
  footertext?: boolean;
  titleColor?: string;
  titleMargin?: number;
 
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
  footertext = false,
  titleColor,
  titleMargin,
  
}: WhatWeOfferProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
          highlightColorClass={
            titleColor || (redtheme ? "text-[#E5484D]" : "text-primary")
          }
        />
        <BoxwithArrow
          SectionHeaderData={data}
          redtheme={redtheme}
          arrow={arrow}
          gridcount={gridcount}
          bg={bg}
          iconbg={iconbg}
          titleMargin={titleMargin}
        />
        {data.footerdata && (
          <div>
            <p className="text-paragaph text-18 pt-4 lg:pt-6 border-t border-[#d3d3d3] mt-52">
              {data.footerdata}
            </p>
          </div>
        )}

        {data.cta?.title && <Cta items={data.cta} classcta="mt-52" />}
        {footertext && (
          <p className="text-18 text-paragraph mt-52">
            Trusted by 1,500+ UAE organizations to run their whole estate.
          </p>
        )}

        {data.ecosystemBadges && (
          <div className=" bg-[#EEF5FF] flex items-center lg:justify-between rounded-[13px] lg:rounded-[16px] mt-[20px] lg:mt-[42px]  flex-wrap p-4 lg:p-6">
            <p className="text-18 text-primary ">{data.ecosystemBadges.title}</p>
            <div className="grid max-lg:mt-2 grid-cols-2 md:grid-cols-4 gap-4 lg:gap-[clamp(22px,1.09vw,65.43px)]">
              {data.ecosystemBadges.platforms.map((data) => (
                <div className="flex  items-center gap-1 lg:gap-4" key={data.name} >
                  <Image src={data.icon} width={42}  height={42} alt={data.name} className="w-auto h-[32px] md:h-[36px] lg:h-[42px]" />
                  <span className="text-[15px] lg:text-[18px] leading-[1.5] lg:leading-[1.7]" >{data.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

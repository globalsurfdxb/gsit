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
          <div className="mt-[20px] flex flex-col items-stretch gap-4 rounded-[13px] bg-[#EEF5FF] p-4 lg:mt-[42px] lg:flex-row lg:items-center justify-between lg:gap-6 lg:rounded-[16px] lg:p-6">
            <p className="text-24 font-medium text-primary ">
              {data.ecosystemBadges.title}
            </p>

            <div className="grid  grid-cols-2 gap-4 md:grid-cols-3 lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-[clamp(22px,1.09vw,65.43px)] lg:max-w-[933px]">
              {data.ecosystemBadges.platforms.map((item) => (
                <div
                  className="flex min-w-0 items-center gap-1 lg:shrink-0 lg:gap-2"
                  key={item.name}
                >
                  <Image
                    src={item.icon}
                    width={42}
                    height={42}
                    alt={item.name}
                    className="h-[32px] w-auto shrink-0 md:h-[36px] lg:h-[42px]"
                  />
                  <span className="text-16 whitespace-nowrap lg:text-18">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

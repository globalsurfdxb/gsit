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
export interface WorksWithItem {
  title: string;
  logos: { src: string; alt: string }[];
}
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  servicesData: ButtonItem[];
  footerdata?: string;
  footnote?: string; // small grey note shown under the works-with band
  cta?: ctaItem;
  ecosystemBadges?: ecosystemBadgesProps;
  worksWith?: WorksWithItem; // optional "Works with" logo band
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

        {/* Optional: "Works with" logo band */}
        {data.worksWith?.logos?.length ? (
          <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-bgF5F9FC p-4 lg:mt-[42px] lg:flex-row lg:items-center lg:gap-8 lg:p-[26px]">
            <p className="shrink-0 text-[14px] uppercase text-paragraph lg:text-18 lg:border-r lg:border-[#D3D3D3] lg:py-3 lg:pr-8">
              {data.worksWith.title}
            </p>

            <div className="grid flex-1 grid-cols-2 items-center   min-[521px]:grid-cols-3 lg:flex lg:justify-between">
              {data.worksWith.logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-start lg:justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={40}
                    className="h-[50px] w-auto max-w-full object-contain lg:h-[73px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {data.footerdata && (
          <div>
            <p className="text-paragraph text-18 pt-4 lg:pt-6 border-t border-[#d3d3d3] mt-52">
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
          <div className="mt-[20px] flex flex-col items-stretch gap-4 rounded-[13px] bg-[#EEF5FF] p-4 lg:mt-[42px] 2xl:flex-row 2xl:items-center justify-between lg:gap-6 lg:rounded-[16px] lg:p-6">
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


        {data.footnote && (
          <p className="mt-6 text-[14px] leading-[1.6] text-textgray lg:mt-10 lg:text-[16px]">
            {data.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
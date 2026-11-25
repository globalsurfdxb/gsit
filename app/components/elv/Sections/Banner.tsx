"use client";


import { useRef } from "react";
import Image from "next/image";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { parseMaxW } from "@/lib/utils/cmsMaxWidth";
import { parsePadding } from "@/lib/utils/cmsPadding";
 


export interface ButtonItem {
  text: string;
  icon: string;
  bgButton: string;
  dark: boolean;
  href: string;
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  bannercta?:string;
  backgroundImage: string;
  mobbanner: string;
  keypoints: string[];
  buttons: ButtonItem[]; // renamed from btndata to match actual data
}

interface BannerProps {
  bannerData: FeatureItem; // single object, not an array
  padding:string;
  descstyle?:string;
}
export default function Banner({ bannerData,padding,descstyle }: BannerProps ) { 
  
  const sourceRef = useRef<HTMLDivElement>(null);
  const descW = parseMaxW(descstyle);
  const pad = parsePadding(padding);
  // Phones show the image above the content, so the top padding that used to
  // make room for the background image is no longer needed there.
  const padStyle: Record<string, string> = { ...pad.style, "--pt": "1rem" };
  if (padStyle["--pt-sm"]) padStyle["--pt-sm"] = "1rem";
  

  return (
    <section className="rounded-2xl">
      {/* Phones: image on top, fading into the content below. Tablet and up use the background image. */}
      {bannerData.mobbanner && (
        <div className="relative md:hidden">
          <Image src={bannerData.mobbanner} width={300} height={400} alt="" className="w-full rounded-t-2xl" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgb(255, 255, 255) 1%, rgb(255 255 255 / 0%) 25%, rgb(255 255 255 / 0%) 60%)",
            }}
          />
        </div>
      )}
    <div
      className="w-full rounded-2xl relative xl:mt-[11px] md:bg-cover md:bg-right md:bg-no-repeat md:bg-[image:var(--banner-bg)]"
      style={{ "--banner-bg": `url('${bannerData.backgroundImage}')` } as React.CSSProperties}
    >
    <div className="hidden rounded-2xl md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[75%]  lg:max-w-[70%]   bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]  " />
           
      <div className="container rounded-b-2xl lg:rounded-b-2xl bg-white md:!bg-none md:!bg-transparent bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_45.14%,_rgba(255,_255,_255,_0)_76.96%)]">
        <div className="" >
          <div
            className={`${pad.rest} cms-pad relative`}
            style={padStyle as React.CSSProperties}
            ref={sourceRef}
          >
            <div className="relative">
              <SectionTag text={bannerData.tag} />
            <div className="my-4 md:mb-6 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={bannerData.highlightLast}
                className="text-heading   lg:!whitespace-pre-normal md:!whitespace-pre-line  "
                text={bannerData.heading}
                titlebrake="hidden "
              />
            </div>
            <p className={`${descW.rest} ${descW.hasMaxW ? "cms-maxw" : ""} text-paragraph lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] `} style={descW.style as React.CSSProperties}>
              {bannerData.description}
            </p>
           {bannerData.bannercta && (
           <div><p className="text-18 font-medium text-primary tracking-[-3%] mt-4 lg:mt-6 py-[3px]">{bannerData.bannercta}</p></div>
            )} 
            <div className="flex flex-col md:block">
              <div className="order-2 md:order-1 flex flex-col md:flex-row items-center gap-4 pt-52">
                {bannerData.buttons.map((btn, i) => (
                  <CustomButton
                    key={i}
                    text={btn.text}
                    icon={btn.icon}
                    bgButton={btn.bgButton}
                    dark={btn.dark}
                    href={btn.href}
                  />
                ))}
              </div>
              <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-[fit-content(50%)_fit-content(50%)] xl:flex flex-col md:flex-row gap-4 xl:gap-0 mt-3 md:mt-52">
                {bannerData.keypoints.map((point, index) => (
                  <div key={index} className="lg:w-[190px] 3xl:w-[262px]">
                    <p className="text-primary text-18 !leading-[1.3] md:!leading-[1.3] lg:!leading-[1.625] 3xl:!leading-[1.445] 3xl:tracking-[-3%]  xl:!whitespace-pre-line">
                      {point}
                    </p>
                    {/* {index !== bannerData.keypoints.length - 1 && (
                      <div
                        className={`${
                          index === 1 ? "hidden lg:block" : ""
                        } bg-[#d3d3d3] h-full w-[1px]`}
                      />
                    )} */}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
"use client";


import { useEffect, useRef, useState } from "react";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import Image from "next/image"; 
 import type { StaticImageData } from "next/image";


export interface ButtonItem {
  text: string;
  icon: string;
  bgButton: string;
  dark: boolean;
  href: string;
}
export interface PointsItem { 
    value:string;
    desc:string;
    icon?:  string | StaticImageData;
  } 
export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  bannercta?:string;
  backgroundImage: string;
  mobbanner: string;
  points: PointsItem[];
  buttons: ButtonItem[]; // renamed from btndata to match actual data
}

interface BannerProps {
  bannerData: FeatureItem; // single object, not an array
  padding:string;
  descstyle?:string;
}
export default function Banner({ bannerData,padding,descstyle }: BannerProps ) { 
  
   const [isMobile, setIsMobile] = useState(false);

  const sourceRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  

  return (
    <section
      className={`w-full bg-cover  rounded-2xl relative xl:mt-[11px] ${isMobile ? 'bg-top':'bg-right'}`}
    style={{
        backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')`,
      }}
    >  
    <div className="hidden rounded-2xl md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 md:max-w-[75%]  lg:max-w-[90%]   bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]  " />
           
      <div className="container md:bg-none bg-[linear-gradient(0deg,#FFFFFF_0%,_#FFFFFF_65.14%,_rgba(255,_255,_255,_0)_78.96%)] rounded-2xl">
        <div className="" >
          <div className={`${padding} relative`}  ref={sourceRef}>
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
            <p className={`${descstyle} text-paragraph lg:text-paragraph text-[16px]  lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%] `}>
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
              <div className="order-1 md:order-2 mt-52">
                  <div className="grid grid-cols-2 lg:grid-cols-4 w-fit gap-4  md:gap-2 2xl:gap-6">
                     {bannerData.points.map((point, i) => (
                    <div key={i} className="min-w-[201px]"> 
                  <div className="flex">
                      <p className="text-primary text-24  font-medium !leading-[1.6] lg:!leading-[1.3334]  ">{point.value}</p>
                     {point.icon && (
                          <Image src={point.icon} width={16} height={16} alt="" />
                        )}
                  </div>
                    <p className={`mt-2 text-paragraph  text-16 font-medium lg:font-normal`}>{point.desc}</p>

                        
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